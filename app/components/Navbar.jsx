'use client'

import Link from 'next/link'
import NavLink from './NavLink'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay'
import Image from 'next/image'
import SocialLinks from './SocialLinks'

const navLinks = [
	// { title: 'About', path: '#about' },
	// { title: 'Portfolio', path: '#portfolio' },
	// { title: 'Fun Facts', path: '#funfacts' },
]

export default function Navbar() {
	const [navbarOpen, setNavbarOpen] = useState(false)
	return (
		<nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-95'>
			<div className='flex flex-wrap items-center justify-between mx-auto p-4 container'>
				<Link
					href='/'
					className='text-2xl md:text-5xl text-white font-semibold'>
					<Image
						src='/images/logo.png'
						alt='hero image'
						width={40}
						height={40}
					/>
				</Link>
				<div className='mobile-menu block md:hidden'>
					{!navbarOpen ? (
						<button
							onClick={() => setNavbarOpen(true)}
							className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
							<Bars3Icon className='h-5 w-5' />
						</button>
					) : (
						<button
							onClick={() => setNavbarOpen(false)}
							className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'>
							<XMarkIcon className='h-5 w-5' />
						</button>
					)}
				</div>
				<div className='menu hidden md:block md:w-auto' id='navbar'>
					<ul className='flex p-4 md:p-0 md:flex-row md:space-x-6'>
						{navLinks.map((link, index) => (
							<li key={index}>
								<NavLink href={link.path} title={link.title} />
							</li>
						))}
						<SocialLinks
							styles={`h-6 w-6 text-rose-400 hover:text-cyan-400 cursor-pointer`}
						/>
					</ul>
				</div>
			</div>
			{navbarOpen ? <MenuOverlay links={navLinks} /> : null}
		</nav>
	)
}
