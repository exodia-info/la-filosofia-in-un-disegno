import React from "react";
import {
  ArrowBigLeft,
  ArrowBigRight,
  ArrowLeft,
  Circle,
  CircleDot,
  Rotate3D,
  RotateCcw,
  RotateCw,
} from "lucide-react";
import stile from "./carosello.module.scss";

type CaroselloProps = {
  children: any;
};

const CaroNice: React.FC<CaroselloProps> = ({ children = [] }) => {
  const [imgIndex, setImgIndex] = React.useState(0);
  const [ruota, setRuota] = React.useState(false);
  const comandi = React.useRef<HTMLDivElement>(null);
  const immagine = React.useRef<HTMLDivElement>(null);

  const rotate = () => {
    if (comandi.current && immagine.current) {
      if (ruota) {
        immagine.current.style.transform = "rotate(90deg)";
      } else {
        immagine.current.style.transform = "rotate(18 0deg)";
      }
      setRuota((ruota) => !ruota);
    }
  };

  function showPrev() {
    setImgIndex((index) => {
      if (index === 0) return children.length - 1;
      return index - 1;
    });
  }

  function showNext() {
    setImgIndex((index) => {
      if (index === children.length - 1) return 0;
      return index + 1;
    });
  }

  //per le animazioni ovviamente devo avere anche le altre immagini nel dom

  return (
    <>
      <section className="flex flex-col gap-2 border-2 border-purple-300">
        <div className="relative flex rotate-90 border">
          {children.map(
            (
              /** @type {any} */ url: React.Key | null | undefined,
              /** @type {any} */ index: number,
            ) => (
              <div
                key={url}
                ref={immagine}
                className={`${stile.img}`}
                style={{
                  width: `${index === imgIndex ? "100%" : 0}`,
                  height: "100%s",
                  border: "4px solid yellow",
                }}
              >
                {children[index]}
              </div>
            ),
          )}
          <div
            className={`${stile.carosello} absolute bottom-[.5rem] left-[50%] flex translate-x-[-50%] gap-[.25rem]`}
          >
            {children?.map(
              (
                /** @type {React.Key | null | undefined} */ url:
                  | React.Key
                  | null
                  | undefined,
                /** @type {React.SetStateAction<number>} */ index: React.SetStateAction<number>,
              ) => (
                <button
                  className="relative"
                  onClick={() => setImgIndex(index)}
                  key={url}
                >
                  {index === imgIndex ? (
                    <span className={stile.circle}></span>
                  ) : (
                    ""
                  )}
                </button>
              ),
            )}
          </div>
        </div>
        <div>
          <div ref={comandi} className=" flex gap-2 ">
            <button onClick={showPrev} className={` ${stile.btn} `}>
              <ArrowBigLeft />
            </button>
            <button onClick={rotate} className={` ${stile.btn} `}>
              <RotateCw />
            </button>
            <button onClick={showNext} className={`${stile.btn}`}>
              <ArrowBigRight />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaroNice;
