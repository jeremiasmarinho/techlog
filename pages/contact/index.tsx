import type { FC, FormEvent, ChangeEvent } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

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
          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-sm xl:text-lg text-white/70 max-w-[520px] mx-auto mb-8"
          >
            Preencha os campos abaixo contando um pouco sobre o seu negócio e o
            tipo de site que você precisa. Em até 24 horas entraremos em contato
            com uma proposta pensada para a sua realidade.
          </motion.p>
          <motion.form
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex text-xs xl:text-lg flex-col gap-6 w-full mx-auto"
            onSubmit={handleSubmit}
          >
            <div className="flex gap-x-6 w-full">
              <input
                type="text"
                name="name"
                placeholder="Nome"
                className="input"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={loading}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input lowercase"
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
              className="input"
              value={formData.subject}
              onChange={handleChange}
              required
              disabled={loading}
            />
            <textarea
              name="message"
              placeholder="Mensagem"
              className="textarea"
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
              className="btn rounded-full border border-white/20 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group disabled:opacity-50 disabled:cursor-not-allowed glass-card hover:shadow-premium glow-on-hover relative"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                {loading ? "Enviando..." : "Enviar"}
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
