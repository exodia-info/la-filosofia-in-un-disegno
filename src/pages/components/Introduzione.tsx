import React from "react";
import Content from "./Content";
import IntroduzioneContent from "../descrizioni/introduzione.mdx";
import stile from "./introduzione.module.scss";

type Props = {};

const Introduzione = (props: Props) => {
  return (
    <section className=" relative my-16 max-h-[69vh] w-[99vw] overflow-x-hidden border-y-2 border-slate-400 bg-gradient-to-b from-[#fffed7] to-[#fffbce] px-12 py-4 md:max-h-[none] md:w-[79vw] md:px-20 md:py-8">
      <div className="  mb-[-80px] overflow-hidden">
        <span
          style={{
            fontFamily: "Georgia",
            fontSize: 180 + "px",
            marginRight: 2 + "vw",
            padding: 0,
            alignSelf: "start",
          }}
        >
          “
        </span>
      </div>
      <Content content={<IntroduzioneContent />} />
      <div className="mt-[-80px] flex justify-end overflow-hidden ">
        <span
          style={{
            fontFamily: "Georgia",
            fontSize: 180 + "px",
            margin: 0,
            padding: 0,
            marginLeft: 2 + "vw",
          }}
        >
          „
        </span>
      </div>
    </section>
  );
};

export default Introduzione;
