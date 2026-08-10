# Docker & Deploy — Guia de Replicação

Este documento descreve a estrutura de Docker (dev e produção) e o fluxo de deploy usados neste projeto, para servir de referência ao montar a mesma estrutura em outro projeto (stack Node/Fastify + React/Vite + PostgreSQL, ou similar).

## Visão geral

3 serviços de aplicação + 1 banco:

| Serviço | Tecnologia | Porta dev | Deploy prod |
|---|---|---|---|
| `db` | PostgreSQL 16 (alpine) | 5433 → 5432 | Container único, volume persistente |
| `backend` | Node 20 + Fastify + Prisma | 3002 | Container via `Dockerfile.prod` |
| `frontend` | React + Vite | 5174 | Build estático servido por Nginx (`Dockerfile.prod`) |
| `landing` | HTML/CSS estático | 8080 → 80 | Nginx servindo arquivos estáticos |

Dois arquivos de compose:
- `docker-compose.yml` — ambiente de desenvolvimento (hot reload, volumes montados do host).
- `docker-compose.prod.yml` — ambiente de produção (apenas `db` + `backend`; frontend/landing são deployados como apps estáticos separados, ex. via Dokploy/Nixpacks/Nginx próprio).

## 1. Dockerfiles

### Backend — dev (`backend/Dockerfile`)

Imagem única, sem multi-stage. Instala dependências, gera o Prisma Client e roda em modo watch via `entrypoint.sh`.

```dockerfile
FROM node:20-alpine
RUN apk add --no-cache openssl
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY prisma ./prisma
RUN npx prisma generate
COPY . .
RUN chmod +x entrypoint.sh
EXPOSE 3002
CMD ["sh", "entrypoint.sh"]
```

`entrypoint.sh` (dev): espera o banco ficar disponível, sincroniza o schema com `prisma db push` (sem gerar migration), roda `prisma generate` e sobe o servidor com `npm run dev` (hot reload).

```sh
#!/bin/sh
set -e
until npx prisma db push --accept-data-loss 2>/dev/null; do
  sleep 2
done
npx prisma generate
exec npm run dev
```

> `openssl` é necessário no Alpine para o Prisma Client funcionar corretamente (engine binária depende de libssl).

### Backend — produção (`backend/Dockerfile.prod`)

Multi-stage: `builder` compila TypeScript, `runner` copia só o necessário (`dist`, `node_modules`, `prisma`, `package.json`). Imagem final menor e sem devDependencies extras de build.

```dockerfile
FROM node:20-alpine AS builder
RUN apk add --no-cache openssl
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY prisma ./prisma
RUN npx prisma generate
COPY . .
RUN npm run build

FROM node:20-alpine AS runner
RUN apk add --no-cache openssl
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/package.json ./
COPY entrypoint.prod.sh ./entrypoint.prod.sh
RUN chmod +x entrypoint.prod.sh
EXPOSE 3002
CMD ["sh", "entrypoint.prod.sh"]
```

`entrypoint.prod.sh`: roda migrations reais (`prisma migrate deploy`, não `db push`) antes de subir o servidor compilado.

```sh
#!/bin/sh
set -e
npx prisma migrate deploy
exec node dist/server.js
```

**Regra importante:** em dev usa-se `db push` (rápido, sem histórico); em produção usa-se sempre `migrate deploy`, que aplica as migrations versionadas em `prisma/migrations/`. Por isso toda alteração de schema precisa virar uma migration (`npm run db:migrate` → `prisma migrate dev`) antes de ir para produção.

### Frontend — dev (`frontend/Dockerfile`)

