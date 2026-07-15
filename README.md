# SASTUR — Site institucional

Site de marketing/geração de leads da **SASTUR**, o CRM feito exclusivamente
para agências de viagens e agentes independentes.

Construído para converter (teste grátis, demonstração, contato) e para
conquistar tráfego orgânico no Google.

## Stack

- **Next.js 16** (App Router, SSR/SSG) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (design tokens em `src/app/globals.css`)
- **Motion** (Framer Motion) para animações e scroll reveal
- Componentes no padrão **shadcn/ui** (CVA + `cn`)
- **lucide-react** para ícones

## Scripts

```bash
npm run dev      # desenvolvimento (http://localhost:3000)
npm run build    # build de produção
npm run start    # servir o build
npm run lint     # eslint
```

## Estrutura

```
src/
  app/                  # rotas (App Router)
    page.tsx            # Home
    funcionalidades/    # Funcionalidades
    solucoes/           # Soluções + landings de SEO
      agencias-pequenas/
      agentes-independentes/
    precos/ blog/ contato/ privacidade/ termos/
    opengraph-image.tsx # imagem OG gerada dinamicamente
    icon.svg            # favicon (marca SASTUR)
    sitemap.ts robots.ts
  components/
    brand/              # logo (SVG)
    layout/             # header, footer
    sections/           # blocos de página (hero, features, etc.)
    seo/                # <JsonLd>
    ui/                 # primitivos (button, badge, section, reveal...)
  lib/                  # site config, seo helpers, faq, blog
public/
  logo/ screenshots/ testimonials/
```

## SEO implementado

- Metadata dinâmica por página (`buildMetadata`) + template de título
- Canonical, Open Graph, Twitter Cards
- JSON-LD: Organization, WebSite, SoftwareApplication, FAQPage, BreadcrumbList, BlogPosting
- `sitemap.xml` e `robots.txt`
- HTML semântico (um `<h1>` por página), `lang="pt-BR"`
- Imagens otimizadas (next/image, AVIF/WebP, lazy loading)

## Pontos a finalizar (TODO)

Procure por `TODO` no código. Os principais:

- **CTAs / URLs**: `src/lib/site.ts` (`cta`, `contact`, `social`) — trocar placeholders.
- **Preços**: `src/components/sections/pricing.tsx` — valores ilustrativos.
- **Depoimentos**: `src/components/sections/testimonials.tsx` — clientes reais.
- **Screenshots**: `public/screenshots/README.md` — adicionar prints reais.
- **Formulário de contato**: `src/components/sections/contact-form.tsx` — ligar a um endpoint/CRM.
- **Logo oficial**: a marca está recriada em SVG (`src/components/brand/logo.tsx`,
  `public/logo/`). Substitua pelos arquivos oficiais se preferir.
