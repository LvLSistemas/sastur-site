/**
 * Central site configuration. Single source of truth for URLs, nav,
 * contact, and CTA destinations. Edit CTA hrefs here when the real
 * app / login URLs are ready (currently placeholders).
 */

export const siteConfig = {
  name: "sastur",
  legalName: "sastur",
  // Used to build absolute URLs for metadata, sitemap and JSON-LD.
  url: "https://sastur.com.br",
  tagline: "A plataforma de gestão para agências de viagens",
  description:
    "sastur é a plataforma de gestão feita para agências de viagens e agentes independentes. Centralize a operação — contatos, oportunidades, cotações, vouchers, tarefas e relatórios — em um só lugar, do primeiro contato ao pós-venda.",
  locale: "pt-BR",

  // CTA destinations — placeholders, edit when the real URLs exist.
  cta: {
    trial: "https://app.sastur.com.br/cadastro", // Teste gratuito
    login: "https://app.sastur.com.br/login",
    demo: "/contato?assunto=demonstracao", // internal lead form
    whatsapp: "https://wa.me/5521996399932", // TODO: número real
  },

  contact: {
    email: "contato@sastur.com.br", // TODO: confirmar
    phone: "+55 21 996399932", // TODO: confirmar
    whatsappLabel: "21996399932",
    city: "Brasil",
  },

  social: {
    instagram: "https://instagram.com/sastur.com.br",
    linkedin: "https://linkedin.com/company/sastur",
    youtube: "https://youtube.com/@sastur",
    facebook: "https://facebook.com/sastur",
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
  description?: string;
};

export const mainNav: NavItem[] = [
  { label: "Funcionalidades", href: "/funcionalidades" },
  { label: "Preços", href: "/precos" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
];

export const solutionsNav: NavItem[] = [
  {
    label: "Para agências pequenas",
    href: "/solucoes/agencias-pequenas",
    description: "Profissionalize a operação sem complicar o dia a dia.",
  },
  {
    label: "Para agentes independentes",
    href: "/solucoes/agentes-independentes",
    description: "Organize clientes e venda mais, mesmo trabalhando sozinho.",
  },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: "Produto",
    items: [
      { label: "Funcionalidades", href: "/funcionalidades" },
      { label: "Preços", href: "/precos" },
      { label: "Inteligência Artificial", href: "/funcionalidades#ia" },
      { label: "Teste gratuito", href: siteConfig.cta.trial },
    ],
  },
  {
    title: "Para quem",
    items: [
      { label: "Agências pequenas", href: "/solucoes/agencias-pequenas" },
      { label: "Agentes independentes", href: "/solucoes/agentes-independentes" },
    ],
  },
  {
    title: "Recursos",
    items: [
      { label: "Blog", href: "/blog" },
      { label: "Contato", href: "/contato" },
      { label: "Suporte", href: "/contato" },
    ],
  },
  {
    title: "Empresa",
    items: [
      { label: "Sobre a SASTUR", href: "/contato" },
      { label: "Login", href: siteConfig.cta.login },
    ],
  },
];
