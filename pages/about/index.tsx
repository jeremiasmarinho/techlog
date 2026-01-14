import type { FC } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import Image from "next/image";
import Head from "next/head";

import Circles from "@/components/Circles";
import { fadeIn } from "@/variants";
import { aboutData } from "@/data/about";

const About: FC = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 pt-44 xl:pt-32 pb-20 text-center xl:text-left">
      <Head>
        <title>Sobre Nós | TechLog Sistemas</title>
        <meta
          name="description"
          content="Conheça a história e os diferenciais da TechLog. Especialistas em transformar ideias em soluções digitais de alto impacto."
        />
      </Head>
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex fixed bottom-0 -left-[422px] xl:mr-12"
      >
        <Image
          src="/avatar.png"
          width={737}
          height={678}
          alt="Avatar"
          className="translate-z-0 w-full h-full opacity-50"
        />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-2xl xl:h2 mb-6"
          >
            Um grande <span className="text-accent">negócio</span> merece um
            site surpreendente.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-8 xl:mb-12 px-2 xl:px-0 text-sm xl:text-lg"
          >
            Somos a TechLog, um estúdio digital focado em criar sites que geram
            autoridade e vendas. Combinamos experiência técnica e visão de
            negócio para traduzir a essência da sua marca em uma presença online
            que passa confiança e converte novos clientes todos os dias.
          </motion.p>
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              <div className="glass-card shadow-premium p-4 xl:p-6 rounded-2xl relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 hover:scale-105 transition-all duration-300">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 drop-shadow-[0_0_15px_rgba(241,48,36,0.5)]">
                  <CountUp start={0} end={6} duration={8} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] text-white/80">
                  Anos de experiência
                </div>
              </div>

              <div className="glass-card shadow-premium p-4 xl:p-6 rounded-2xl relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0 hover:scale-105 transition-all duration-300">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 drop-shadow-[0_0_15px_rgba(241,48,36,0.5)]">
                  <CountUp start={0} end={21} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] text-white/80">
                  Clientes satisfeitos
                </div>
              </div>
              <div className="glass-card shadow-premium p-4 xl:p-6 rounded-2xl relative flex-1 hover:scale-105 transition-all duration-300">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 drop-shadow-[0_0_15px_rgba(241,48,36,0.5)]">
                  <CountUp start={0} end={18} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] text-white/80">
                  Projetos finalizados
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${
                  index === itemIndex &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
              >
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-4">
                  {item.icons?.map((icon, iconIndex) => (
                    <div key={iconIndex} className="text-2xl">
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
