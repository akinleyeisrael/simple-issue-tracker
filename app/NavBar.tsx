import React from 'react'
import Link from 'next/link'
import { AiFillBug } from 'react-icons/ai';
import { link } from 'fs';

const NavBar = () => {
    const links = [
        {label: 'Dashboard', href: '/'},
        {label: 'Issues', href: '/issues'}
    ]
  return (
    <nav className='flex space-x-6 border-b mb-5 px-6 h-14 items-center'>
        <Link href='/'><AiFillBug/></Link>
        <ul className='flex space-x-6 '>
            {links.map(link => 
            <Link key={link.href} className='text-zinc-500 hover:text-zinc-800' href={link.href}>{link.label}</Link>)}
            <li></li>
            <li><Link href='/issues'>Issues</Link></li>
        </ul>

    </nav>
  )
}

export default NavBar