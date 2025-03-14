import React, { useLayoutEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import Indietro from "../components/Indietro";
import Content from "../components/Content";
import KierkegaardContent from "../descrizioni/kierkegaard.mdx";
import KierkegaardContentEng from "../descrizioni/kierkegaardEng.mdx";
import ImageMagnifier from "../components/ImageMagnifier";
import { useTranslation } from "react-i18next";
import Embla from "../components/Embla";

const Kierkegaard = () => {
  const { t, i18n } = useTranslation("kierkegaard");
  const kierkegaardUrl = "../assets/kierkegaardbeffa.jpg";
  const kierkegaardUrl2 = "../assets/kierkegaardbeffa2.jpg";
  const videoUrls = [
    "/assets/destra_giu.mp4",
    "/assets/destra_su.mp4",
    "/assets/sinistra_giu.mp4",
    "/assets/sinistra_su.mp4",
  ];

  const altezza = useRef<HTMLDivElement>(null);
  const matchAltezza = useRef<HTMLDivElement>(null);
  const imagineRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [imageHeight, setImageHeight] = useState(0);

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

  const carouselItems = [
    <div key="image1" ref={imagineRef}>
      <ImageMagnifier src={kierkegaardUrl} width="100%" />
    </div>,

    <div key="image2">
      <ImageMagnifier src={kierkegaardUrl2} width="100%" />
    </div>,
    ...videoUrls.map((url, index) => (
      <div key={`video-${index}`}>
        <video
          className=" w-full overflow-hidden rounded-lg border-2 border-slate-400 object-cover "
          ref={(el) => (videoRefs.current[index] = el)}
          src={url}
          controls
          playsInline
          preload="auto"
          autoPlay
          muted
          loop
        />
      </div>
    )),
  ];

  return (
    <Layout>
      <Head>
        <title>Il Pensiero di Kierkegaard in un Disegno</title>
        <meta
          name="description"
          content="Il Pensiero di Kierkegaard in un Disegno "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div
          id="filosofo e contenuto"
          className="my-20 flex flex-col items-center justify-center gap-8  md:flex-row"
        >
          <div
            id="filosofo"
            ref={altezza}
            className="flex w-[95%] flex-col justify-center gap-2  md:w-[45%]"
          >
            <Embla slides={carouselItems} options={{ loop: true }} />

            <div className="relative z-10 hidden flex-col md:flex">
              <Indietro />
            </div>
          </div>
          <div
            ref={matchAltezza}
            className={`flex w-[95%] flex-col gap-3  md:w-[45%]`}
          >
            <div
              id="contenuto"
              ref={matchAltezza}
              className="flex overflow-x-hidden"
            >
              <div className=" w-[80%] overflow-x-hidden overflow-y-scroll rounded-lg border-2 border-slate-400 bg-zinc-100 p-6 md:w-[100%]">
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

export default Kierkegaard;
