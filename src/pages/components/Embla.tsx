import React, { useEffect, useRef, useState } from "react"; // aggiungi useState
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import stile from "./carosello.module.scss";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

type PropType = {
  slides: any;
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({
    ...options,
    watchDrag: true,
    skipSnaps: true,
  });
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0); // aggiungi questo state

  useEffect(() => {
    if (emblaApi) {
      const updateHeight = () => {
        if (!containerRef.current) return;
        const currentSlide = emblaApi.selectedScrollSnap();
        const slideElement = emblaApi.slideNodes()[currentSlide];
        containerRef.current.style.height = `${slideElement?.offsetHeight}px`;
        containerRef.current.style.transition = "height 0.3s ease-out";
        setSelectedIndex(currentSlide); // aggiorna l'indice quando cambia slide
      };

      emblaApi.on("select", updateHeight);
      emblaApi.on("init", updateHeight);
      window.addEventListener("load", updateHeight);

      return () => {
        emblaApi.off("select", updateHeight);
        emblaApi.off("init", updateHeight);
        window.removeEventListener("load", updateHeight);
      };
    }
  }, [emblaApi]);

  return (
    <section className="embla w-full">
      <div className="embla__viewport relative" ref={emblaRef}>
        <div className="embla__container gap-2" ref={containerRef}>
          {slides.map((slide: any, index: number) => (
            <div key={index} className="embla__slide">
              {slide}
            </div>
          ))}
        </div>

        <div
          className={`${stile.carosello} absolute bottom-[.5rem] left-[50%] z-50 flex translate-x-[-50%] gap-[.25rem]`}
        >
          {slides.map((_: any, index: any) => (
            <button
              key={index}
              className="relative"
              onClick={() => emblaApi?.scrollTo(index)}
            >
              {index === selectedIndex ? (
                <span className={stile.circle}></span>
              ) : (
                ""
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-2 flex gap-2">
        <button onClick={() => emblaApi?.scrollPrev()} className={stile.btn}>
          <ArrowBigLeft />
        </button>
        <button onClick={() => emblaApi?.scrollNext()} className={stile.btn}>
          <ArrowBigRight />
        </button>
      </div>
    </section>
  );
};

export default EmblaCarousel;
