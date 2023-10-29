/* eslint-disable react/no-children-prop */
import React, { useEffect, useRef } from 'react'
import Layout from '../components/Layout'
import Head from 'next/head'
import Indietro from '../components/Indietro'
import Content from '../components/Content'
// import Commento from '../components/Commento'
import FeuerbachContent from '../descrizioni/feuerbach.mdx'
import ImageMagnifier from '../components/ImageMagnifier'


const feuerbach = () => {

    const feuerbachUrl = '../assets/feuerbachbeffa.jpg'

    return (
        <Layout children={
            <>
                <Head>
                    <title>Il Pensiero di Feuerbach in un Disegno</title>
                    <meta name="description" content="Il Pensiero di Feuerbach in un Disegno " />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <main >
                    <div className='flex md:flex-row flex-col items-center justify-center my-20  gap-8 md:h-[106vh]'>
                    <div  className='flex flex-col md:w-[45%] w-[90%]  md:h-[100%] gap-3'>
                        <div className=''>
                            <ImageMagnifier src={feuerbachUrl} width='100%' />
                        </div>
                        <div className='hidden md:flex flex-col relative'>
                            <Indietro />
                        </div>
                    </div>
                    <div className='flex flex-col md:w-[45%] w-[90%] md:max-h-[100%] max-h-[75vh] gap-3'>
                        <div  className=' rounded-lg overflow-x-hidden bg-zinc-100 border-2 border-slate-400 p-6 overflow-y-scroll'>
                            <Content content={<FeuerbachContent />} />
                        </div>
                        {/* <div className='border-red-600 border-2'>
                            <Commento />
                        </div> */}
                        <div className='flex md:hidden flex-col relative'>
                            <Indietro />
                        </div>
                    </div>
                    </div>
                </main>
            </>
        } />
    )
}

export default feuerbach