import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import { useUser } from '@clerk/clerk-react'

type Props = {}

const page = (props: Props) => {

  // const user = useUser()

  const [frase, setFrase] = useState<string | null | undefined>(null);
  const [filosofo, setFilosofo] = useState<string | null | undefined>(null);


  useEffect(() => {
    let random = Math.floor(Math.random() * quotes.length)
    setFrase(quotes[random]?.frase)
    setFilosofo(quotes[random]?.filosofo)
  }, [])

  const quotes = [
    {
      frase: `Il lavoro allontana da noi tre grandi mali: la noia, il vizio, il bisogno.`,
      filosofo: `Voltaire`
    },
    {
      frase: `Scegli un lavoro che ami, e non dovrai lavorare neanche un giorno della tua vita.`,
      filosofo: `Confucio`
    },    {
      frase: `Il lavoro liberato dalla necessità diventa gioco.`,
      filosofo: `Friedrich Nietzsche`
    },  {
      frase: `Chi lavora con le sue mani è un lavoratore. Chi lavora con le sue mani e la sua testa è un artigiano. Ma chi lavora con le mani e la sua testa ed il suo cuore è un artista.`,
      filosofo: `San Francesco d'Assisi`
    },
    {
      frase: `La pietra che gli edificatori hanno rifiutata è quella che è diventata pietra angolare.`,
      filosofo: `Gesù`
    }
  ]

  return (
    <Layout children={
      <>
          <Head>
              <title>Area personale</title>
              <meta name="description" content={`Gestione account personale`} />
              <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className='md:w-[80vw] w-[100vw] flex justify-start'>
            <div className='flex flex-col'>
            {/* <h1 className={` px-10 font-semibold text-xl  md:text-2xl mt-24  pb-4 text-slate-900`}>Area personale di {user.user?.username}</h1> */}
            <div className='flex justify-center items-center  md:w-[80vw] w-[100vw] h-[100vh]'>
              <div className='flex md:w-96 w-52 flex-col text-center '>
                <h1 className='font-semibold text-lg'>Lavori in corso! <br /> Questa pagina é ancora in costruzione...</h1>
              <Image alt='sus' layout='intrinsic' width={400} height={400}  src={'/assets/socrate.png'}/>
              <h1 className='italic'>{`"${frase}"`}</h1>
              <h1 className='font-semibold'>{`${filosofo}`}</h1>
              </div>
            </div>
            </div>
          </main>
      </>
  } />
  )
}

export default page