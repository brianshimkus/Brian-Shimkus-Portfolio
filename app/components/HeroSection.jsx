'use client'

import Image from 'next/image'
import { btnCta, btnOutline, eyebrowPill, gradientText } from '../utils'

export default function HeroSection() {
	return (
		<section id='hero' className='scroll-mt-16'>
			<div className='grid grid-cols-1 lg:grid-cols-12'>
				<div className='hidden lg:block col-span-5 w-full place-self-center'>
					<div className='relative lg:w-[400px] lg:h-[400px] lg:mx-auto'>
						<Image
							className='rounded-3xl object-cover'
							src='/images/hero-image.jpg'
							alt='hero image'
							fill
							sizes='400px'
						/>
					</div>
				</div>
				<div className='col-span-7 place-self-center text-left'>
					<span className={eyebrowPill}>Open to Work</span>
					<h1 className='mt-4 mb-4 text-4xl sm:text-5xl lg:text-6xl font-semibold uppercase tracking-tight leading-[1.05] font-display'>
						<span className='text-foreground/60'>{`Hello, I'm`}</span>{' '}
						<span className={gradientText}>Brian</span>
					</h1>
					<div className='lg:hidden relative w-full aspect-square mb-6 rounded-3xl overflow-hidden'>
						<Image
							className='object-cover'
							src='/images/hero-image.jpg'
							alt='hero image'
							fill
							sizes='100vw'
						/>
					</div>
					<p className='text-lg sm:text-lg mb-2 lg:text-2xl text-foreground'>
						{`AI Solutions Engineer with 12 years in software engineering, now
						focused on LLM workflows, automation, and integrations.`}
					</p>
					<p className='text-base sm:text-base mb-6 lg:text-lg text-muted-foreground'>
						{`Seeking Solutions Engineer, Forward Deployed Engineer, or
						AI/Automation Engineer roles (senior front-end too). Based in
						Chicago, open to remote, available immediately including contract
						work.`}
					</p>
					<div className='flex flex-row flex-wrap items-start gap-3 sm:gap-4'>
						<a href='mailto:brian@brianshimkus.com' className={btnCta}>
							Contact Me
						</a>
						<a
							href='Resume-BrianShimkus-SolutionsEngineer.pdf'
							target='_blank'
							rel='noopener noreferrer'
							className={btnOutline}>
							View Resume
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
