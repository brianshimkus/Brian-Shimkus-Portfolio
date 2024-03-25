'use client'

import Image from 'next/image'
import {
	blackGradientButton,
	blackGradientButtonText,
	pinkGradientButton,
	tealGradient,
} from '../utils'

export default function HeroSection() {
	return (
		<section>
			<div className='grid grid-cols-1 lg:grid-cols-12'>
				<div className='col-span-5 place-self-center mt-4 lg:mt-0'>
					<div className='w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative mb-8 lg:mb-0'>
						<Image
							className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full'
							src='/images/hero-image.jpg'
							alt='hero image'
							width={300}
							height={300}
						/>
					</div>
				</div>
				<div className='col-span-7 place-self-center text-center sm:text-left'>
					<h1 className='mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
						<span className={tealGradient}>{`Hello, I'm Brian`}</span>
					</h1>
					<p className='text-xl sm:text-lg mb-6 lg:text-2xl'>
						A full-stack developer with over 10 years of experience based in
						Chicago, IL.
					</p>
					<div>
						<button className={pinkGradientButton}>
							<a href='mailto:brian@brianshimkus.com'>Contact Me</a>
						</button>
						<button className={blackGradientButton}>
							<a
								className={blackGradientButtonText}
								href='Resume-BrianShimkus.pdf'
								target='_blank'
								rel='noopener noreferrer'>
								View Resume
							</a>
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}
