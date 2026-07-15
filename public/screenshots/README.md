# Screenshots do sistema SASTUR

**Estratégia:** vender a plataforma sem expor toda a interface. Use apenas
**3 ou 4 prints reais**, posicionados com cuidado. As demais funcionalidades
são representadas por ilustrações, diagramas, mockups parciais e cards — não
por capturas de tela.

## Os (poucos) prints reais

| Arquivo             | Onde aparece                        | Enquadramento          |
| ------------------- | ----------------------------------- | ---------------------- |
| `dashboard.png`     | Hero                                | Mockup de navegador    |
| `oportunidades.png` | Spotlight "Painel de oportunidades" | Mockup de navegador    |
| `cotacao-pdf.png`   | Spotlight "Cotações inteligentes"   | Moldura de documento   |
| `mini-site.png`     | Spotlight "Mini site da agência"    | Mockup de celular      |

> Vouchers, contatos, tarefas, relatórios, WhatsApp e base de conhecimento são
> apresentados por **ilustrações e cards** — não precisam de print.

## Como ativar cada print

1. Salve a imagem em `public/screenshots/` (ex.: `oportunidades.png`).
2. Informe o `src`:
   - Hero → `src/components/sections/hero.tsx` → `<AppWindow src="/screenshots/dashboard.png" ... />`
   - Spotlights → `src/components/sections/product-showcase.tsx` → descomente o `src` de cada item.

## Antes de subir qualquer print (importante)

- **Esconda dados sensíveis** de clientes (nomes, telefones, e-mails, valores).
- **Oculte informações estratégicas** (nada que facilite copiar o produto).
- Prefira **zoom em partes relevantes** da tela, não a interface inteira.
- Evite menus completos, configurações, listas extensas e fluxos internos.
- Use dados de demonstração coerentes e bonitos.

## Recomendações técnicas

- Navegador/dashboard: proporção ~16:9, largura mínima 1600px.
- Celular (mini site): proporção ~9:19, print da versão mobile.
- Cotação: pode ser um recorte do PDF exportado (retrato).
- PNG ou WebP — o Next.js otimiza (AVIF/WebP + lazy load) automaticamente.
