import Link from 'next/link'
import React from 'react'

type Props = {}

// font-semibold w-full px-4 py-2 rounded-lg border-2 border-slate-300 focus:outline-none bg-violet-400

const Indietro = (props: Props) => {
    return (
        <Link href={'/'}>
  <span>remove</span>
  <div className="icon">
    <i className="fa fa-remove"></i>
    <i className="fa fa-check"></i>
  </div>
        </Link>
    )
}

export default Indietro