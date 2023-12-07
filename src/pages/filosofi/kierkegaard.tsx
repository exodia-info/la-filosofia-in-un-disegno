/* eslint-disable react/no-children-prop */
import React, { useLayoutEffect, useRef } from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import Indietro from "../components/Indietro";
import Content from "../components/Content";
// import Commento from '../components/Commento'
import KierkegaardContent from "../descrizioni/kierkegaard.mdx";
import ImageMagnifier from "../components/ImageMagnifier";
import Carosello from "../components/Carosello";

const kierkegaard = () => {
  const kierkegaardUrl = "../assets/kierkegaardbeffa.jpg";
  const kierkegaardUrl2 = "../assets/kierkegaardbeffa2.jpg";

  const altezza = useRef<HTMLDivElement>(null);
  const matchAltezza = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const imagineRef = useRef<HTMLDivElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const videoRef3 = useRef<HTMLVideoElement>(null);
  const videoRef4 = useRef<HTMLVideoElement>(null);

  const resize = () => {
    setTimeout(() => {
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
      } else {
        console.log("non funziona");
        setTimeout(resize, 100);
      }
    }, 100);
  };

  useLayoutEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, [altezza]);

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
                        ref={videoRef}
                        src="../assets/destra_giu.mp4"
                        controls
                        autoPlay
                        muted
                      ></video>
                    </div>,
                    <div className="flex justify-center">
                      <video
                        className="rounded-sm border-2 border-slate-400"
                        ref={videoRef2}
                        src="../assets/destra_su.mp4"
                        controls
                        autoPlay
                        muted
                      ></video>
                    </div>,
                    <div className="flex justify-center">
                      <video
                        className="rounded-sm border-2 border-slate-400"
                        ref={videoRef3}
                        src="../assets/sinistra_giu.mp4"
                        controls
                        autoPlay
                        muted
                      ></video>
                    </div>,
                    <div className="flex justify-center">
                      <video
                        className="rounded-sm border-2 border-slate-400"
                        ref={videoRef4}
                        src="../assets/sinistra_su.mp4"
                        controls
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
                className={`flex w-[90%]  flex-col gap-3 md:w-[45%]`}
              >
                <div className=" overflow-x-hidden overflow-y-scroll rounded-lg border-2 border-slate-400 bg-zinc-100 p-6">
                  <Content content={<KierkegaardContent />} />
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
