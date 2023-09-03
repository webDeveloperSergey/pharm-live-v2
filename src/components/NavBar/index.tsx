'use client'

import Image from 'next/image'
import type { FC } from 'react'

const NavBar: FC = () => {
  return (
    <div className='bg-white w-[276px]'>
      <div className='flex justify-center py-8 border-b-2 border-gray'>
        <Image alt='Pharm Live' src='/img/logo.svg' height={30} width={163} />
      </div>

      <nav className=''>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
        <div>test</div>
      </nav>
    </div>
  )
}

export default NavBar
