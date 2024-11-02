/* eslint-disable react/no-children-prop */
import React, { useEffect, useLayoutEffect, useRef } from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import Indietro from "../components/Indietro";
import Content from "../components/Content";
// import Commento from '../components/Commento'
import MarxContent from "../descrizioni/marx.mdx";
import MarxContentEng from "../descrizioni/marxEng.mdx";
import ImageMagnifier from "../components/ImageMagnifier";
import { useTranslation } from "react-i18next";

const marx = () => {
  const { t, i18n } = useTranslation("marx");
  const marxUrl = "../assets/marxbeffa.jpg";

  const altezza = useRef<HTMLDivElement>(null);
  const matchAltezza = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const resize = () => {
      if (altezza.current && matchAltezza.current) {
        matchAltezza.current.style.height = `${altezza.current.clientHeight}px`;
      }
    };

    const observer = new ResizeObserver(resize);
    if (altezza.current) {
      observer.observe(altezza.current);
    }

    return () => {
      if (altezza.current) {
        observer.unobserve(altezza.current);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <Layout>
      <Head>
        <title>Il Pensiero di Marx in un Disegno</title>
        <meta name="description" content="Il Pensiero di Marx in un Disegno " />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="my-20 flex flex-col items-center justify-center gap-8 md:flex-row">
          <div ref={altezza} className="flex w-[95%] flex-col gap-3 md:w-[45%]">
            <div>
              <ImageMagnifier src={marxUrl} width="100%" />
            </div>
            <div className="relative hidden flex-col md:flex">
              <Indietro />
            </div>
          </div>
          <div
            ref={matchAltezza}
            className="flex w-[95%] flex-col gap-3 md:w-[45%]"
          >
            <div className="flex overflow-x-hidden">
              <div className="w-[80%] overflow-x-hidden overflow-y-scroll rounded-lg border-2 border-slate-400 bg-zinc-100 p-6 md:w-[100%]">
                <Content
                  content={
                    i18n.language === "it" ? (
                      <MarxContent />
                    ) : (
                      <MarxContentEng />
                    )
                  }
                />
              </div>
              <div className="text-2sxl flex w-[20%] items-center justify-center text-slate-500 md:hidden">
                • • • <br />
                • • • <br />
                • • • <br />
              </div>
            </div>
            <div className="relative flex flex-col md:hidden">
              <Indietro />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default marx;
