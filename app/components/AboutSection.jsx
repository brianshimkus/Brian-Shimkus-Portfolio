import Image from 'next/image'
import SectionTitle from './SectionTitle'

export default function AboutSection() {
	return (
		<section id='#about'>
			<div className='lg:grid lg:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16'>
				<div className='leading-7'>
					<SectionTitle title='About Me' />
					<p className='mb-6'>
						{`It all started back in 2006 as a junior in high school when I dove
						into my fascination with websites and finally taught myself how to
						build one. While I initially participated in the world of web
						development for fun as a hobby, I quickly realized the rising demand
						for web development services and my freelance business was born.`}
					</p>
					<p className='mb-6'>
						{`I built myself a portfolio website, had business cards made, and
						went door to door to all of the businesses in the neighborhood,
						offering to build them a website or enhance their existing one.
						Before I knew it, my summer break turned into many late nights
						working on websites for all of my new clients and I couldn't have
						been happier.`}
					</p>
					<p className='mb-6'>
						{`Fast forward to my college graduation in 2013, I landed my first
						profesional developer role for a startup. This experience was like
						getting a master's degree as I got to wear a lot of hats and work
						with all kinds of different languages, tools, and technologies
						related to the web development world. I also got to work alongside
						senior level developers and learn about best practices as it
						pertains to this industry.`}
					</p>
					<p>{`In the last 10 years I have had the pleasure of working in many different industries where I have built websites for professional sports teams, medical apps to assist doctors with their patients, onboarding tools for traders within the finance space, and much more. It's exciting working with clients and stakeholders to bring their ideas to life and I am always looking forward to the next challenge!`}</p>
				</div>
				<Image
					className='rounded-full hidden lg:block'
					src='/images/desk.jpg'
					alt='about image'
					width={500}
					height={500}
				/>
			</div>
		</section>
	)
}
