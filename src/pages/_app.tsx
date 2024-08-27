import { type AppType } from "next/app";
import { api } from "cchii/utils/api";
import "cchii/styles/globals.scss";
import { ClerkProvider } from "@clerk/nextjs";
import Head from "next/head";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import { NextUIProvider } from "@nextui-org/react";
import "../i18n";

const MyApp: AppType = ({ Component, pageProps }) => {
  const router = useRouter();

  const shouldEnableAuthentication = router.pathname.startsWith("/auth");

  return (
    <>
      <ClerkProvider {...pageProps}>
        <NextUIProvider>
          <Head>
            <title>La Filosofia in un Disegno</title>
            <meta name="description" content="" />
            <link rel="icon" href="/exodia.png" />
            <script
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3185380127106627"
              crossOrigin="anonymous"
            ></script>
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-6Q5VHG68C1"
            ></script>
            <script>
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-6Q5VHG68C1');
              `}
            </script>
          </Head>
          <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#efeda9] to-[#eae38d]">
            <Header />
            <Toaster />
            <Component {...pageProps} />
          </main>
        </NextUIProvider>
      </ClerkProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
