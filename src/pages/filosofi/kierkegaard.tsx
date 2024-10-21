import React, { useState, useEffect, useRef } from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import Indietro from "../components/Indietro";
import Content from "../components/Content";
import KierkegaardContent from "../descrizioni/kierkegaard.mdx";
import KierkegaardContentEng from "../descrizioni/kierkegaardEng.mdx";
import ImageMagnifier from "../components/ImageMagnifier";
import { useTranslation } from "react-i18next";

const Kierkegaard: React.FC = () => {
  const { i18n } = useTranslation("kierkegaard");
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const items = [
    { type: "image", src: "../assets/kierkegaardbeffa.jpg" },
    { type: "image", src: "../assets/kierkegaardbeffa2.jpg" },
    {
      type: "video",
      src: "/assets/destra_giu.mp4",
      poster: "/assets/destra_giu_poster.jpg",
    },
    {
      type: "video",
      src: "/assets/destra_su.mp4",
      poster: "/assets/destra_su_poster.jpg",
    },
    {
      type: "video",
      src: "/assets/sinistra_giu.mp4",
      poster: "/assets/sinistra_giu_poster.poster.jpg",
    },
    {
      type: "video",
      src: "/assets/sinistra_su.mp4",
      poster: "/assets/sinistra_su_poster.jpg",
    },
  ];

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (containerRef.current && contentRef.current) {
        contentRef.current.style.height = `${containerRef.current.clientHeight}px`;
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length,
    );
  };

  const renderItem = (item: (typeof items)[0]) => {
    if (item.type === "image") {
      return <ImageMagnifier src={item.src} width="100%" />;
    } else {
      return (
        <video
          className="h-full w-full object-contain"
          src={item.src}
          poster={item.poster}
          controls
          playsInline
        />
      );
    }
  };

  return (
    <Layout>
      <Head>
        <title>Il Pensiero di Kierkegaard in un Disegno</title>
        <meta
          name="description"
          content="Il Pensiero di Kierkegaard in un Disegno"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="my-20 px-4">
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
          <div ref={containerRef} className="w-full max-w-2xl md:w-1/2">
            <div className="relative">
              {renderItem(items[activeIndex])}
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 transform bg-black bg-opacity-50 p-2 text-white"
              >
                &#10094;
              </button>
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 transform bg-black bg-opacity-50 p-2 text-white"
              >
                &#10095;
              </button>
            </div>
            <div className="mt-4 flex justify-center">
              {items.map((_, index) => (
                <button
                  key={index}
                  className={`mx-1 h-3 w-3 rounded-full ${
                    index === activeIndex ? "bg-blue-500" : "bg-gray-300"
                  }`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
          <div ref={contentRef} className="w-full max-w-2xl md:w-1/2">
            <div className="h-full overflow-y-auto rounded-lg border-2 border-slate-400 bg-zinc-100 p-4">
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
          </div>
        </div>
        <div className="mt-8">
          <Indietro />
        </div>
      </main>
    </Layout>
  );
};

export default Kierkegaard;
