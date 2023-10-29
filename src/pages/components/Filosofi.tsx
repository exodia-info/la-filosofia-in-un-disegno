/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useCallback, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Layout from './Layout'
import Introduzione from '../descrizioni/introduzione.mdx'
import Content from './Content'
import { schopenhauer, feuerbach, marx, comte, bergson, nietzsche, kierkegaard } from 'public/assets'
// import { useTextContext } from './TextContext';



const Filosofi = ({ }) => {

    // const { highlightedText } = useTextContext();

    return (
        // eslint-disable-next-line react/no-children-prop
        <Layout children={
            <>
                <div className='flex flex-col'>
                    <section className='w-[99vw] md:w-[79vw] px-12 md:px-20 py-4 md:py-8 my-16 overflow-x-hidden max-w-none bg-gradient-to-b from-[#fffed7] to-[#fffbce]'>
                        <div className=' mb-[-80px] overflow-hidden'>
                            <span style={{
                                fontFamily: 'Georgia',
                                fontSize: 180 + 'px',
                                marginRight: 2 + 'vw',
                                padding: 0,
                                alignSelf: 'start'
                            }}>“</span>
                        </div>
                        <Content content={<Introduzione />} />
                        <div className='flex justify-end overflow-hidden mt-[-80px] '>
                            <span style={{
                                fontFamily: 'Georgia',
                                fontSize: 180 + 'px',
                                margin: 0,
                                padding: 0,
                                marginLeft: 2 + 'vw',
                            }}>„</span>
                        </div>
                    </section>

                    <section className='w-[99vw] md:w-[79vw] px-4 md:px-20 py-4 md:py-8 my-28 overflow-x-hidden max-w-none'>
                        <h1 className={`  font-anton uppercase text-2xl  md:text-4xl border-b-2 border-slate-600 pb-4`}>Eredità Hegeliana: Anti-idealismo e Sinistra hegeliana</h1>
                        <div className='  flex overflow-hidden items-center justify-start gap-4 md:gap-8 mt-16 flex-wrap '>
                            <Link href={{ pathname: `filosofi/schopenhauer` }} className=' bg-amber-100 p-2 rounded-md border-[1px] border-slate-200'>
                                <div className='border-2 border-slate-400 rounded-lg z-30 overflow-hidden'>
                                    <Image alt='schopenhauer' src={schopenhauer} className=' hover:scale-105 duration-300   w-[35vw] md:w-[15vw]' />
                                </div>
                                <h1 className=' h-8 font-bold text-xs md:text-lg text-center italic  max-w-[35vw] md:max-w-[15vw]'>Arthur Schopenhauer</h1>
                            </Link>
                            <Link href={{ pathname: `filosofi/feuerbach` }} className=' bg-amber-100 p-2 rounded-md border-[1px] border-slate-200'>
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

                            </Link>
                        </div>
                    </section>
                    <section className='w-[99vw] md:w-[79vw] px-4 md:px-20 py-4 md:py-8 my-28 overflow-x-hidden max-w-none'>
                        <h1 className={`  font-anton uppercase font-base  text-2xl  md:text-4xl border-b-2 border-slate-600 pb-4`}>Industrializzazione e Progresso: Positivismo e Spiritualismo</h1>

                        <div className='  flex overflow-hidden items-center md:justify-start justify-center gap-4 md:gap-8 mt-16 flex-wrap '>
                            <Link href={{ pathname: `filosofi/comte` }} className=' bg-amber-100 p-2 rounded-md border-[1px] border-slate-200'>
                                <div className='border-2 border-slate-400 rounded-lg z-30 overflow-hidden'>
                                    <Image alt='schopenhauer' src={comte} className=' hover:scale-105 duration-300   w-[35vw] md:w-[15vw]' />
                                </div>
                                <h1 className='h-8 font-bold text-xs md:text-lg text-center italic'>August Comte</h1>

                            </Link>
                            <Link href={{ pathname: `filosofi/bergson` }} className=' bg-amber-100 p-2 rounded-md border-[1px] border-slate-200'>
                                <div className='border-2 border-slate-400 rounded-lg z-30 overflow-hidden'>
                                    <Image alt='schopenhauer' src={bergson} className=' hover:scale-105 duration-300   w-[35vw] md:w-[15vw]' />
                                </div>
                                <h1 className='h-8 font-bold text-xs md:text-lg text-center italic'>Henri Bergson</h1>

                            </Link>
                        </div>
                    </section>
                    <section className='w-[99vw] md:w-[79vw] px-4 md:px-20 py-4 md:py-8 my-28 overflow-x-hidden max-w-none'>
                        <h1 className={`  font-anton uppercase  font-base   text-2xl  md:text-4xl border-b-2 border-slate-600 pb-4`}>I più Grandi Esponenti dell&apos;Esistenzialismo</h1>

                        <div className='  flex overflow-hidden items-center md:justify-start justify-center gap-4 md:gap-8 mt-16 flex-wrap '>
                            <Link href={{ pathname: `filosofi/kierkegaard` }} className=' bg-amber-100 p-2 rounded-md border-[1px] border-slate-200'>
                                <div className='border-2 border-slate-400 rounded-lg z-30 overflow-hidden'>
                                    <Image alt='schopenhauer' src={kierkegaard} className=' hover:scale-105 duration-300   w-[35vw] md:w-[15vw]' />
                                </div>
                                <h1 className='h-8 font-bold text-xs md:text-lg text-center italic max-w-[35vw] md:max-w-[15vw]'>Søren <br className=' flex md:hidden' /> Aabye Kierkegaard</h1>

                            </Link>
                            <Link href={{ pathname: `filosofi/nietzsche` }} className=' bg-amber-100 p-2 rounded-md border-[1px] border-slate-200'>
                                <div className='border-2 border-slate-400 rounded-lg z-30 overflow-hidden max-w-[35vw] md:max-w-[15vw]'>
                                    <Image alt='schopenhauer' src={nietzsche} className=' hover:scale-105 duration-300   w-[35vw] md:w-[15vw]' />
                                </div>
                                <h1 className='h-8 font-bold text-xs md:text-lg text-center italic max-w-[35vw] md:max-w-[15vw]     '>Friedrich Wilhelm Nietzsche</h1>

                            </Link>
                        </div>
                    </section>
                    <footer className='flex justify-center mt-24'>
                        <section className=' border-t-2 border-slate-400 w-[85%]'>
                        <h1 className='font-poppins mt-20 md:text-2xl text-lg font-bold'>Tech stack used for the project:</h1> 
                            <div className='mt-8 flex flex-wrap items-center gap-4'>
                                <div className='flex flex-col items-center justify-center glass md:px-4 px-2 md:py-2 py-1 rounded-md border-[1px] border-slate-400'>
                                    <h1 className=' min-w-full font-semibold text-xs md:text-base'>SSR, Routing</h1>
                                    <div className= 'overflow-hidden bg-slate-100 w-16 md:h-24 md:w-24 h-16 p-2 rounded-full flex items-center justify-center'>
                                    <Image alt='sus' layout='intrinsic' width={80} height={80}  src={'/assets/next.png'} className='hover:scale-105 duration-300'/>     
                                    </div> 
                                    <h1 className='text-xs md:text-base font-bold'>Next.js</h1>
      
                                    </div>

                                    <div className='flex flex-col items-center justify-center glass md:px-4 px-2 md:py-2 py-1 rounded-md border-[1px] border-slate-400'>
                                    <h1 className='text-xs md:text-base min-w-full font-semibold'>Frontend & Logic</h1>
                                    <div className=' overflow-hidden gap-1 bg-slate-100 w-32 md:h-24 md:w-48 h-16 p-2 rounded-full flex items-center justify-center'>
                                    <Image alt='sus' layout='intrinsic' width={55} height={55}  src={'/assets/typescript.png'} className='hover:scale-105 duration-300'/>     
                                    <Image alt='sus' layout='intrinsic' width={55} height={55}  src={'/assets/react.png'} className='hover:scale-105 duration-300'/>     

                                    </div> 
                                    <h1 className='text-xs md:text-base font-bold'>TypeScript-React (tsx)</h1>
      
                                    </div>

                                    <div className='flex flex-col items-center justify-center glass md:px-4 px-2 md:py-2 py-1 rounded-md border-[1px] border-slate-400'>
                                    <h1 className='text-xs md:text-base min-w-full font-semibold'>Text formatter</h1>
                                    <div className=' overflow-hidden bg-slate-100 w-16 md:h-24 md:w-24 h-16 p-2 rounded-full flex items-center justify-center'>
                                    <Image alt='sus' layout='intrinsic' width={70} height={70}  src={'/assets/mdx.png'} className='hover:scale-105 duration-300'/>     
                                    </div> 
                                    <h1 className='text-xs md:text-base font-bold'>MDX</h1>
      
                                    </div>

                                    <div className='flex flex-col items-center justify-center glass md:px-4 px-2 md:py-2 py-1 rounded-md border-[1px] border-slate-400'>
                                    <h1 className='text-xs md:text-base min-w-full font-semibold'>Styles</h1>
                                    <div className=' overflow-hidden gap-1 bg-slate-100 w-32 md:h-24 md:w-48 h-16 p-2 rounded-full flex items-center justify-center'>
                                    <Image alt='sus' layout='intrinsic' width={55} height={55}  src={'/assets/tailwind.png'} className='hover:scale-105 duration-300'/>     
                                    <Image alt='sus' layout='intrinsic' width={55} height={55}  src={'/assets/sass.png'} className='hover:scale-105 duration-300'/>     

                                    </div> 
                                    <h1 className='text-xs md:text-base font-bold'>Tailwindcss & Scss</h1>
      
                                    </div>

                                    <div className='flex flex-col items-center justify-center glass md:px-4 px-2 md:py-2 py-1 rounded-md border-[1px] border-slate-400'>
                                    <h1 className='text-xs md:text-base min-w-full font-semibold'>Deployment</h1>
                                    <div className=' overflow-hidden bg-slate-100 w-16 md:h-24 md:w-24 h-16 p-2 rounded-full flex items-center justify-center'>
                                    <Image alt='sus' layout='intrinsic' width={70} height={70}  src={'/assets/vercel.png'} className='hover:scale-105 duration-300'/>     
                                    </div> 
                                    <h1 className='text-xs md:text-base font-bold'>Vercel</h1>
      
                                    </div>

                                    <div className='flex flex-col items-center justify-center glass md:px-4 px-2 md:py-2 py-1 rounded-md border-[1px] border-slate-400'>
                                    <h1 className='text-xs md:text-base min-w-full font-semibold'>Authentication</h1>
                                    <div className=' overflow-hidden bg-slate-100 w-16 md:h-24 md:w-24 h-16 p-2 rounded-full flex items-center justify-center'>
                                    <Image alt='sus' layout='intrinsic' width={70} height={70}  src={'/assets/clerk.png'} className='hover:scale-105 duration-300'/>     
                                    </div> 
                                    <h1 className='text-xs md:text-base font-bold'>Clerk</h1>
      
                                    </div>
                                    <div className='flex flex-col items-center justify-center glass md:px-4 px-2 md:py-2 py-1 rounded-md border-[1px] border-slate-400'>
                                    <h1 className='text-xs md:text-base min-w-full font-semibold'>Source Control</h1>
                                    <div className=' overflow-hidden bg-slate-100 w-16 md:h-24 md:w-24 h-16 p-2 rounded-full flex items-center justify-center'>
                                    <Image alt='sus' layout='intrinsic' width={70} height={70}  src={'/assets/git.png'} className='hover:scale-105 duration-300'/>     
                                    </div> 
                                    <h1 className='text-xs md:text-base font-bold'>Git</h1>
      
                                    </div>
                            </div>
                        </section>
                    </footer>
                </div>
            </>
        } />

    )
}

export default Filosofi