import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = buildMetadata({
  path: "/privacidade",
  title: "Política de Privacidade",
  description: "Política de Privacidade da sastur.",
  noindex: true,
});

export default function PrivacidadePage() {
  return (
    <Container className="max-w-3xl py-20">
      <h1 className="text-4xl font-semibold tracking-tight text-navy-900">
        Política de Privacidade
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
          prose-table:text-sm prose-th:text-navy-900
          prose-blockquote:border-l-brand-300 prose-blockquote:bg-brand-50/50 prose-blockquote:py-1 prose-blockquote:not-italic prose-blockquote:text-navy-900"
      >
        <p>
          Esta Política de Privacidade descreve como a <strong>sastur</strong>{" "}
          (&quot;nós&quot;, &quot;nosso&quot;) coleta, usa, armazena e protege os
          dados pessoais dos usuários do sistema SaaS sastur, em conformidade com
          a <strong>Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD)</strong>.
        </p>

        <h2>1. Controlador dos Dados</h2>
        <p>
          <strong>Razão Social:</strong> sastur
          <br />
          <strong>Encarregado de Proteção de Dados (DPO):</strong>{" "}
          privacidade@sastur.com.br
          <br />
          <strong>Canal para exercício de direitos:</strong>{" "}
          privacidade@sastur.com.br
        </p>

        <h2>2. Dados que Coletamos</h2>

        <h3>2.1 Dados de Conta</h3>
        <ul>
          <li>Nome completo</li>
          <li>Endereço de e-mail</li>
          <li>Senha (armazenada com hash bcrypt — jamais em texto puro)</li>
          <li>Foto de perfil (opcional)</li>
        </ul>
        <p>
          <strong>Base legal:</strong> Execução de contrato (Art. 7º, V, LGPD)
        </p>

        <h3>2.2 Dados de Navegação e Segurança</h3>
        <ul>
          <li>Endereço IP (armazenado nas sessões para controle de segurança)</li>
          <li>User agent do navegador</li>
          <li>Data e hora de acesso</li>
        </ul>
        <p>
          <strong>Base legal:</strong> Legítimo interesse para segurança (Art.
          7º, IX, LGPD)
        </p>

        <h3>2.3 Dados de Contatos Cadastrados pela Sua Empresa</h3>
        <p>
          Ao usar o módulo CRM da sastur, você pode cadastrar dados de seus
          próprios clientes, incluindo:
        </p>
        <ul>
          <li>Nome, e-mail, telefone</li>
          <li>CPF, RG, passaporte (armazenados com criptografia)</li>
          <li>Endereço completo</li>
          <li>Data de nascimento</li>
        </ul>
        <p>
          <strong>Importante:</strong> Para esses dados, <strong>você é o
          Controlador</strong> e a sastur é o <strong>Operador</strong>. Você é
          responsável por garantir a base legal para o tratamento desses dados
          perante seus próprios clientes.
        </p>

        <h3>2.4 Dados de Pagamento</h3>
        <p>
          Processados pelo gateway <strong>ASAAS</strong> (CNPJ
          21.754.196/0001-33), empresa brasileira certificada. Não armazenamos
          dados de cartão de crédito em nossos servidores.
        </p>
        <p>
          <strong>Base legal:</strong> Execução de contrato (Art. 7º, V, LGPD)
        </p>

        <h2>3. Como Usamos seus Dados</h2>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Dado</th>
                <th>Finalidade</th>
                <th>Base Legal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>E-mail, nome</td>
                <td>Acesso à plataforma, comunicações transacionais</td>
                <td>Contrato</td>
              </tr>
              <tr>
                <td>Senha (hash)</td>
                <td>Autenticação segura</td>
                <td>Contrato</td>
              </tr>
              <tr>
                <td>IP, user agent</td>
                <td>Segurança, prevenção de fraudes, rate limiting</td>
                <td>Legítimo interesse</td>
              </tr>
              <tr>
                <td>Dados de pagamento</td>
                <td>Cobrança de assinatura</td>
                <td>Contrato</td>
              </tr>
              <tr>
                <td>E-mail (marketing)</td>
                <td>
                  Novidades e atualizações do produto — somente com seu
                  consentimento
                </td>
                <td>Consentimento</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>4. Compartilhamento de Dados</h2>
        <p>
          Compartilhamos dados com os seguintes <strong>subprocessadores</strong>:
        </p>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Empresa</th>
                <th>Serviço</th>
                <th>Dados Compartilhados</th>
                <th>País</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ASAAS</td>
                <td>Gateway de pagamento</td>
                <td>Nome, e-mail, CPF (para emissão de boleto/nota)</td>
                <td>Brasil</td>
              </tr>
              <tr>
                <td>LevelAdmin (auto-hospedado)</td>
                <td>Sistema interno de suporte</td>
                <td>Dados dos tickets de suporte</td>
                <td>Brasil (servidor próprio)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Não vendemos, alugamos ou compartilhamos seus dados pessoais com
          terceiros para fins de marketing sem seu consentimento explícito.
        </p>

        <h2>5. Transferência Internacional de Dados</h2>
        <p>
          Os dados são processados prioritariamente em servidores localizados
          no Brasil. Caso haja transferência internacional, garantimos
          proteção equivalente à exigida pela LGPD mediante cláusulas
          contratuais padrão.
        </p>

        <h2>6. Retenção de Dados</h2>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>Categoria</th>
                <th>Prazo de Retenção</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dados de conta ativa</td>
                <td>Enquanto a conta estiver ativa</td>
              </tr>
              <tr>
                <td>Dados após cancelamento da conta</td>
                <td>
                  30 dias (soft delete), excluídos permanentemente após esse
                  prazo
                </td>
              </tr>
              <tr>
                <td>Sessões de navegação</td>
                <td>120 minutos de inatividade</td>
              </tr>
              <tr>
                <td>Logs do sistema</td>
                <td>30 dias</td>
              </tr>
              <tr>
                <td>Dados financeiros</td>
                <td>5 anos (obrigação legal — legislação fiscal)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>7. Segurança dos Dados</h2>
        <p>Adotamos as seguintes medidas técnicas e organizacionais:</p>
        <ul>
          <li>Senhas armazenadas com bcrypt (12 rounds)</li>
          <li>Comunicações via HTTPS/TLS em produção</li>
          <li>Autenticação de dois fatores (2FA) disponível</li>
          <li>
            Dados sensíveis (CPF, RG, passaporte) armazenados com
            criptografia AES-256
          </li>
          <li>Controle de acesso baseado em funções (roles)</li>
          <li>Cookies com HttpOnly e SameSite</li>
        </ul>

        <h2>8. Seus Direitos como Titular (Art. 18, LGPD)</h2>
        <p>Você tem direito a:</p>
        <ul>
          <li>
            <strong>Acesso:</strong> saber quais dados temos sobre você
          </li>
          <li>
            <strong>Correção:</strong> corrigir dados incompletos ou
            incorretos
          </li>
          <li>
            <strong>Anonimização/Bloqueio:</strong> quando o tratamento for
            desnecessário
          </li>
          <li>
            <strong>Exclusão:</strong> solicitar a exclusão dos seus dados
          </li>
          <li>
            <strong>Portabilidade:</strong> receber seus dados em formato
            estruturado
          </li>
          <li>
            <strong>Informação:</strong> saber com quem compartilhamos seus
            dados
          </li>
          <li>
            <strong>Revogação do consentimento:</strong> a qualquer momento,
            sem prejuízo
          </li>
        </ul>
        <p>
          Para exercer qualquer direito, entre em contato pelo e-mail{" "}
          <strong>privacidade@sastur.com.br</strong>. Responderemos em até{" "}
          <strong>15 dias corridos</strong>.
        </p>
        <p>
          Você também pode excluir sua conta diretamente nas configurações do
          perfil.
        </p>

        <h2>9. Cookies</h2>
        <p>
          Utilizamos apenas cookies estritamente necessários para o
          funcionamento do sistema (sessão de autenticação). Não utilizamos
          cookies de rastreamento ou analytics de terceiros sem seu
          consentimento.
        </p>

        <h2>10. Menores de Idade</h2>
        <p>
          A sastur é um sistema voltado exclusivamente para uso profissional
          e empresarial. Não é permitido o cadastro de menores de 18 anos. Ao
          criar uma conta, você declara ter 18 anos ou mais.
        </p>

        <h2>11. Contato e DPO</h2>
        <p>Para dúvidas, solicitações ou exercício de direitos:</p>
        <p>
          <strong>E-mail:</strong> privacidade@sastur.com.br
          <br />
          <strong>Responsável:</strong> Encarregado de Proteção de Dados
          (DPO) — sastur
        </p>

        <h2>12. Alterações nesta Política</h2>
        <p>
          Notificaremos sobre alterações relevantes nesta política por
          e-mail ou aviso no sistema com pelo menos 15 dias de antecedência.
          O uso continuado do serviço após a nova vigência implica aceite.
        </p>

        <p className="mt-8 text-sm text-muted-foreground">
          <em>Última atualização: 20 de maio de 2026</em>
        </p>
      </div>
    </Container>
  );
}
