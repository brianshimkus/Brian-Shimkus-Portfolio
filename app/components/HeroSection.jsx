'use client'

import Image from 'next/image'
import { btnCta, btnOutline, eyebrowPill, gradientText } from '../utils'

export default function HeroSection() {
	return (
		<section id='hero'>
			<div className='grid grid-cols-1 lg:grid-cols-12'>
				<div className='col-span-5 place-self-center mt-4 lg:mt-0'>
					<div className='w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative mb-8 lg:mb-0'>
						<Image
							className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-3xl'
							src='/images/hero-image.jpg'
							alt='hero image'
							width={300}
							height={300}
						/>
					</div>
				</div>
				<div className='col-span-7 place-self-center text-center sm:text-left'>
					<span className={eyebrowPill}>Open to Work</span>
					<h1 className='mt-4 mb-4 text-4xl sm:text-5xl lg:text-6xl font-semibold uppercase tracking-tight leading-[1.05] font-display'>
						<span className='text-foreground/60'>{`Hello, I'm`}</span>{' '}
						<span className={gradientText}>Brian</span>
					</h1>
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
					<div className='flex flex-col sm:flex-row items-center sm:items-start gap-4'>
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
