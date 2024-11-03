import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'
import { MenuIcon } from 'lucide-react'

const Navbar = async () => {
  return (
    <header className="fixed right-0 left-0 top-0 py-4 px-4 bg-black/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-900 justify-between">
        <aside className="flex items-center gap-[2px]">
          <Link href='/' className='flex items-center'>
            {/* <Image src="./" alt='#'></Image> */}
            <Image
                src="/autoLogo.png"
                width={30}
                height={30}
                alt="fuzzie logo"
                className="shadow-sm"
            />
            <h1 className='text-xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold'>autoLand</h1>
          </Link>
            {/* <p className="text-3xl font-bold">Fu</p>
            <p className="text-3xl font-bold">zie</p> */}
        </aside>
        <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
            <ul className="flex items-center gap-4 list-none">
                <li>
                    <Link href="#">Products</Link>
                </li>
                <li>
                    <Link href="#">Pricing</Link>
                </li>
                <li>
                    <Link href="#">Clients</Link>
                </li>
                <li>
                    <Link href="#">About</Link>
                </li>
                <li>
                    <Link href="#">Documentation</Link>
                </li>
                {/* <li>
                    <Link href="#">Enterprise</Link>
                </li> */}
                </ul>
        </nav>
        <aside className="flex items-center gap-4">
          <Link
            href="/dashboard"
          //   className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-slate-400 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              {/*WIP:wire up user */}
              {true ? 'Dashboard' : 'Get Started'}
            </button>
          </Link>
            {/*WIP:wire up user */}
          <UserButton/>
          <MenuIcon className='md:hidden'/>
        </aside>
    </header>
  )
}

export default Navbar
