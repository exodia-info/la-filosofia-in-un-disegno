import { type AppType } from "next/app";

import { api } from "cchii/utils/api";

import "cchii/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Head from "next/head";
import Header from "./components/Header";
import { TextProvider } from "./components/TextContext";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <>
    <ClerkProvider {...pageProps}>
      <TextProvider>
        <Head>
          <title>La Filosofia in un Disegno</title>
          <meta name="description" content="" />
          <link rel="icon" href="/exodia.png" />
        </Head>
        <main className="flex flex-col items-center min-h-screen bg-gradient-to-b from-[#efeda9] to-[#eae38d]">
          <Header />
          <Component {...pageProps} />
        </main>
      </TextProvider>
    </ClerkProvider>
  </>
};

export default api.withTRPC(MyApp);