/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "./Layout";
import Introduzione from "../descrizioni/introduzione.mdx";
import Content from "./Content";
import {
  schopenhauer,
  feuerbach,
  marx,
  comte,
  bergson,
  nietzsche,
  kierkegaard,
  exodia,
} from "public/assets";
import weed_note from "../../weed_note.json";
import footerLinks from "../../footerLinks.json";
import beffaLinks from "../../beffaLinks.json";

const Filosofi = ({}) => {
  const [weed, setWeed] = useState<any>("");
  useEffect(() => {
    const weed = setWeed(weed_note["weed-note"]);
  }, []);

  return (
    // eslint-disable-next-line react/no-children-prop
    <Layout
      children={
        <>
          <div className="flex flex-col">
            <section className="my-16 w-[99vw] max-w-none overflow-x-hidden bg-gradient-to-b from-[#fffed7] to-[#fffbce] px-12 py-4 md:w-[79vw] md:px-20 md:py-8">
              <div className=" mb-[-80px] overflow-hidden">
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
              <Content content={<Introduzione />} />
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

            <section className="my-28 w-[99vw] max-w-none overflow-x-hidden px-4 py-4 md:w-[79vw] md:px-20 md:py-8">
              <h1
                className={`  border-b-2 border-slate-600 pb-4  font-anton text-2xl uppercase md:text-4xl`}
              >
                prima eredità hegeliana: Contro l'Idealismo{" "}
              </h1>
              <div className="  mt-16 flex flex-wrap items-center justify-start gap-4 overflow-hidden md:gap-8 ">
                <Link
                  href={{ pathname: `filosofi/schopenhauer` }}
                  className=" rounded-md border-[1px] border-slate-200 bg-amber-100 p-2"
                >
                  <div className="z-30 overflow-hidden rounded-lg border-2 border-slate-400">
                    <Image
                      alt="schopenhauer"
                      src={schopenhauer}
                      className=" w-[35vw] duration-300   hover:scale-105 md:w-[15vw]"
                    />
                  </div>
                  <h1 className=" h-8 max-w-[35vw] text-center text-xs font-bold italic  md:max-w-[15vw] md:text-lg">
                    Arthur Schopenhauer
                  </h1>
                </Link>
                <Link
                  href={{ pathname: `filosofi/kierkegaard` }}
                  className=" rounded-md border-[1px] border-slate-200 bg-amber-100 p-2"
                >
                  <div className="z-30 overflow-hidden rounded-lg border-2 border-slate-400">
                    <Image
                      alt="schopenhauer"
                      src={kierkegaard}
                      className=" w-[35vw] duration-300   hover:scale-105 md:w-[15vw]"
                    />
                  </div>
                  <h1 className="h-8 max-w-[35vw] text-center text-xs font-bold italic md:max-w-[15vw] md:text-lg">
                    Søren <br className=" flex md:hidden" /> Aabye Kierkegaard
                  </h1>
                </Link>
                {/* <Link href={{ pathname: `filosofi/feuerbach` }} className=' bg-amber-100 p-2 rounded-md border-[1px] border-slate-200'>
                                <div className='border-2 border-slate-400 rounded-lg z-30 overflow-hidden'>
                                    <Image alt='schopenhauer' src={feuerbach} className=' hover:scale-105 duration-300   w-[35vw] md:w-[15vw]' />
                                </div>
                                <h1 className='h-8 font-bold text-xs md:text-lg text-center italic'>Ludwig Feuerbach</h1>

                            </Link>
                            <Link href={{ pathname: `filosofi/marx` }} className=' bg-amber-100 p-2 rounded-md border-[1px] border-slate-200'>
                                <div className='border-2 border-slate-400 rounded-lg z-30 overflow-hidden'>
                                    <Image alt='schopenhauer' src={marx} className=' hover:scale-105 duration-300   w-[35vw] md:w-[15vw]' />
                                </div>
                                <h1 className='h-8 font-bold text-xs md:text-lg text-center italic'>Karl Marx</h1>

                            </Link> */}
              </div>
            </section>
            <section className="my-28 w-[99vw] max-w-none overflow-x-hidden px-4 py-4 md:w-[79vw] md:px-20 md:py-8">
              <h1
                className={`  font-base border-b-2 border-slate-600  pb-4  font-anton text-2xl uppercase md:text-4xl`}
              >
                seconda eredita hegeliana: la sinistra hegeliana
              </h1>

              <div className="  mt-16 flex flex-wrap items-center justify-between  overflow-hidden md:justify-start md:gap-8 ">
                <Link
                  href={{ pathname: `filosofi/feuerbach` }}
                  className=" rounded-md border-[1px] border-slate-200 bg-amber-100 p-2"
                >
                  <div className="z-30 overflow-hidden rounded-lg border-2 border-slate-400">
                    <Image
                      alt="schopenhauer"
                      src={feuerbach}
                      className=" w-[38vw] duration-300   hover:scale-105 md:w-[15vw]"
                    />
                  </div>
                  <h1 className="h-8 text-center text-xs font-bold italic md:text-lg">
                    Ludwig Feuerbach
                  </h1>
                </Link>
                <Link
                  href={{ pathname: `filosofi/marx` }}
                  className=" rounded-md border-[1px] border-slate-200 bg-amber-100 p-2"
                >
                  <div className="z-30 overflow-hidden rounded-lg border-2 border-slate-400">
                    <Image
                      alt="schopenhauer"
                      src={marx}
                      className=" w-[38vw] duration-300   hover:scale-105 md:w-[15vw]"
                    />
                  </div>
                  <h1 className="h-8 text-center text-xs font-bold italic md:text-lg">
                    Karl Marx
                  </h1>
                </Link>
              </div>
            </section>
            <section className="my-28 w-[99vw] max-w-none overflow-x-hidden px-4 py-4 md:w-[79vw] md:px-20 md:py-8">
              <h1
                className={`  font-base border-b-2 border-slate-600  pb-4  font-anton text-2xl uppercase md:text-4xl`}
              >
                Industrializzazione e Progresso: Positivismo e Spiritualismo
              </h1>

              <div className="  mt-16 flex flex-wrap items-center justify-between overflow-hidden md:justify-start md:gap-8 ">
                <Link
                  href={{ pathname: `filosofi/comte` }}
                  className=" rounded-md border-[1px] border-slate-200 bg-amber-100 p-2"
                >
                  <div className="z-30 overflow-hidden rounded-lg border-2 border-slate-400">
                    <Image
                      alt="schopenhauer"
                      src={comte}
                      className=" w-[38vw] duration-300   hover:scale-105 md:w-[15vw]"
                    />
                  </div>
                  <h1 className="h-8 text-center text-xs font-bold italic md:text-lg">
                    August Comte
                  </h1>
                </Link>
                <Link
                  href={{ pathname: `filosofi/bergson` }}
                  className=" rounded-md border-[1px] border-slate-200 bg-amber-100 p-2"
                >
                  <div className="z-30 overflow-hidden rounded-lg border-2 border-slate-400">
                    <Image
                      alt="schopenhauer"
                      src={bergson}
                      className=" w-[38vw] duration-300   hover:scale-105 md:w-[15vw]"
                    />
                  </div>
                  <h1 className="h-8 text-center text-xs font-bold italic md:text-lg">
                    Henri Bergson
                  </h1>
                </Link>
              </div>
            </section>
            <section className="my-28 w-[99vw] max-w-none overflow-x-hidden px-4 py-4 md:w-[79vw] md:px-20 md:py-8">
              <h1
                className={`  font-base border-b-2  border-slate-600   pb-4  font-anton text-2xl uppercase md:text-4xl`}
              >
                La Crisi delle Certezze filosofiche
              </h1>

              <div className="  mt-16 flex flex-wrap items-start justify-start gap-4 overflow-hidden md:gap-8 ">
                {/* <Link href={{ pathname: `filosofi/kierkegaard` }} className=' bg-amber-100 p-2 rounded-md border-[1px] border-slate-200'>
                                <div className='border-2 border-slate-400 rounded-lg z-30 overflow-hidden'>
                                    <Image alt='schopenhauer' src={kierkegaard} className=' hover:scale-105 duration-300   w-[35vw] md:w-[15vw]' />
                                </div>
                                <h1 className='h-8 font-bold text-xs md:text-lg text-center italic max-w-[35vw] md:max-w-[15vw]'>Søren <br className=' flex md:hidden' /> Aabye Kierkegaard</h1>

                            </Link> */}
                <Link
                  href={{ pathname: `filosofi/nietzsche` }}
                  className=" rounded-md border-[1px] border-slate-200 bg-amber-100 p-2"
                >
                  <div className="z-30 max-w-[35vw] overflow-hidden rounded-lg border-2 border-slate-400 md:max-w-[15vw]">
                    <Image
                      alt="schopenhauer"
                      src={nietzsche}
                      className=" w-[38vw] duration-300   hover:scale-105 md:w-[15vw]"
                    />
                  </div>
                  <h1 className="h-8 max-w-[35vw] text-center text-xs font-bold italic md:max-w-[15vw] md:text-lg     ">
                    Friedrich Wilhelm Nietzsche
                  </h1>
                </Link>
              </div>
            </section>
            <footer className="mt-24 flex justify-center">
              <div className=" w-[85%] border-t-2 border-slate-400">
                <section>
                  <h1 className="mt-20 font-poppins text-lg font-bold md:text-2xl">
                    Tech stack used for the project:
                  </h1>
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <div className="feature-card glass flex flex-col items-center justify-center rounded-md border-[1px] border-slate-400 px-2 py-1 md:px-4 md:py-2">
                      <h1 className=" min-w-full text-xs font-semibold md:text-base">
                        SSR, Routing
                      </h1>
                      <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-slate-100 p-2 md:h-24 md:w-24">
                        <Image
                          alt="sus"
                          layout="intrinsic"
                          width={80}
                          height={80}
                          src={"/assets/next.png"}
                          className="duration-300 hover:scale-105"
                        />
                      </div>
                      <h1 className="text-xs font-bold md:text-base">
                        Next.js
                      </h1>
                    </div>

                    <div className="feature-card glass flex flex-col items-center justify-center rounded-md border-[1px] border-slate-400 px-2 py-1 md:px-4 md:py-2">
                      <h1 className="min-w-full text-xs font-semibold md:text-base">
                        Frontend & Logic
                      </h1>
                      <div className=" flex h-16 w-32 items-center justify-center gap-1 overflow-hidden rounded-full bg-slate-100 p-2 md:h-24 md:w-48">
                        <Image
                          alt="sus"
                          layout="intrinsic"
                          width={55}
                          height={55}
                          src={"/assets/typescript.png"}
                          className="duration-300 hover:scale-105"
                        />
                        <Image
                          alt="sus"
                          layout="intrinsic"
                          width={55}
                          height={55}
                          src={"/assets/react.png"}
                          className="duration-300 hover:scale-105"
                        />
                      </div>
                      <h1 className="text-xs font-bold md:text-base">
                        TypeScript-React (tsx)
                      </h1>
                    </div>

                    <div className="feature-card glass flex flex-col items-center justify-center rounded-md border-[1px] border-slate-400 px-2 py-1 md:px-4 md:py-2">
                      <h1 className="min-w-full text-xs font-semibold md:text-base">
                        Text formatter
                      </h1>
                      <div className=" flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-slate-100 p-2 md:h-24 md:w-24">
                        <Image
                          alt="sus"
                          layout="intrinsic"
                          width={70}
                          height={70}
                          src={"/assets/mdx.png"}
                          className="duration-300 hover:scale-105"
                        />
                      </div>
                      <h1 className="text-xs font-bold md:text-base">MDX</h1>
                    </div>

                    <div className="feature-card glass flex flex-col items-center justify-center rounded-md border-[1px] border-slate-400 px-2 py-1 md:px-4 md:py-2">
                      <h1 className="min-w-full text-xs font-semibold md:text-base">
                        Styles
                      </h1>
                      <div className=" flex h-16 w-32 items-center justify-center gap-1 overflow-hidden rounded-full bg-slate-100 p-2 md:h-24 md:w-48">
                        <Image
                          alt="sus"
                          layout="intrinsic"
                          width={55}
                          height={55}
                          src={"/assets/tailwind.png"}
                          className="duration-300 hover:scale-105"
                        />
                        <Image
                          alt="sus"
                          layout="intrinsic"
                          width={55}
                          height={55}
                          src={"/assets/sass.png"}
                          className="duration-300 hover:scale-105"
                        />
                      </div>
                      <h1 className="text-xs font-bold md:text-base">
                        Tailwindcss & Scss
                      </h1>
                    </div>

                    <div className="feature-card glass flex flex-col items-center justify-center rounded-md border-[1px] border-slate-400 px-2 py-1 md:px-4 md:py-2">
                      <h1 className="min-w-full text-xs font-semibold md:text-base">
                        Deployment
                      </h1>
                      <div className=" flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-slate-100 p-2 md:h-24 md:w-24">
                        <Image
                          alt="sus"
                          layout="intrinsic"
                          width={70}
                          height={70}
                          src={"/assets/vercel.png"}
                          className="duration-300 hover:scale-105"
                        />
                      </div>
                      <h1 className="text-xs font-bold md:text-base">Vercel</h1>
                    </div>

                    <div className="feature-card glass flex flex-col items-center justify-center rounded-md border-[1px] border-slate-400 px-2 py-1 md:px-4 md:py-2">
                      <h1 className="min-w-full text-xs font-semibold md:text-base">
                        Authentication
                      </h1>
                      <div className=" flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-slate-100 p-2 md:h-24 md:w-24">
                        <Image
                          alt="sus"
                          layout="intrinsic"
                          width={70}
                          height={70}
                          src={"/assets/clerk.png"}
                          className="duration-300 hover:scale-105"
                        />
                      </div>
                      <h1 className="text-xs font-bold md:text-base">Clerk</h1>
                    </div>
                    <div className="feature-card glass flex flex-col items-center justify-center rounded-md border-[1px] border-slate-400 px-2 py-1 md:px-4 md:py-2">
                      <h1 className="min-w-full text-xs font-semibold md:text-base">
                        Source Control
                      </h1>
                      <div className=" flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-slate-100 p-2 md:h-24 md:w-24">
                        <Image
                          alt="sus"
                          layout="intrinsic"
                          width={70}
                          height={70}
                          src={"/assets/git.png"}
                          className="duration-300 hover:scale-105"
                        />
                      </div>
                      <h1 className="text-xs font-bold md:text-base">Git</h1>
                    </div>
                  </div>
                </section>
                <section
                  className={`flex  flex-col items-center justify-center py-6 sm:py-16`}
                  id="contattaci"
                >
                  <div
                    className={`mb-8 flex w-full flex-col items-center justify-center gap-8 md:flex-row `}
                  >
                    <div className="mt-10 w-full flex-[1.5] flex-col flex-wrap justify-between">
                      <h1 className="mt-10 font-poppins font-bold md:text-[20px]">
                        Codice di Mauro Bianchin
                      </h1>
                      {footerLinks.map((link) => (
                        <div
                          key={link.title}
                          className="ss:my-0 flex min-w-[150px]  flex-col"
                        >
                          <h4 className="tw mt-4 font-poppins text-sm font-medium sm:mt-10 md:text-[18px] md:leading-[27px]">
                            {link.title}
                          </h4>
                          <ul className="mt-1 list-none">
                            {link.links.map((lin, index) => (
                              <li
                                key={lin.name}
                                className={`dimWhite hover:[marx] cursor-pointer font-poppins  text-[14px] font-normal md:text-[16px]
                    ${index !== lin.link.length - 1 ? "mt-0" : "mt-0"}`}
                              >
                                {lin.name}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="ml-2 mr-6 mt-10 hidden h-28 items-center justify-center md:flex md:flex-grow">
                      <span className="flex h-full w-[1px] bg-slate-800  align-middle"></span>
                    </div>
                    <div className="mt-0 w-full flex-[1.5] flex-col flex-wrap justify-between md:mt-10">
                      <h1 className="mt-2 font-poppins font-bold md:mt-10 md:text-[20px]">
                        Disegni e descrizioni di Alessandro Beffasti
                      </h1>
                      {beffaLinks.map((link) => (
                        <div
                          key={link.title}
                          className="ss:my-0 flex min-w-[150px]  flex-col"
                        >
                          <h4 className="mt-4 font-poppins text-sm font-medium sm:mt-10 md:text-[18px] md:leading-[27px]">
                            {link.title}
                          </h4>
                          <ul className="mt-1 list-none">
                            {link.links.map((lin, index) => (
                              <li
                                key={lin.name}
                                className={`dimWhite hover:[marx] cursor-pointer font-poppins text-[14px] font-normal md:text-[16px]
                    ${index !== lin.link.length - 1 ? "mt-0" : "mt-0"}`}
                              >
                                {lin.name}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex w-full flex-row items-end justify-center border-t-[1px] border-t-[#3f3e45] pt-9">
                    <p className="tw flex items-end text-center font-poppins text-[18px] font-normal leading-[27px]">
                      Powered by:
                      <Image
                        alt="sus"
                        layout="intrinsic"
                        width={120}
                        height={70}
                        src={"/assets/exodiaviola.png"}
                        className="ml-3 duration-300 hover:scale-105"
                      />
                    </p>
                  </div>
                </section>
              </div>
            </footer>
          </div>
        </>
      }
    />
  );
};

export default Filosofi;
