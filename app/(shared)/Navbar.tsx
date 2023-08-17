import Link from 'next/link'
import React from 'react'
import ModeToggle from './ModeToggle'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <header className='w-full dark:bg-primary-700 bg-primary-100 drop-shadow-sm'>
      <nav className='flex justify-between w-3/4 mx-auto p-3'>
        <Link href={'/'} className='pt-2 font-bold'>Where in the World?</Link>
        <ModeToggle />
      </nav>
    </header>
  )
}

export default Navbar