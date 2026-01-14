import type { FC } from "react";
import { motion } from "framer-motion";
import { BsWhatsapp } from "react-icons/bs";

const WhatsAppWidget: FC = () => {
  // Substitua pelo seu número com código do país (ex: 5511999999999)
  const phoneNumber = "5563992361046";
  const message =
    "Olá! Vim pelo site e gostaria de saber mais sobre os serviços da TechLog.";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
      className="fixed bottom-[100px] xl:bottom-6 right-6 z-50"
    >
      <button
        onClick={handleClick}
        className="bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group relative"
        aria-label="Fale conosco no WhatsApp"
      >
        <BsWhatsapp className="w-7 h-7" />

        {/* Tooltip */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Fale conosco no WhatsApp
        </span>

        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></span>
      </button>
    </motion.div>
  );
};

export default WhatsAppWidget;
