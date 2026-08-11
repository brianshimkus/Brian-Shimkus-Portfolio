'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { track } from '@vercel/analytics'
import { FaBolt } from 'react-icons/fa'
import { btnCta, btnOutline, eyebrowPill, gradientText } from '../utils'

const container = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const item = {
	hidden: { opacity: 0, y: 14 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function HeroSection() {
	return (
		<section id='hero' className='scroll-mt-16'>
			<div className='grid grid-cols-1 lg:grid-cols-12 lg:gap-8 xl:gap-12'>
				<motion.div
					initial={{ opacity: 0, scale: 0.96 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
					className='hidden lg:block col-span-5 w-full place-self-center'>
					<div className='relative w-full max-w-[400px] aspect-square lg:mx-auto'>
						<Image
							className='rounded-3xl object-cover'
							src='/images/hero-image.jpg'
							alt='hero image'
							fill
							priority
							sizes='(min-width: 1024px) 33vw, 100vw'
						/>
					</div>
				</motion.div>
				<motion.div
					initial='hidden'
					animate='visible'
					variants={container}
					className='col-span-7 min-w-0 place-self-center text-left'>
					<motion.span variants={item} className={eyebrowPill}>
						Open to Work
					</motion.span>
					<motion.h1
						variants={item}
						className='mt-4 mb-4 text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-semibold uppercase tracking-tight leading-[1.05] font-display'>
						<span className='text-foreground/60'>{`Hello, I'm`}</span>{' '}
						<span className={gradientText}>Brian</span>
					</motion.h1>
					<motion.div
						variants={item}
						className='lg:hidden relative w-full aspect-square mb-6 rounded-3xl overflow-hidden'>
						<Image
							className='object-cover'
							src='/images/hero-image.jpg'
							alt='hero image'
							fill
							priority
							sizes='(max-width: 1024px) calc(100vw - 96px), 33vw'
						/>
					</motion.div>
					<motion.p
						variants={item}
						className='text-lg sm:text-lg mb-2 lg:text-2xl text-foreground text-pretty'>
						{`Pre-sales Solutions Engineer specializing in AI integration,
						running the full technical sales motion at Insolla: discovery
						calls, solution scoping, tailored demos, and proof-of-concept
						builds.`}
					</motion.p>
					<motion.p
						variants={item}
						className='text-base sm:text-base mb-4 lg:text-lg text-muted-foreground'>
						{`12 years shipping customer-facing solutions inside regulated
						financial organizations, including OCC, TransUnion, and Marex.
						Seeking Solutions Engineer, Forward Deployed Engineer, or
						AI/Automation Engineer roles. Based in Chicago, open to remote,
						available immediately including contract work.`}
					</motion.p>
					<motion.div
						variants={item}
						className='inline-flex items-center gap-2 mb-6 rounded-full border border-brand/20 bg-brand/5 px-4 py-2 text-sm text-foreground'>
						<FaBolt className='text-brand-text text-xs shrink-0' />
						<span>
							<strong className='text-brand-text font-semibold'>Recent win:</strong>{' '}
							cut a client&apos;s social media workflow from 8 hours a week to
							10 minutes through automation
						</span>
					</motion.div>
					<motion.div variants={item} className='flex flex-row flex-wrap items-start gap-3 sm:gap-4'>
						<a
							href='mailto:brian@brianshimkus.com'
							onClick={() => track('Contact Click', { location: 'hero' })}
							className={btnCta}>
							Contact Me
						</a>
						<a
							href='Resume-BrianShimkus-SolutionsEngineer.pdf'
							target='_blank'
							rel='noopener noreferrer'
							onClick={() => track('Resume Click', { location: 'hero' })}
							className={btnOutline}>
							View Resume
						</a>
					</motion.div>
				</motion.div>
			</div>
		</section>
	)
}
