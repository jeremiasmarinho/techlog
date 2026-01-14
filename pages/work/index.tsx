import type { FC } from "react";
import { motion } from "framer-motion";
import Head from "next/head";

import WorkSlider from "@/components/WorkSlider";
import Bulb from "@/components/Bulb";
import Circles from "@/components/Circles";
import { fadeIn } from "@/variants";

const Work: FC = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Head>
        <title>Portfólio | TechLog Sistemas</title>
        <meta
          name="description"
          content="Confira nossos projetos recentes. Sites e aplicativos que geram resultados reais para nossos clientes."
        />
      </Head>
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-2xl xl:h2 mb-4 xl:mb-0 xl:mt-12 mt-12"
            >
              Projetos que transformam presença online em
              <span className="text-accent"> resultado.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Conheça alguns dos sites que criamos para empresas de diferentes
              segmentos, sempre com foco em design, performance e conversão de
              visitantes em clientes.
            </motion.p>
          </div>
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
