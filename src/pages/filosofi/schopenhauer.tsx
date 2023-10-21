/* eslint-disable react/no-children-prop */
import React, { useEffect, useRef } from 'react'
import Layout from '../components/Layout'
import Head from 'next/head'
import Indietro from '../components/Indietro'
import Content from '../components/Content'
// import Commento from '../components/Commento'
import SchopenhauerContent from '../descrizioni/schopenhauer.mdx'
import ImageMagnifier from '../components/ImageMagnifier'


const schopenhauer = () => {

    const referenceElement = useRef(null);
    const elementToMatchHeight = useRef(null);

    useEffect(() => {

        const referenceHeight = referenceElement.current.clientHeight;
        elementToMatchHeight.current.style.height = `${referenceHeight}px`;

    }, []);

    const schopenhauerUrl = '../assets/schopenhauerbeffa.jpg'

    return (
        <Layout children={
            <>
                <Head>
                    <title>Il Pensiero di Schopenhauer in un Disegno</title>
                    <meta name="description" content="Il Pensiero di Schopenhauer in un Disegno " />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main className='flex items-center justify-center my-20  gap-8'>
                    <div ref={referenceElement} className='flex flex-col w-[45%] gap-3'>
                        <div className=''>
                            <ImageMagnifier src={schopenhauerUrl} width='100%' />
                        </div>
                        <div className=''>
                            <Indietro />
                        </div>
                    </div>
                    <div className='flex flex-col w-[45%] gap-3'>
                        <div ref={elementToMatchHeight} className='rounded-lg overflow-x-hidden font-poppins bg-zinc-100 border-2 border-slate-400 p-6 overflow-y-scroll'>
                            <Content content={<SchopenhauerContent />} />
                        </div>
                        {/* <div className='border-red-600 border-2'>
                            <Commento />
                        </div> */}
                    </div>
                </main>
            </>
        } />
    )
}

export default schopenhauer