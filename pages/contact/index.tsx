import type { FC, FormEvent, ChangeEvent } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import Head from "next/head";

import { fadeIn } from "@/variants";
import type { ContactFormData } from "@/types/contact";

const Contact: FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [showCompanyDataMobile, setShowCompanyDataMobile] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    // Converter email para minúsculas
    const finalValue = name === "email" ? value.toLowerCase() : value;
    setFormData((prev) => ({ ...prev, [name]: finalValue }));
    // Limpar status ao digitar
    if (status.type) {
      setStatus({ type: null, message: "" });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ type: "success", message: data.message });
        // Limpar formulário
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus({ type: "error", message: data.message });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Erro ao enviar mensagem. Tente novamente.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full bg-primary/30">
      <Head>
        <title>Fale Conosco | TechLog Sistemas</title>
        <meta
          name="description"
          content="Tire suas ideias do papel. Entre em contato com a TechLog Sistemas e solicite um orçamento para seu site ou aplicativo."
        />
      </Head>
      <div className="container mx-auto pt-32 xl:pt-32 pb-20 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px]">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-2xl xl:h2 mb-6 text-center"
          >
            Vamos tirar seu projeto do
            <span className="text-accent"> papel.</span>
          </motion.h2>

          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex text-[11px] md:text-sm xl:text-base flex-col gap-4 md:gap-5 w-full mx-auto"
            onSubmit={handleSubmit}
          >
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                name="name"
                placeholder="Nome"
                className="input h-[38px] md:h-[46px]"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={loading}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input h-[38px] md:h-[46px] lowercase"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={loading}
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck="false"
                style={{ textTransform: "lowercase" }}
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Assunto"
              className="input h-[38px] md:h-[46px]"
              value={formData.subject}
              onChange={handleChange}
              required
              disabled={loading}
            />
            <textarea
              name="message"
              placeholder="Mensagem"
              className="textarea h-[100px] md:h-[150px]"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={loading}
            />

            {status.type && (
              <div
                className={`p-4 rounded-xl text-center glass-card ${
                  status.type === "success"
                    ? "border-green-500/50 shadow-[0_0_20px_rgba(34,197,94,0.2)]"
                    : "border-red-500/50 shadow-[0_0_20px_rgba(239,68,68,0.2)]"
                }`}
              >
                <p
                  className={
                    status.type === "success"
                      ? "text-green-300"
                      : "text-red-300"
                  }
                >
                  {status.message}
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn h-[40px] md:h-[46px] rounded-full border border-white/20 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group disabled:opacity-50 disabled:cursor-not-allowed glass-card hover:shadow-premium glow-on-hover relative"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                {loading ? "Enviando..." : "Enviar"}
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
            <p className="mt-3 text-[10px] xl:text-xs text-white/50 text-center xl:text-left">
              Ao enviar este formulário, você concorda com o uso dos seus dados
              pessoais para retorno do seu contato, conforme nossa{" "}
              <button
                type="button"
                onClick={() => setShowPrivacyModal(true)}
                className="underline text-accent hover:text-accent/80"
              >
                Política de Privacidade
              </button>
              .
            </p>
          </motion.form>
          <div className="mt-4 md:hidden text-[10px] text-white/50 text-center">
            <button
              type="button"
              onClick={() => setShowCompanyDataMobile(true)}
              className="px-4 py-2 rounded-full border border-white/20 glass-card text-[11px] hover:border-accent transition-all duration-300"
            >
              Ver dados da empresa
            </button>
          </div>
          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:block mt-8 text-[11px] xl:text-xs text-white/40 space-y-1 text-center xl:text-left"
          >
            <p className="font-semibold text-white/60 tracking-wide uppercase">
              Dados da empresa
            </p>
            <p>Razão social: TECHLOG TECNOLOGIA EM SISTEMAS LTDA</p>
            <p>Nome fantasia: TechLog Sistemas</p>
            <p>CNPJ: 15.526.540/0001-80</p>
            <p>Especialistas em Sistemas Web e Saúde</p>
            <p>E-mail de contato: contato@techlogsistemas.cloud</p>
            <p>Telefone: (63) 99973-4569</p>
          </motion.div>
        </div>
      </div>

      {showCompanyDataMobile && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4 md:hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="w-full max-w-xs glass-card rounded-3xl shadow-premium p-5 text-[11px] text-white/70 space-y-1 relative border border-white/15"
          >
            <button
              type="button"
              onClick={() => setShowCompanyDataMobile(false)}
              className="absolute top-2.5 right-3.5 w-6 h-6 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white text-xs transition-colors"
            >
              <span className="leading-none text-base">×</span>
            </button>
            <p className="font-semibold text-white tracking-wide uppercase text-center mb-2 text-[11px]">
              Dados da empresa
            </p>
            <p>Razão social: TECHLOG TECNOLOGIA EM SISTEMAS LTDA</p>
            <p>Nome fantasia: TechLog Sistemas</p>
            <p>CNPJ: 15.526.540/0001-80</p>
            <p>Especialistas em Sistemas Web e Saúde</p>
            <p>E-mail de contato: contato@techlogsistemas.cloud</p>
            <p>Telefone: (63) 99973-4569</p>
          </motion.div>
        </div>
      )}

      {showPrivacyModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="w-full max-w-md glass-card rounded-3xl shadow-premium p-6 text-[11px] md:text-xs text-white/70 space-y-4 relative border border-white/15 max-h-[80vh] overflow-y-auto"
          >
            <div className="sticky top-0 z-10 flex justify-end pb-2">
              <button
                type="button"
                onClick={() => setShowPrivacyModal(false)}
                className="mt-1 w-7 h-7 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white text-sm transition-colors"
              >
                <span className="leading-none text-base">×</span>
              </button>
            </div>
            <p className="font-semibold text-white tracking-wide uppercase text-center mb-1 text-[11px]">
              Política de Privacidade
            </p>
            <p>
              Esta Política de Privacidade explica como a{" "}
              <strong>TechLog Sistemas</strong> coleta, utiliza e protege os
              dados pessoais dos usuários que entram em contato por meio deste
              site, em conformidade com a Lei Geral de Proteção de Dados
              Pessoais (Lei nº 13.709/2018 - LGPD).
            </p>

            <div className="space-y-2">
              <p className="font-semibold text-white text-[11px]">
                1. Dados pessoais coletados
              </p>
              <p>
                Ao utilizar o formulário de contato, podemos coletar os
                seguintes dados pessoais fornecidos por você:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Nome;</li>
                <li>E-mail;</li>
                <li>Assunto;</li>
                <li>Conteúdo da mensagem;</li>
                <li>
                  Opcionalmente, telefone ou outros dados inseridos no campo de
                  mensagem.
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="font-semibold text-white text-[11px]">
                2. Finalidade do uso dos dados
              </p>
              <p>
                Os dados pessoais informados são utilizados exclusivamente para:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Responder à sua solicitação de contato;</li>
                <li>
                  Enviar propostas comerciais relacionadas aos serviços da
                  TechLog Sistemas;
                </li>
                <li>
                  Manter histórico de atendimentos e comunicações, quando
                  necessário.
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="font-semibold text-white text-[11px]">
                3. Base legal para o tratamento
              </p>
              <p>
                O tratamento dos seus dados pessoais é realizado com base em:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  <strong>Consentimento</strong>: quando você voluntariamente
                  envia seus dados pelo formulário de contato;
                </li>
                <li>
                  <strong>Legítimo interesse</strong>: para permitir a
                  comunicação entre você e a TechLog Sistemas na análise de
                  propostas e oportunidades de negócio.
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="font-semibold text-white text-[11px]">
                4. Compartilhamento de dados
              </p>
              <p>
                Não compartilhamos seus dados pessoais com terceiros, exceto:
              </p>
              <ul className="list-disc list-inside space-y-1">
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
            </div>

            <div className="space-y-2">
              <p className="font-semibold text-white text-[11px]">
                5. Tempo de armazenamento
              </p>
              <p>
                Os dados pessoais enviados pelo formulário poderão ser mantidos
                pelo tempo necessário para:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Responder ao seu contato;</li>
                <li>Elaboração de propostas comerciais;</li>
                <li>Cumprimento de eventuais obrigações legais.</li>
              </ul>
              <p>
                Após esse período, os dados poderão ser anonimizados ou
                excluídos de forma segura.
              </p>
            </div>

            <div className="space-y-2">
              <p className="font-semibold text-white text-[11px]">
                6. Direitos do titular de dados
              </p>
              <p>
                De acordo com a LGPD, você, na qualidade de titular de dados
                pessoais, possui, entre outros, os seguintes direitos:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Confirmação da existência de tratamento de dados;</li>
                <li>Acesso aos dados pessoais tratados;</li>
                <li>
                  Correção de dados incompletos, inexatos ou desatualizados;
                </li>
                <li>
                  Anonimização, bloqueio ou eliminação de dados desnecessários
                  ou excessivos;
                </li>
                <li>Portabilidade dos dados, nos termos da regulamentação;</li>
                <li>
                  Revogação do consentimento, quando esta for a base legal
                  utilizada.
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="font-semibold text-white text-[11px]">
                7. Segurança das informações
              </p>
              <p>
                Adotamos medidas técnicas e organizacionais razoáveis para
                proteger seus dados pessoais contra acessos não autorizados,
                perda, uso indevido ou divulgação indevida. Nenhum sistema,
                porém, é totalmente isento de riscos.
              </p>
            </div>

            <div className="space-y-2">
              <p className="font-semibold text-white text-[11px]">
                8. Contato para assuntos de privacidade
              </p>
              <p>
                Em caso de dúvidas sobre esta Política de Privacidade ou para
                exercer seus direitos como titular de dados, entre em contato
                pelos canais abaixo:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>E-mail: contato@techlogsistemas.cloud</li>
                <li>Telefone: (63) 99973-4569</li>
              </ul>
            </div>

            <div className="space-y-2">
              <p className="font-semibold text-white text-[11px]">
                9. Atualizações desta política
              </p>
              <p>
                Esta Política de Privacidade poderá ser atualizada
                periodicamente para refletir mudanças na legislação ou em nossos
                processos internos.
              </p>
              <p className="text-[10px] text-white/50">
                Esta política tem caráter informativo e não substitui orientação
                jurídica profissional específica para o seu negócio.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Contact;
