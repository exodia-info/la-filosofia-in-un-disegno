import Link from 'next/link'
import React from 'react'

type Props = {}

const Indietro = (props: Props) => {
    return (
        <div className='flex'>
            <button className=' font-semibold w-full px-4 py-2 rounded-lg border-2 border-slate-300 focus:outline-none bg-violet-400'>
                <Link href={'/'}>Torna </Link>
            </button>
        </div>
    )
}

export default Indietro