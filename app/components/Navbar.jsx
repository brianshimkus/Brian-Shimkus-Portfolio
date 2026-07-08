'use client'

import Link from 'next/link'
import NavLink from './NavLink'
import { useEffect, useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import MenuOverlay from './MenuOverlay'
import Image from 'next/image'
import SocialLinks from './SocialLinks'
import { btnOutline } from '../utils'

const navLinks = [
	{ title: 'About', path: '#about' },
	{ title: 'Portfolio', path: '#portfolio' },
	{ title: 'Fun Facts', path: '#funfacts' },
]

export default function Navbar() {
	const [navbarOpen, setNavbarOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 8)
		onScroll()
		window.addEventListener('scroll', onScroll, { passive: true })
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	return (
		<nav
			className={`sticky top-0 z-50 transition-all duration-300 ${
				navbarOpen
					? 'border-b border-white/10 bg-background'
					: scrolled
					? 'border-b border-white/10 bg-white/[0.06] backdrop-blur-xl backdrop-saturate-150'
					: 'bg-transparent'
			}`}>
			<div className='flex flex-wrap items-center justify-between mx-auto px-4 sm:px-6 lg:px-8 h-16 container'>
				<Link href='/' className='flex items-center'>
					<Image
						src='/images/Logo-Wordmark-Personal-Site-Short.png'
						alt='Brian Shimkus'
						width={336}
						height={200}
						priority
						className='h-8 w-auto'
					/>
				</Link>
				<div className='mobile-menu block md:hidden'>
					{!navbarOpen ? (
						<button
							onClick={() => setNavbarOpen(true)}
							className='flex items-center px-3 py-2 border rounded border-white/15 text-muted-foreground hover:text-foreground hover:border-white/25 transition-colors duration-300'>
							<Bars3Icon className='h-5 w-5' />
						</button>
					) : (
						<button
							onClick={() => setNavbarOpen(false)}
							className='flex items-center px-3 py-2 border rounded border-white/15 text-muted-foreground hover:text-foreground hover:border-white/25 transition-colors duration-300'>
							<XMarkIcon className='h-5 w-5' />
						</button>
					)}
				</div>
				<div className='menu hidden md:flex md:items-center md:gap-6 md:w-auto' id='navbar'>
					<ul className='flex items-center gap-6'>
						{navLinks.map((link, index) => (
							<li key={index}>
								<NavLink href={link.path} title={link.title} />
							</li>
						))}
					</ul>
					<SocialLinks
						styles='h-5 w-5 text-muted-foreground hover:text-brand-light transition-colors duration-300'
					/>
					<a href='mailto:brian@brianshimkus.com' className={`${btnOutline} !px-4 !py-2 text-sm`}>
						Contact Me
					</a>
				</div>
			</div>
			{navbarOpen ? <MenuOverlay links={navLinks} /> : null}
		</nav>
	)
}
