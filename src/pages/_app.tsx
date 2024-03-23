import { type AppType } from "next/app";

import { api } from "cchii/utils/api";

import "cchii/styles/globals.scss";
import { ClerkProvider } from "@clerk/nextjs";
import Head from "next/head";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import "./i18n";

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter();

  const shouldEnableAuthentication = router.pathname.startsWith("/auth");

  return (
    <>
      <ClerkProvider {...pageProps}>
        <Head>
          <title>La Filosofia in un Disegno</title>
          <meta name="description" content="" />
          <link rel="icon" href="/exodia.png" />
        </Head>
        <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#efeda9] to-[#eae38d]">
          <Header />
          <Toaster />
          <Component {...pageProps} />
        </main>
      </ClerkProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
