import { type AppType } from "next/app";
import { api } from "cchii/utils/api";
import "cchii/styles/globals.scss";
import {
  ClerkProvider,
  SignIn,
  SignedIn,
  SignedOut,
  useUser,
} from "@clerk/nextjs";
import Head from "next/head";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/router";
import { NextUIProvider } from "@nextui-org/react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import "../i18n";

//fanculo sta troia, fanculo adrian, fanculo a tutti i coglioni che mi hanno fatto perdere tempo con questa merda e fanculo la vita

const MyApp: AppType = ({ Component, pageProps }) => {
  const { t, i18n } = useTranslation();

  const DebugComponent = () => {
    const { user, isSignedIn } = useUser();
    console.log("User state:", { user, isSignedIn });
    return null;
  };

  return (
    <>
      <ClerkProvider
        {...pageProps}
        localization={{
          signIn: {
            start: {
              title: t("loginTitle"),
              subtitle: t("loginSubtitle"),
              actionText: t("loginAction"),
              actionLink: t("loginLink"),
            },
          },
        }}
      >
        <NextUIProvider>
          <Head>
            <title>La Filosofia in un Disegno</title>
            <meta name="description" content="" />
            <link rel="icon" href="/exodia.png" />
            {/* <script
              async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3185380127106627"
              crossOrigin="anonymous"
            ></script> */}
            {/* <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-6Q5VHG68C1"
            ></script> */}
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-6Q5VHG68C1');
                `,
              }}
            ></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.axeptioSettings = {
                    clientId: "66cde0aee2d7c1f39b9241ff",
                    cookiesVersion: "exodia.info-en-EU-2",
                    googleConsentMode: {
                      default: {
                        analytics_storage: "denied",
                        ad_storage: "denied",
                        ad_user_data: "denied",
                        ad_personalization: "denied",
                        wait_for_update: 500
                      }
                    }
                  };
                  (function(d, s) {
                    var t = d.getElementsByTagName(s)[0], e = d.createElement(s);
                    e.async = true; e.src = "//static.axept.io/sdk.js";
                    t.parentNode.insertBefore(e, t);
                  })(document, "script");
                `,
              }}
            ></script>
          </Head>
          <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#efeda9] to-[#eae38d]">
            <Header />
            <Toaster />
            <SignedOut>
              <Component {...pageProps} />
              <SignIn
              // -
              />
            </SignedOut>
            <SignedIn>
              <Component {...pageProps} />
            </SignedIn>
          </main>
        </NextUIProvider>
      </ClerkProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