Roda o Vite dev server diretamente, sem build.

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"]
```

`package.json`: `"dev": "vite --host 0.0.0.0"` — o `--host 0.0.0.0` é obrigatório para o Vite aceitar conexões de fora do container.

### Frontend — produção (`frontend/Dockerfile.prod`)

Multi-stage: build estático com Vite, servido por Nginx.

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL
RUN npm run build

FROM nginx:alpine AS runner
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Variáveis `VITE_*` são embutidas no bundle em **build time** (via `ARG`/`ENV`), não em runtime — por isso precisam ser passadas como `--build-arg` no build da imagem de produção.

`nginx.conf`: SPA fallback (`try_files $uri $uri/ /index.html`) para o React Router funcionar em qualquer rota, + gzip.

```nginx
server {
    listen 80;
    root /usr/share/nginx/html;
    index index.html;
    location / {
        try_files $uri $uri/ /index.html;
    }
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

### Landing page estática (`landing/Dockerfile`)

Nginx puro servindo HTML/CSS/assets sem build step (sem framework).

```dockerfile
FROM nginx:alpine
COPY index.html /usr/share/nginx/html/index.html
COPY colors_and_type.css /usr/share/nginx/html/colors_and_type.css
COPY assets/ /usr/share/nginx/html/assets/
COPY robots.txt /usr/share/nginx/html/robots.txt
COPY sitemap.xml /usr/share/nginx/html/sitemap.xml
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 2. `docker-compose.yml` (desenvolvimento)

Pontos-chave:

- **Hot reload:** código do host montado como volume (`./backend:/app`, `./frontend:/app`); `node_modules` fica em **volume nomeado separado** (`backend_modules`, `frontend_modules`) para não ser sobrescrito pelo mount do host nem misturar binários compilados no host com os do container.
- **Healthcheck no banco:** `backend` só sobe depois que `db` responde `pg_isready` (`depends_on.condition: service_healthy`), evitando erro de conexão na primeira subida.
- **CHOKIDAR_USEPOLLING=true / CHOKIDAR_INTERVAL=1000:** necessário para o file-watching funcionar dentro de containers Docker rodando em WSL2/Windows/Mac (o watch nativo de filesystem não propaga eventos corretamente através do bind mount).
- **Duas redes:** `hourfy-net` (interna do projeto) + `level-net` (rede `external: true`, compartilhada entre múltiplos projetos da organização — permite o backend se comunicar com outros serviços internos, ex. o LevelAdmin).
- **Variáveis de ambiente inline no compose** (não só `.env`) para os valores fixos de dev; segredos reais/sensíveis de integrações (SMTP, OAuth) ficam em `backend/.env` via `env_file`.

```yaml
version: '3.9'
services:
  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: hourfy
      POSTGRES_PASSWORD: hourfy_secret
      POSTGRES_DB: hourfy_db
    volumes:
      - postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U hourfy -d hourfy_db"]
      interval: 5s
      timeout: 5s
      retries: 5
    networks: [hourfy-net]

  backend:
    build: { context: ./backend, dockerfile: Dockerfile }
    env_file: [./backend/.env]
    environment:
      DATABASE_URL: postgresql://hourfy:hourfy_secret@db:5432/hourfy_db
      NODE_ENV: development
      CHOKIDAR_USEPOLLING: "true"
      CHOKIDAR_INTERVAL: "1000"
    depends_on:
      db: { condition: service_healthy }
    volumes:
      - ./backend:/app
      - backend_modules:/app/node_modules
    networks: [hourfy-net, level-net]

  frontend:
    build: { context: ./frontend, dockerfile: Dockerfile }
    environment:
      VITE_API_URL: http://localhost:3002
    depends_on: [backend]
    volumes:
      - ./frontend:/app
      - frontend_modules:/app/node_modules
    networks: [hourfy-net]

  landing:
    build: { context: ./landing, dockerfile: Dockerfile }
    volumes:
      - ./landing/index.html:/usr/share/nginx/html/index.html:ro
      # demais assets estáticos também como bind mount :ro

volumes:
  postgres_data:
  backend_modules:
  frontend_modules:

networks:
  hourfy-net: { driver: bridge }
  level-net: { external: true }   # criada previamente com `docker network create level-net`
```

## 3. `docker-compose.prod.yml` (produção)

Diferenças em relação ao dev:

- Só `db` + `backend` — frontend e landing (estáticos) são deployados fora do compose, como apps independentes (mesma imagem `Dockerfile.prod`, mas gerenciados pela plataforma de deploy — ver seção 4).
- **Nenhum segredo hardcoded** — tudo vem de variáveis de ambiente do host/plataforma (`${VAR}`), sem `env_file` apontando pra um `.env` do repo.
- Usa `Dockerfile.prod` (build compilado) em vez do `Dockerfile` de dev.
- Sem volumes de código (imagem imutável, sem hot reload).
- `${VAR:-default}` para valores opcionais com fallback (ex. `JWT_EXPIRES_IN:-7d`).

```yaml
services:
  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: ${POSTGRES_USER}
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
      POSTGRES_DB: ${POSTGRES_DB}
    volumes:
      - postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U $$POSTGRES_USER -d $$POSTGRES_DB"]
      interval: 5s
      timeout: 5s
      retries: 10
    networks: [hourfy-net]

  backend:
    build: { context: ./backend, dockerfile: Dockerfile.prod }
    environment:
      DATABASE_URL: postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@db:5432/${POSTGRES_DB}
      JWT_SECRET: ${JWT_SECRET}
      JWT_EXPIRES_IN: ${JWT_EXPIRES_IN:-7d}
      NODE_ENV: production
      CORS_ORIGIN: ${CORS_ORIGIN}
      APP_URL: ${APP_URL}
      SMTP_HOST: ${SMTP_HOST}
      SMTP_PORT: ${SMTP_PORT:-587}
      SMTP_USER: ${SMTP_USER}
      SMTP_PASS: ${SMTP_PASS}
      SMTP_FROM: ${SMTP_FROM}
      # ... demais integrações (Asaas, LevelAdmin, Telegram) também via ${VAR}
    depends_on:
      db: { condition: service_healthy }
    networks: [hourfy-net]

volumes:
  postgres_data:

networks:
  hourfy-net: { driver: bridge }
```

## 4. Plataforma de deploy

Este projeto é deployado via **Dokploy** (PaaS self-hosted baseado em Docker, similar a Coolify/Railway):

- Cada serviço (`backend`, `frontend`, `landing`) é uma aplicação Dokploy separada, apontando para a mesma origem Git, cada uma com seu próprio `Dockerfile.prod`/`Dockerfile` e diretório de build (`./backend`, `./frontend`, `./landing`).
- Variáveis de ambiente/segredos são cadastradas na UI do Dokploy (não versionadas no repo).
- `VITE_API_URL` (e demais `VITE_*`) precisam ser configuradas como **build args** no Dokploy, pois são embutidas em build time no bundle estático.
- Dokploy cuida do proxy reverso/HTTPS (Traefik por baixo) — por isso o `docker-compose.prod.yml` não define labels de proxy nem portas públicas: a plataforma expõe os serviços automaticamente.
- Roteamento de domínio, certificado SSL e restart policy ficam a cargo da plataforma, fora do compose.

Se replicar em outra plataforma (Coolify, Railway, ECS, VPS puro com Traefik/Nginx manual), o que muda é só essa camada de orquestração — os Dockerfiles e o `docker-compose.prod.yml` continuam válidos como referência de build e variáveis necessárias.

## 5. Passo a passo para replicar em um novo projeto

1. **Estrutura de pastas:** um diretório por serviço (`backend/`, `frontend/`, `landing/` se houver), cada um com seu próprio `Dockerfile` (dev) e `Dockerfile.prod` (produção).
2. **Backend:**
   - `Dockerfile` simples (uma stage) rodando em modo watch, com `entrypoint.sh` que aguarda o banco e usa `prisma db push` para sincronizar schema rapidamente em dev.
   - `Dockerfile.prod` multi-stage (`builder` + `runner`), com `entrypoint.prod.sh` rodando `prisma migrate deploy` antes do `node dist/server.js`.
   - Sempre `apk add openssl` nas imagens Alpine que usam Prisma.
3. **Frontend:**
   - `Dockerfile` de dev só roda `vite --host 0.0.0.0`.
   - `Dockerfile.prod` multi-stage: build com Vite (variáveis `VITE_*` via `ARG`/`ENV`) + Nginx servindo o `dist` com fallback de SPA (`try_files ... /index.html`).
4. **`docker-compose.yml` (dev):**
   - Banco com `healthcheck` (`pg_isready`) e `depends_on.condition: service_healthy` no backend.
   - Bind mount do código-fonte + volume nomeado separado para `node_modules`.
   - `CHOKIDAR_USEPOLLING`/`CHOKIDAR_INTERVAL` se for rodar em Windows/WSL2/Mac.
   - Rede externa compartilhada (`external: true`) só se precisar falar com outros projetos/serviços já rodando no mesmo host Docker.
5. **`docker-compose.prod.yml`:**
   - Só os serviços com estado/servidor (banco + backend); estáticos (frontend/landing) vão direto pra plataforma de deploy como apps próprias.
   - 100% das credenciais via `${VAR}` — nunca hardcoded.
   - Usa os `Dockerfile.prod` de cada serviço.
6. **`.env.example`** em cada serviço (`backend/.env.example`, `frontend/.env.example`) documentando todas as variáveis, com valores de exemplo/sandbox — nunca committar o `.env` real (`.gitignore`).
7. **Plataforma de deploy:** cadastrar um app por serviço, configurar variáveis/segredos na UI da plataforma, e — para o frontend — configurar as `VITE_*` como build args.
8. **Migrations:** garantir que toda alteração de schema do banco vire uma migration Prisma (`npx prisma migrate dev` em dev) e que o entrypoint de produção rode sempre `prisma migrate deploy` (nunca `db push` em produção).
