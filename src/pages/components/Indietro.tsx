import Link from 'next/link'
import React from 'react'
import { VscArrowSmallLeft } from 'react-icons/vsc'

type Props = {}


const Indietro = (props: Props) => {
    return (
        <>
        <Link className="button font-semibold w-full h-[5vh] rounded-lg border-2 border-slate-300 focus:outline-none" href={'/'} role="button">
  
	<span className='px-4 py-2 md:text-lg text-base'>Continua ad esplorare</span>
	<div className="icon">
		<i className="fa fa-remove"><VscArrowSmallLeft/></i>
		<i className="fa fa-check"></i>
	</div>

        </Link>
        </>
    )
}

export default Indietro