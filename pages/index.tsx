import type { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { fadeIn } from "../variants";
import ParticlesContainer from "../components/ParticlesContainer";
import Avatar from "../components/Avatar";
import WhatsAppWidget from "../components/WhatsAppWidget";
import Head from "next/head";

const Home: FC = () => {
  return (
    <div className="bg-primary/60 h-full">
      <Head>
        <title>TechLog Sistemas | Software e Automação em Araguaína</title>
        <meta
          name="description"
          content="Sistemas web, automações e portais corporativos para clínicas e empresas. A TechLog une engenharia de software e visão de negócios em Araguaína."
        />
      </Head>
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        {/* Logo abaixo das redes sociais - apenas mobile */}
        <motion.div
          variants={fadeIn("down", 0.1)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="xl:hidden flex justify-center pt-[140px]"
        >
          <Image
            src="/logosimples.png"
            width={200}
            height={200}
            alt="TechLog Logo"
            className="opacity-20"
          />
        </motion.div>
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-2xl xl:h1 -mt-[460px] xl:mt-0 drop-shadow-[0_4px_20px_rgba(241,48,36,0.3)]"
          >
            Tecnologia que organiza <br />e escala
            <span className="text-slate-200"> seu negócio</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl text-sm xl:text-lg mx-auto xl:mx-0 mb-8 mt-4 xl:mt-0 xl:mb-16 text-white/80 leading-relaxed"
          >
            Na TechLog desenvolvemos sistemas web, automações e portais
            corporativos. Unimos engenharia de software e visão de negócios para
            transformar processos manuais em digitais. Cuidamos de toda a
            tecnologia — da segurança à implantação — para que você foque no que
            mais importa: atender seus pacientes e clientes.
          </motion.p>
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0" />
        <ParticlesContainer />
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
      <WhatsAppWidget />
    </div>
  );
};

export default Home;
