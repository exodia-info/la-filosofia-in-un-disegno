/* eslint-disable react/no-children-prop */
import React, { useLayoutEffect, useRef } from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import Indietro from "../components/Indietro";
import Content from "../components/Content";
// import Commento from '../components/Commento'
import BergsonContent from "../descrizioni/bergson.mdx";
import BergsonContentEng from "../descrizioni/bergsonEng.mdx";
import ImageMagnifier from "../components/ImageMagnifier";
import { useTranslation } from "react-i18next";
import EmblaCarousel from "../components/Embla";

const bergson = () => {
  const { t, i18n } = useTranslation("bergson");
  const bergsonUrl = "../assets/bergsonbeffa.jpg";
  const bergsonUrl2 = "../assets/bergson_illuminato.jpg";

  const altezza = useRef<HTMLDivElement>(null);
  const matchAltezza = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const resize = () => {
      if (altezza.current && matchAltezza.current) {
        matchAltezza.current.style.height = `${altezza.current.clientHeight}px`;
      }
    };
    console.log("Mount: creo observer");
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
    <Layout
      children={
        <>
          <Head>
            <title>Il Pensiero di Bergson in un Disegno</title>
            <meta
              name="description"
              content="Il Pensiero di Bergson in un Disegno "
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main>
            <div className="my-20 flex flex-col items-center justify-center gap-8   md:flex-row">
              <div
                ref={altezza}
                style={{ transition: "all 0.5s ease-in-out" }}
                className="flex  w-[90%] flex-col gap-2 overflow-hidden md:w-[45%]"
              >
                <EmblaCarousel
                  slides={[
                    <ImageMagnifier src={bergsonUrl} width="100%" />,
                    <ImageMagnifier src={bergsonUrl2} width="100%" />,
                  ]}
                  options={{ loop: true }}
                />
                <div className="relative z-10 hidden flex-col  md:flex">
                  <Indietro />
                </div>
              </div>
              <div
                ref={matchAltezza}
                style={{ transition: "all 0.5s ease-in-out" }}
                className={`flex w-[90%]  flex-col gap-3 md:w-[45%]`}
              >
                <div className="flex  overflow-x-hidden">
                  <div className=" w-[80%] overflow-x-hidden overflow-y-scroll rounded-lg  border-2 border-slate-400 bg-zinc-100 p-6 md:w-[100%] ">
                    <Content
                      content={
                        i18n.language === "it" ? (
                          <BergsonContent />
                        ) : (
                          <BergsonContentEng />
                        )
                      }
                    />
                  </div>
                  <div className=" text-2sxl flex w-[20%] items-center justify-center text-slate-500 md:hidden ">
                    • • • <br />
                    • • • <br />
                    • • • <br />
                  </div>
                </div>
                {/* <div className='border-red-600 border-2'>
                            <Commento />
                        </div> */}
                <div className="relative flex flex-col md:hidden">
                  <Indietro />
                </div>
              </div>
            </div>
          </main>
        </>
      }
    />
  );
};

export default bergson;
