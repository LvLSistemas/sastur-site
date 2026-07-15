import type { LucideIcon } from "lucide-react";
import {
  Users,
  Target,
  FileText,
  Ticket,
  BellRing,
  BarChart3,
  Globe,
  Palette,
  MessageCircle,
  BookOpen,
} from "lucide-react";

/**
 * Funcionalidades REAIS da plataforma SASTUR (fonte única de verdade).
 * Não adicionar recursos que não existam. Copy sempre no benefício e na
 * situação real vivida por pequenas agências.
 */
export type PlatformFeature = {
  id: string;
  icon: LucideIcon;
  /** Nome do módulo (evitar jargão técnico, ex.: "Kanban"). */
  name: string;
  /** Mensagem principal — o benefício em uma frase. */
  benefit: string;
  /** Situação real do dia a dia que o recurso resolve. */
  situation: string;
  /** Itens de destaque (o que o módulo oferece). */
  highlights: string[];
};

export const platformFeatures: PlatformFeature[] = [
  {
    id: "contatos",
    icon: Users,
    name: "Gestão de contatos",
    benefit:
      "Conheça toda a jornada do cliente antes mesmo de iniciar um novo atendimento.",
    situation:
      "Chega de procurar em três lugares diferentes o que já foi conversado com o cliente.",
    highlights: [
      "Cadastro de clientes e leads",
      "Status do relacionamento: Lead, Cliente, Fidelizado ou VIP",
      "Histórico de cotações e de compras",
      "Histórico de interações",
      "Lembretes automáticos de aniversário",
    ],
  },
  {
    id: "oportunidades",
    icon: Target,
    name: "Painel de oportunidades",
    benefit: "Saiba exatamente quais clientes precisam de atenção hoje.",
    situation:
      "Você vê, em uma tela, em que etapa está cada venda — e nunca mais perde um negócio por falta de retorno.",
    highlights: [
      "Visualização por etapas da venda",
      "Filtros rápidos e agente responsável",
      "Termômetro da oportunidade",
      "Última atualização e último contato realizado",
      "Atalho para conversar pelo WhatsApp",
    ],
  },
  {
    id: "cotacoes",
    icon: FileText,
    name: "Cotações inteligentes",
    benefit:
      "Envie cotações profissionais sem precisar montar documentos manualmente.",
    situation:
      "Monte uma proposta bonita em minutos e compartilhe por um link — em vez de perder horas no editor de texto.",
    highlights: [
      "Inclusão de produtos com soma automática",
      "Compartilhamento por link e geração em PDF",
      "Com a identidade visual da sua agência",
      "Opções para o cliente comparar propostas",
      "Aceite da proposta e observações internas",
      "Histórico completo da negociação",
    ],
  },
  {
    id: "vouchers",
    icon: Ticket,
    name: "Vouchers com inteligência artificial",
    benefit: "Transforme vendas em vouchers profissionais em poucos minutos.",
    situation:
      "Fechou a venda? A inteligência artificial gera os vouchers da viagem com a identidade da sua marca — menos digitação e mais padrão.",
    highlights: [
      "Geração com inteligência artificial",
      "Com a identidade visual da agência",
      "Processo mais rápido e menos digitação",
      "Documentos padronizados",
    ],
  },
  {
    id: "tarefas",
    icon: BellRing,
    name: "Tarefas e follow-up",
    benefit: "Nunca mais deixe um cliente sem retorno.",
    situation:
      "A plataforma lembra você de cada follow-up no momento certo — inclusive dos aniversários dos clientes.",
    highlights: [
      "Tarefas automáticas e manuais",
      "Follow-up e lembretes",
      "Aniversários de clientes",
      "Rotina organizada",
    ],
  },
  {
    id: "relatorios",
    icon: BarChart3,
    name: "Relatórios",
    benefit: "Descubra exatamente de onde vêm as suas vendas.",
    situation:
      "Descubra o que está funcionando e onde a agência pode melhorar, sem depender de planilhas.",
    highlights: [
      "Indicadores de CRM",
      "Conversão de vendas",
      "Produtividade da equipe",
      "Financeiro",
    ],
  },
  {
    id: "minisite",
    icon: Globe,
    name: "Mini site da agência",
    benefit:
      "Compartilhe um único link e receba novos clientes diretamente no sistema.",
    situation:
      "Todo formulário enviado no seu mini site vira, automaticamente, um novo contato dentro da plataforma.",
    highlights: [
      "Página personalizada da agência",
      "Informações e links importantes",
      "Formulário de contato",
      "Novos leads caem direto no seu sistema",
    ],
  },
  {
    id: "marca",
    icon: Palette,
    name: "Personalização da marca",
    benefit: "Fortaleça sua marca em cada atendimento.",
    situation:
      "Suas cotações, vouchers e materiais saem com a cara da sua agência — não com a cara de um sistema genérico.",
    highlights: [
      "Sua logo e suas cores",
      "Aparência personalizada",
      "Presente em cotações, vouchers e materiais enviados",
    ],
  },
  {
    id: "whatsapp",
    icon: MessageCircle,
    name: "Integração com WhatsApp",
    benefit: "Converse com seus clientes sem perder o contexto da negociação.",
    situation:
      "Abra a conversa certa direto da oportunidade e atenda com muito mais agilidade.",
    highlights: [
      "Acesso rápido às conversas",
      "Contato direto com clientes",
      "Mais agilidade no atendimento",
    ],
  },
  {
    id: "conhecimento",
    icon: BookOpen,
    name: "Base de conhecimento",
    benefit:
      "Mantenha processos e informações sempre acessíveis para toda a equipe.",
    situation:
      "Centralize os procedimentos da agência para que ninguém precise reaprender tudo a cada dúvida.",
    highlights: [
      "Base geral da plataforma",
      "Base personalizada da agência",
      "Informações sempre organizadas",
    ],
  },
];
