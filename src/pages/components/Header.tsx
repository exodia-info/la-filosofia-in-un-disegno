import React from 'react'
import { SignInButton, SignOutButton, SignedOut, useUser } from '@clerk/clerk-react'
import { useRouter } from 'next/router'
import { VscAccount } from 'react-icons/vsc'
import { exodia, exodiaviola } from '../../../public/assets'
import Image from 'next/image'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { UserButton } from '@clerk/nextjs'

const Header = () => {
     const user = useUser()
    const router = useRouter()

    return (
        <section className=' z-50 glass p-4 flex top-0 left-0 w-full h-14 sticky bg-slate-100 border-b-2 border-b-slate-400 justify-between items-center px-4'>
            <Link href='/'>
                <Image alt='logo' src={exodiaviola} className='md:h-10 h-8 w-auto' />
            </Link>
            <div className='flex justify-end'>
                <div className='flex-grow mx-0'>
                <div className='relative'>
                <input onClick={() => {toast.error('oops... a quanto pare questa funzione non é ancora stata sviluppata! :((', {
                    className: (' font-semibold mt-12 md:mt-0 text-sm md:text-base')})}}
                 type='text' placeholder='Cerca una parola chiave' 
                 className=' w-full md:px-4 px-[4px] md:py-2 py-2 text-xs md:text-base rounded-lg border border-slate-300 focus:outline-none focus:border-violet-500' />
            </div>
                </div>
                {/* <div className='flex items-center'>
                            <Link className="md:mr-4 mr-0" href={`/account/area-personale`} role="button">
                            <VscAccount className='h-6 w-auto text-slate-800 ml-2 md:ml-4' />
                            Profilo
                            </Link>
                        </div> */}
                {/* <div className='ml-2 mr-6 md:flex items-center hidden'>
                    <span className='flex w-[1px] h-[20px] bg-slate-600  align-middle'></span>
                </div> */}
                {/* <SignedIn>
                    <div className='flex items-center'>
                            <Link className="md:mr-4 mr-0" href={`/account/${user.user?.username}`} role="button">
                            <VscAccount className='h-6 w-auto text-slate-800' />
                            </Link>
                        <div className='hidden md:flex font-semibold text-slate-800'>
                            <SignOutButton/>
                        </div>
                    </div>
                </SignedIn>
                <SignedOut>
                    <div className='font-semibold'>
                    <SignInButton />
                    </div>
                    </SignedOut> */}
                              <>
                              <div className='flex items-center'>
                                {!user.user && (
                                    <>
                                                                  <Link
                                                                  href='sign-in'
                                                                  className='animato text-slate-800 hover:text-slate-500 md:mr-4 mr-0 ml-2 md:ml-4 md:text-base text-xs font-semibold'
                                                                >
                                                                  Sign In
                                                                </Link>
                                                                <Link
                                                                  href='sign-up'
                                                                  className='animato text-slate-800 hover:text-slate-500 md:mr-4 mr-0 ml-2 md:text-base text-xs font-semibold'
                                                                >
                                                                  Sign Up
                                                                </Link>
                                                                </>
                                )}
                                <div className="md:ml-4 ml-2">
                                    <UserButton afterSignOutUrl='/'/>
                                </div>
                              </div>
          </>

            </div>
        </section>
    )
}

export default Header