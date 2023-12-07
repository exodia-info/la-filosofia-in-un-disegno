import React from "react";
import {
  ArrowBigLeft,
  ArrowBigRight,
  ArrowLeft,
  Circle,
  CircleDot,
} from "lucide-react";
import stile from "./carosello.module.scss";
import {
  VscArrowLeft,
  VscArrowSmallLeft,
  VscArrowSmallRight,
} from "react-icons/vsc";

// @ts-ignore
const Carosello = ({ children }) => {
  const [imgIndex, setImgIndex] = React.useState(0);

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
      <section className="flex flex-col gap-2">
        <div className="relative flex">
          {children.map(
            (
              /** @type {React.Key | null | undefined} */ url:
                | React.Key
                | null
                | undefined,
              /** @type {number} */ index: number,
            ) => (
              <div
                key={url}
                className={`${stile.img}`}
                style={{
                  width: `${index === imgIndex ? "100%" : 0}`,
                  height: "100%",
                  overflow: "hidden",
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
          <div className="flex gap-2">
            <button onClick={showPrev} className={` ${stile.btn} `}>
              <ArrowBigLeft />
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

export default Carosello;
