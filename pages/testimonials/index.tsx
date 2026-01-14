import type { FC } from "react";
import { motion } from "framer-motion";
import Head from "next/head";

import TestimonialSlider from "@/components/TestimonialSlider";
import { fadeIn } from "@/variants";

const Testimonials: FC = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <Head>
        <title>Depoimentos | TechLog Sistemas</title>
        <meta
          name="description"
          content="Veja o que nossos clientes dizem sobre a parceria com a TechLog Sistemas. Histórias de sucesso e transformação digital."
        />
      </Head>
      <div className="container mx-auto h-full flex flex-col justify-center">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-2xl xl:h2 mt-12 xl:mt-4 mb-3 xl:mb-0"
        >
          Resultados reais de quem confiou na
          <span className="text-accent"> TechLog.</span>
        </motion.h2>
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="text-sm xl:text-lg"
        >
          <TestimonialSlider />
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
