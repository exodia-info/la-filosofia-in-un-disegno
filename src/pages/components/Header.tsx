import React from 'react'
import { SignInButton, SignOutButton, useUser } from '@clerk/clerk-react'
import { useRouter } from 'next/router'
import { VscAccount } from 'react-icons/vsc'
import { exodia, exodiaviola } from '../../../public/assets'
import Image from 'next/image'
import Link from 'next/link'
import Cerca from './Boh'

const Header = () => {
    const user = useUser()
    const router = useRouter()

    return (
        <section className=' z-50    glass p-4 flex top-0 left-0 w-full h-14 sticky bg-slate-100 border-b-2 border-b-slate-400 justify-between items-center px-4'>
            <Link href='/'>
                <Image alt='logo' src={exodiaviola} className='h-10 w-auto' />
            </Link>
            <div className='flex justify-end'>
                <div className='flex-grow mx-4'>
                    <Cerca />
                </div>
                <div className='ml-2 mr-6 md:flex items-center hidden'>
                    <span className='flex w-[1px] h-[20px] bg-slate-600  align-middle'></span>
                </div>
                {user.isSignedIn ? (
                    <div className='flex items-center'>
                        <button onClick={() => router.push('/account')} className='mr-4'>
                            <VscAccount className='h-6 w-auto' />
                        </button>
                        <div className='hidden md:flex'>
                            <SignOutButton />
                        </div>
                    </div>
                ) : (
                    <SignInButton />
                )}
            </div>
        </section>
    )
}

export default Header