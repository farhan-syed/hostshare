'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

function search() {
  alert('clicked search')
}

export default function Navigation() {
  const [showMobile, setShowMobile] = useState('hidden')

  const mNavDidClick = () => {
    if (showMobile == '') {
      setShowMobile('hidden')
    } else {
      setShowMobile('')
    }
  }

  return (
    <nav className='bg-white'>
      <div className='mx-4'>
        <div className='flex flex-row justify-between'>
          <div>
            {/* logo here */}
            <Link href='/'>
              <Image
                src='/hostshare_blue.png'
                width={150}
                height={50}
                alt='logo'
                className='m-4'
              />
            </Link>
          </div>
          {/* search */}
          <div className='hidden md:flex items-center'>
            <button className='py-2 px-2 font-medium text-black rounded hover:bg-[#329a9a] hover:text-white transition duration-300'>
              Search
            </button>
          </div>
          {/* secondary */}
          <div className='hidden md:flex items-center'>
            <a
              href=''
              className='py-2 px-2 font-medium text-gray-500 rounded hover:bg-[#329a9a] hover:text-white transition duration-300'
            >
              hostshare your home
            </a>
            <button className='py-2 px-2 font-medium text-black rounded hover:bg-[#329a9a] hover:text-white transition duration-300'>
              Profile
            </button>
          </div>

          {/* mobile */}
          <div className='md:hidden flex items-center'>
            <button
              className='outline-none mobile-menu-button'
              onClick={mNavDidClick}
            >
              <svg
                className=' w-6 h-6'
                x-show='!showMenu'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path d='M4 6h16M4 12h16M4 18h16'></path>
              </svg>
            </button>
          </div>
        </div>

        <div className={`${showMobile} mobile-menu md:hidden`}>
          <ul className=''>
            <li className='active'>
              <a
                href='index.html'
                className='block text-sm px-2 py-4 text-black font-semibold'
              >
                Search
              </a>
            </li>
            <li>
              <a
                href='#contact'
                className='block text-sm px-2 py-4 text-black transition duration-300'
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
