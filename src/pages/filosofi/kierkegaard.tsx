import React, { useLayoutEffect, useRef, useState } from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import Indietro from "../components/Indietro";
import Content from "../components/Content";
import KierkegaardContent from "../descrizioni/kierkegaard.mdx";
import KierkegaardContentEng from "../descrizioni/kierkegaardEng.mdx";
import ImageMagnifier from "../components/ImageMagnifier";
import Carosello from "../components/Carosello";
import { useTranslation } from "react-i18next";

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

  const [videosLoaded, setVideosLoaded] = useState(videoUrls.map(() => false));

  const resize = () => {
    if (altezza.current && matchAltezza.current && imagineRef.current) {
      matchAltezza.current.style.height = `${altezza.current.clientHeight}px`;
      videoRefs.current.forEach((videoRef) => {
        if (videoRef) {
          videoRef.style.height = `${imagineRef.current!.clientHeight}px`;
        }
      });
    }
  };

  useLayoutEffect(() => {
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const handleVideoLoad = (index: number) => {
    setVideosLoaded((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  const carouselItems = [
    <div key="image1" ref={imagineRef}>
      <ImageMagnifier src={kierkegaardUrl} width="100%" />
    </div>,
    <ImageMagnifier key="image2" src={kierkegaardUrl2} width="100%" />,
    ...videoUrls.map((url, index) => (
      <div key={`video-${index}`} className="flex justify-center">
        <video
          className="rounded-sm border-2 border-slate-400"
          ref={(el) => (videoRefs.current[index] = el)}
          style={{
            transition: "all 0.5s ease-in-out",
            display: videosLoaded[index] ? "block" : "none",
          }}
          src={url}
          controls={false}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => handleVideoLoad(index)}
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
        <div className="my-20 flex flex-col items-center justify-center gap-8 md:flex-row">
          <div
            ref={altezza}
            className="flex w-[90%] flex-col gap-2 overflow-hidden md:w-[45%]"
          >
            <Carosello children={carouselItems} />
            <div className="relative z-10 hidden flex-col md:flex">
              <Indietro />
            </div>
          </div>
          <div
            ref={matchAltezza}
            className={`flex w-[90%] flex-col gap-3 md:w-[45%]`}
          >
            <div className="flex overflow-x-hidden">
              <div className="w-[80%] overflow-x-hidden overflow-y-scroll rounded-lg border-2 border-slate-400 bg-zinc-100 p-6 md:w-[100%]">
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
