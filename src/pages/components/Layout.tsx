import React from 'react'

type layoutProps = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: any
}

const Layout = ({ children }: layoutProps) => {
    return (
        <section className='flex justify-center w-[100%] min-h-screen md:w-[80%] border-x-2 border-slate-400'>
            {children}
        </section>
    )
}

export default Layout