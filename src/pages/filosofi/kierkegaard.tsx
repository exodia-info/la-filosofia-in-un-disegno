/* eslint-disable react/no-children-prop */
import React, { useLayoutEffect, useRef } from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import Indietro from "../components/Indietro";
import Content from "../components/Content";
// import Commento from '../components/Commento'
import KierkegaardContent from "../descrizioni/kierkegaard.mdx";
import KierkegaardContentEng from "../descrizioni/kierkegaardEng.mdx";
import ImageMagnifier from "../components/ImageMagnifier";
import Carosello from "../components/Carosello";
import { useTranslation } from "react-i18next";

const kierkegaard = () => {
  const { t, i18n } = useTranslation("kierkegaard");
  const kierkegaardUrl = "../assets/kierkegaardbeffa.jpg";
  const kierkegaardUrl2 = "../assets/kierkegaardbeffa2.jpg";
  const destra_giu = "/assets/destra_giu.mp4";
  const destra_su = "/assets/destra_su.mp4";
  const sinistra_giu = "/assets/sinistra_giu.mp4";
  const sinistra_su = "/assets/sinistra_su.mp4";

  const altezza = useRef<HTMLDivElement>(null);
  const matchAltezza = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const imagineRef = useRef<HTMLDivElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const videoRef3 = useRef<HTMLVideoElement>(null);
  const videoRef4 = useRef<HTMLVideoElement>(null);

  const [videoLoaded, setVideoLoaded] = React.useState(false);

  const resize = () => {
    if (
      altezza.current &&
      matchAltezza.current &&
      imagineRef.current &&
      videoRef.current &&
      videoRef2.current &&
      videoRef3.current &&
      videoRef4.current
    ) {
      matchAltezza.current.style.height = `${altezza.current.clientHeight}px`;
      videoRef.current.style.height = `${imagineRef.current.clientHeight}px`;
      videoRef2.current.style.height = `${imagineRef.current.clientHeight}px`;
      videoRef3.current.style.height = `${imagineRef.current.clientHeight}px`;
      videoRef4.current.style.height = `${imagineRef.current.clientHeight}px`;

      console.log(matchAltezza.current.clientHeight);
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

  return (
    <Layout
      children={
        <>
          <Head>
            <title>Il Pensiero di Kierkegaard in un Disegno</title>
            <meta
              name="description"
              content="Il Pensiero di Kierkegaard in un Disegno "
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
                <Carosello
                  children={[
                    <div ref={imagineRef}>
                      <ImageMagnifier src={kierkegaardUrl} width="100%" />
                    </div>,
                    <ImageMagnifier src={kierkegaardUrl2} width="100%" />,
                    <div className="flex justify-center">
                      <video
                        className="rounded-sm border-2 border-slate-400"
                        preload="metadata"
                        ref={videoRef}
                        style={{ transition: "all 0.5s ease-in-out" }}
                        src={destra_giu}
                        controls={false}
                        autoPlay
                        muted
                      ></video>
                    </div>,
                    <div className="flex justify-center">
                      <video
                        className="rounded-sm border-2 border-slate-400"
                        preload="metadata"
                        ref={videoRef2}
                        style={{
                          transition: "all 0.5s ease-in-out",
                          display: videoLoaded ? "block" : "none",
                        }}
                        src={destra_su}
                        controls={false}
                        autoPlay
                        muted
                        onError={(e) => alert(e)}
                        onLoadedData={() => setVideoLoaded(true)}
                      ></video>
                    </div>,
                    <div className="flex justify-center">
                      <video
                        className="rounded-sm border-2 border-slate-400"
                        preload="metadata"
                        ref={videoRef3}
                        style={{
                          transition: "all 0.5s ease-in-out",
                        }}
                        src="/assets/sinistra_giu.mp4"
                        controls={false}
                        autoPlay
                        muted
                      ></video>
                    </div>,
                    <div className="flex justify-center">
                      <video
                        className="rounded-sm border-2 border-slate-400"
                        preload="metadata"
                        ref={videoRef4}
                        style={{ transition: "all 0.5s ease-in-out" }}
                        src="/assets/sinistra_su.mp4"
                        controls={false}
                        autoPlay
                        muted
                      ></video>
                    </div>,
                  ]}
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
                          <KierkegaardContent />
                        ) : (
                          <KierkegaardContentEng />
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

export default kierkegaard;
