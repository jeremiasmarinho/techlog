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
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>TechLog Sistemas</title>
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
