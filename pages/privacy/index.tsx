import type { FC } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Link from "next/link";

import { fadeIn } from "@/variants";

const Privacy: FC = () => {
  return (
    <div className="h-full bg-primary/30 pt-32 pb-20">
      <Head>
        <title>Política de Privacidade | TechLog Sistemas</title>
        <meta
          name="description"
          content="Política de Privacidade da TechLog Sistemas, com informações sobre o tratamento de dados pessoais conforme a LGPD."
        />
      </Head>
      <div className="container mx-auto h-full flex items-start justify-center">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full max-w-[800px] text-sm xl:text-base space-y-6 glass-card shadow-premium p-6 md:p-10 rounded-2xl overflow-y-auto max-h-[70vh]"
        >
          <h1 className="text-2xl xl:text-3xl font-semibold mb-2 text-center xl:text-left">
            Política de Privacidade
          </h1>
          <p className="text-white/70">
            Esta Política de Privacidade explica como a{" "}
            <strong>TechLog Sistemas</strong> ("nós") coleta, utiliza e protege
            os dados pessoais dos usuários que entram em contato por meio deste
            site, em conformidade com a Lei Geral de Proteção de Dados Pessoais
            (Lei nº 13.709/2018 - LGPD).
          </p>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">
              1. Dados pessoais coletados
            </h2>
            <p className="text-white/70">
              Ao utilizar o formulário de contato, podemos coletar os seguintes
              dados pessoais fornecidos por você:
            </p>
            <ul className="list-disc list-inside text-white/70 space-y-1">
              <li>Nome;</li>
              <li>E-mail;</li>
              <li>Assunto;</li>
              <li>Conteúdo da mensagem;</li>
              <li>
                Opcionalmente, telefone ou outros dados que você inserir no
                campo de mensagem.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">
              2. Finalidade do uso dos dados
            </h2>
            <p className="text-white/70">
              Os dados pessoais informados são utilizados exclusivamente para:
            </p>
            <ul className="list-disc list-inside text-white/70 space-y-1">
              <li>Responder à sua solicitação de contato;</li>
              <li>
                Enviar propostas comerciais relacionadas aos serviços da TechLog
                Sistemas;
              </li>
              <li>
                Manter histórico de atendimentos e comunicações, quando
                necessário.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">
              3. Base legal para o tratamento
            </h2>
            <p className="text-white/70">
              O tratamento dos seus dados pessoais é realizado com base em:
            </p>
            <ul className="list-disc list-inside text-white/70 space-y-1">
              <li>
                <strong>Consentimento</strong>: quando você voluntariamente
                envia seus dados pelo formulário de contato;
              </li>
              <li>
                <strong>Legítimo interesse</strong>: para permitir a comunicação
                entre você e a TechLog Sistemas na análise de propostas e
                oportunidades de negócio.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">
              4. Compartilhamento de dados
            </h2>
            <p className="text-white/70">
              Não compartilhamos seus dados pessoais com terceiros, exceto:
            </p>
            <ul className="list-disc list-inside text-white/70 space-y-1">
              <li>
                Quando necessário para cumprimento de obrigação legal ou
                regulatória;
              </li>
              <li>
                Quando houver necessidade de uso de ferramentas de e-mail ou
                hospedagem, que atuam como operadores de dados;
              </li>
              <li>Mediante sua autorização expressa, quando aplicável.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">
              5. Tempo de armazenamento
            </h2>
            <p className="text-white/70">
              Os dados pessoais enviados pelo formulário poderão ser mantidos
              pelo tempo necessário para:
            </p>
            <ul className="list-disc list-inside text-white/70 space-y-1">
              <li>Responder ao seu contato;</li>
              <li>Elaboração de propostas comerciais;</li>
              <li>Cumprimento de eventuais obrigações legais.</li>
            </ul>
            <p className="text-white/70">
              Após esse período, os dados poderão ser anonimizados ou excluídos
              de forma segura.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">
              6. Direitos do titular de dados
            </h2>
            <p className="text-white/70">
              De acordo com a LGPD, você, na qualidade de titular de dados
              pessoais, possui os seguintes direitos, dentre outros:
            </p>
            <ul className="list-disc list-inside text-white/70 space-y-1">
              <li>Confirmação da existência de tratamento de dados;</li>
              <li>Acesso aos dados pessoais tratados;</li>
              <li>
                Correção de dados incompletos, inexatos ou desatualizados;
              </li>
              <li>
                Anonimização, bloqueio ou eliminação de dados desnecessários ou
                excessivos;
              </li>
              <li>Portabilidade dos dados, nos termos da regulamentação;</li>
              <li>
                Revogação do consentimento, quando esta for a base legal
                utilizada.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">
              7. Segurança das informações
            </h2>
            <p className="text-white/70">
              Adotamos medidas técnicas e organizacionais razoáveis para
              proteger seus dados pessoais contra acessos não autorizados,
              perda, uso indevido ou divulgação indevida. No entanto, nenhum
              sistema é totalmente isento de riscos, e não podemos garantir
              segurança absoluta das informações transmitidas pela internet.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">
              8. Contato para assuntos de privacidade
            </h2>
            <p className="text-white/70">
              Em caso de dúvidas sobre esta Política de Privacidade ou para
              exercer seus direitos como titular de dados, você pode entrar em
              contato pelos seguintes canais:
            </p>
            <ul className="list-disc list-inside text-white/70 space-y-1">
              <li>
                E-mail:{" "}
                <a
                  href="mailto:contato@techlogsistemas.cloud"
                  className="text-accent underline"
                >
                  contato@techlogsistemas.cloud
                </a>
              </li>
              <li>Telefone: (63) 99973-4569</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-semibold text-white">
              9. Atualizações desta política
            </h2>
            <p className="text-white/70">
              Esta Política de Privacidade poderá ser atualizada periodicamente
              para refletir mudanças na legislação ou em nossos processos
              internos. A data da última atualização estará sempre indicada
              abaixo.
            </p>
            <p className="text-white/60 text-xs mt-2">
              Última atualização: {new Date().toLocaleDateString("pt-BR")}
            </p>
          </section>

          <p className="text-xs text-white/40 mt-4 text-center">
            Esta página tem caráter informativo e não substitui orientação
            jurídica profissional específica para o seu negócio.
          </p>

          <div className="mt-6 text-center">
            <Link
              href="/contact"
              className="text-accent underline hover:text-accent/80 text-sm"
            >
              Voltar para o formulário de contato
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
