/* eslint-disable react/no-children-prop */
import React, { useLayoutEffect, useRef } from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import Indietro from "../components/Indietro";
import Content from "../components/Content";
// import Commento from '../components/Commento'
import SchopenhauerContent from "../descrizioni/schopenhauer.mdx";
import SchopenhauerContentEng from "../descrizioni/schopenhauerEng.mdx";
import ImageMagnifier from "../components/ImageMagnifier";
import Carosello from "../components/Carosello";
import { useTranslation } from "react-i18next";

const schopenhauer = () => {
  const { t, i18n } = useTranslation();
  const altezza = useRef<HTMLDivElement>(null);
  const matchAltezza = useRef<HTMLDivElement>(null);

  const resize = () => {
    if (altezza.current && matchAltezza.current) {
      matchAltezza.current.style.height = `${altezza.current.clientHeight}px`;
    } else {
      console.log("non funziona");
    }
    setTimeout(() => {
      if (altezza.current && matchAltezza.current) {
        matchAltezza.current.style.height = `${altezza.current.clientHeight}px`;
      }
    }, 1500);
  };

  useLayoutEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("DOMContentLoaded", resize);
    return () => window.removeEventListener("resize", resize);
  }, [altezza.current]);

  const schopenhauerUrl = "../assets/schopenhauerbeffa.jpg";
  const schopenhauerUrl2 = "../assets/schopenhauer_fughe.jpg";

  return (
    <Layout
      children={
        <>
          <Head>
            <title>Il Pensiero di Schopenhauer in un Disegno</title>
            <meta
              name="description"
              content="Il Pensiero di Schopenhauer in un Disegno "
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main>
            <div className="my-20 flex flex-col items-center justify-center gap-8   md:flex-row">
              <div
                ref={altezza}
                className="flex  w-[90%] flex-col gap-2 overflow-hidden md:w-[45%]"
                style={{ transition: "all 0.5s ease-in-out" }}
              >
                <Carosello
                  children={[
                    <ImageMagnifier src={schopenhauerUrl} width="100%" />,
                    <ImageMagnifier src={schopenhauerUrl2} width="100%" />,
                  ]}
                />
                <div className="relative z-10 hidden flex-col  md:flex">
                  <Indietro />
                </div>
              </div>
              <div
                ref={matchAltezza}
                className={`flex w-[90%] flex-col gap-3 md:w-[45%]`}
                style={{ transition: "all 0.5s ease-in-out" }}
              >
                <div className="flex  overflow-x-hidden">
                  <div className=" w-[80%] overflow-x-hidden overflow-y-scroll rounded-lg  border-2 border-slate-400 bg-zinc-100 p-6 md:w-[100%] ">
                    <Content
                      content={
                        i18n.language === "it" ? (
                          <SchopenhauerContent />
                        ) : (
                          <SchopenhauerContentEng />
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

export default schopenhauer;
