import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = buildMetadata({
  path: "/termos",
  title: "Termos de Uso",
  description: "Termos de Uso da sastur.",
});

export default function TermosPage() {
  return (
    <Container className="max-w-3xl py-20">
      <h1 className="text-4xl font-semibold tracking-tight text-navy-900">
        Termos de Uso
      </h1>
      <p className="mt-4 text-muted-foreground">
        Versão 1.0 — Vigência: 20 de maio de 2026
      </p>

      <div
        className="prose prose-slate mt-10 max-w-none
          prose-headings:scroll-mt-24 prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-navy-900
          prose-h2:mt-12 prose-h2:text-2xl sm:prose-h2:text-3xl
          prose-h3:mt-8 prose-h3:text-xl
          prose-p:leading-relaxed prose-p:text-foreground/80
          prose-li:text-foreground/80 prose-strong:text-navy-900
          prose-a:font-medium prose-a:text-brand-700 prose-a:no-underline hover:prose-a:underline
          prose-blockquote:border-l-brand-300 prose-blockquote:bg-brand-50/50 prose-blockquote:py-1 prose-blockquote:not-italic prose-blockquote:text-navy-900"
      >
        <p>
          Ao criar uma conta ou usar o sistema <strong>sastur</strong>, você
          concorda com estes Termos de Uso. Leia com atenção.
        </p>

        <h2>1. O Serviço</h2>
        <p>
          A sastur é um sistema SaaS (Software as a Service) de CRM e gestão
          voltado para agências de turismo. Oferecemos ferramentas para
          gerenciamento de contatos, oportunidades, assinaturas e comunicação
          interna.
        </p>
        <p>
          <strong>Fornecedor:</strong> sastur
          <br />
          <strong>Contato:</strong> privacidade@sastur.com.br
        </p>

        <h2>2. Elegibilidade</h2>
        <p>Para usar a sastur, você deve:</p>
        <ul>
          <li>
            Ter <strong>18 anos ou mais</strong> (o serviço é destinado
            exclusivamente a uso profissional)
          </li>
          <li>Ter capacidade legal para celebrar contratos</li>
          <li>Usar o serviço em conformidade com a legislação brasileira aplicável</li>
        </ul>

        <h2>3. Conta do Usuário</h2>
        <ul>
          <li>Você é responsável por manter sua senha confidencial</li>
          <li>Você é responsável por todas as atividades realizadas com sua conta</li>
          <li>
            Notifique-nos imediatamente em caso de uso não autorizado:
            privacidade@sastur.com.br
          </li>
          <li>
            Recomendamos fortemente o uso de autenticação de dois fatores
            (2FA)
          </li>
        </ul>

        <h2>4. Uso Aceitável</h2>
        <p>
          <strong>É permitido:</strong>
        </p>
        <ul>
          <li>Usar o sistema para fins comerciais legítimos de sua agência</li>
          <li>Convidar membros da equipe para sua organização</li>
          <li>Exportar seus próprios dados</li>
        </ul>
        <p>
          <strong>É proibido:</strong>
        </p>
        <ul>
          <li>Usar o sistema para fins ilegais ou fraudulentos</li>
          <li>Tentar acessar dados de outras organizações</li>
          <li>Realizar engenharia reversa do software</li>
          <li>Usar o serviço para processar dados sem base legal adequada</li>
          <li>Compartilhar credenciais de acesso com terceiros não autorizados</li>
          <li>Realizar ataques de força bruta ou tentativas de invasão</li>
        </ul>

        <h2>5. Dados e Privacidade</h2>
        <p>
          O tratamento de dados pessoais é regido pela nossa{" "}
          <Link href="/privacidade">Política de Privacidade</Link>, que é
          parte integrante destes Termos.
        </p>
        <p>
          <strong>
            Importante — você é o Controlador dos dados de seus clientes:
          </strong>{" "}
          Ao cadastrar dados de contatos (nome, CPF, e-mail, etc.) na sastur,
          você assume a responsabilidade como Controlador perante a LGPD. A
          sastur atua como Operador. Você declara ter base legal adequada
          para o tratamento desses dados.
        </p>

        <h2>6. Assinaturas e Pagamentos</h2>
        <ul>
          <li>Assinaturas são cobradas conforme o plano escolhido</li>
          <li>Pagamentos processados pelo gateway ASAAS</li>
          <li>
            Em caso de inadimplência, o acesso pode ser suspenso após
            notificação
          </li>
          <li>Cancelamentos entram em vigor no fim do período já pago</li>
          <li>
            Não há reembolso de períodos parciais, salvo disposição legal em
            contrário
          </li>
        </ul>

        <h2>7. Disponibilidade do Serviço</h2>
        <p>
          Buscamos disponibilidade contínua, mas não garantimos 100% de
          uptime. Realizamos manutenções programadas com aviso prévio quando
          possível. Não somos responsáveis por indisponibilidades causadas
          por fatores externos (infraestrutura de terceiros, casos fortuitos,
          força maior).
        </p>

        <h2>8. Propriedade Intelectual</h2>
        <p>
          O software, design, marcas e todo o conteúdo da sastur são de
          nossa propriedade exclusiva. A assinatura concede uma licença de
          uso não exclusiva, intransferível e limitada ao período pago.
        </p>
        <p>
          <strong>Seus dados são seus:</strong> Você mantém todos os direitos
          sobre os dados inseridos no sistema e pode exportá-los ou
          solicitar sua exclusão a qualquer momento.
        </p>

        <h2>9. Limitação de Responsabilidade</h2>
        <p>A sastur não se responsabiliza por:</p>
        <ul>
          <li>
            Danos indiretos, lucros cessantes ou perda de dados causados por
            uso inadequado
          </li>
          <li>
            Ações ou omissões de terceiros (gateways de pagamento,
            provedores de infraestrutura)
          </li>
          <li>
            Perda de dados decorrente de força maior ou eventos fora do
            nosso controle
          </li>
        </ul>
        <p>
          Nossa responsabilidade total está limitada ao valor pago pelo
          serviço nos últimos 12 meses.
        </p>

        <h2>10. Rescisão</h2>
        <ul>
          <li>
            Você pode cancelar sua conta a qualquer momento nas
            configurações do perfil
          </li>
          <li>
            Podemos suspender ou encerrar contas que violem estes Termos,
            com aviso prévio quando possível
          </li>
          <li>
            Casos graves de violação (atividade fraudulenta, tentativas de
            invasão) podem resultar em encerramento imediato
          </li>
          <li>
            Após o encerramento, seus dados são mantidos por 30 dias e então
            excluídos permanentemente
          </li>
        </ul>

        <h2>11. Alterações nos Termos</h2>
        <p>
          Notificaremos sobre alterações relevantes com pelo menos{" "}
          <strong>15 dias de antecedência</strong> por e-mail ou aviso no
          sistema. O uso continuado implica aceite dos novos termos.
        </p>

        <h2>12. Lei Aplicável e Foro</h2>
        <p>
          Estes Termos são regidos pela <strong>legislação brasileira</strong>.
          Fica eleito o foro da <strong>Comarca de São Paulo/SP</strong> para
          dirimir eventuais conflitos, com renúncia a qualquer outro, por
          mais privilegiado que seja.
        </p>

        <h2>13. Contato</h2>
        <p>
          <strong>E-mail:</strong> privacidade@sastur.com.br
          <br />
          <strong>Responsável:</strong> Equipe sastur
        </p>

        <p className="mt-8 text-sm text-muted-foreground">
          <em>Última atualização: 20 de maio de 2026</em>
        </p>
      </div>
    </Container>
  );
}
