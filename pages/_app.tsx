import "../styles/globals.css";

import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";

import Layout from "../components/Layout";
import Transition from "../components/Transition";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <Layout>
      <Head>
        <title>TechLog Sistemas | Desenvolvimento de Sites e Apps</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="TechLog Sistemas: Soluções digitais completas. Desenvolvimento de sites, aplicativos e marketing digital para transformar seu negócio."
        />
        <meta
          name="keywords"
          content="desenvolvimento de sites, criação de aplicativos, marketing digital, techlog, sistemas, sites modernos, landing pages"
        />
        <meta name="author" content="TechLog Sistemas" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="TechLog Sistemas | Transforme seu negócio"
        />
        <meta
          property="og:description"
          content="Na TechLog criamos sites rápidos, modernos e orientados a resultados. Unimos estratégia e tecnologia."
        />
        <meta property="og:image" content="/logosimples.png" />
      </Head>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}
