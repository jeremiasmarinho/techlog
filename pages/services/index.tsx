import type { FC } from "react";
import { motion } from "framer-motion";

import ServiceSlider from "@/components/ServiceSlider";
import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";
import { fadeIn } from "@/variants";

const Services: FC = () => {
  return (
    <div className="h-full bg-primary/30 pt-8 xl:pt-32 pb-20 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-2xl xl:h2 mb-6"
            >
              Soluções digitais que impulsionam o seu negócio
              <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-8 max-w-[400px] mx-auto lg:mx-0"
            >
              Do site institucional ao e-commerce completo, cada projeto é
              pensado para performance, segurança e geração de oportunidades
              para a sua empresa.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full text-sm xl:text-1xl xl:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
