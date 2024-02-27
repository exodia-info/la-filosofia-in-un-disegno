/* eslint-disable react/no-children-prop */
import React, { useEffect, useRef } from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import Indietro from "../components/Indietro";
import Content from "../components/Content";
// import Commento from '../components/Commento'
import MarxContent from "../descrizioni/marx.mdx";
import ImageMagnifier from "../components/ImageMagnifier";

const marx = () => {
  const marxUrl = "../assets/marxbeffa.jpg";

  return (
    <Layout
      children={
        <>
          <Head>
            <title>Il Pensiero di Marx in un Disegno</title>
            <meta
              name="description"
              content="Il Pensiero di Marx in un Disegno "
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main>
            <div className="my-20 flex flex-col items-center justify-center gap-8  md:h-[103vh] md:flex-row">
              <div className="flex w-[90%] flex-col gap-3  md:h-[100%] md:w-[45%]">
                <div className="">
                  <ImageMagnifier src={marxUrl} width="100%" />
                </div>
                <div className="relative hidden flex-col md:flex">
                  <Indietro />
                </div>
              </div>
              <div className="flex max-h-[75vh] w-[90%] flex-col gap-3 md:max-h-[100%] md:w-[45%]">
                <div className="flex w-[100%] overflow-x-hidden overflow-y-scroll">
                  <div className=" w-[80%] overflow-x-hidden overflow-y-scroll rounded-lg  border-2 border-slate-400 bg-zinc-100 p-6 md:w-[100%] ">
                    <Content content={<MarxContent />} />
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

export default marx;
