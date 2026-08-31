import Image from 'next/image'
import SectionTitle from './SectionTitle'
import Reveal from './Reveal'

export default function AboutSection() {
	return (
		<section id='about' className='scroll-mt-16'>
			<SectionTitle eyebrow='Who I Am' title='About Me' />
			<div className='lg:grid lg:grid-cols-2 gap-8 items-center xl:gap-16'>
				<Reveal className='leading-7 text-muted-foreground'>
					<p className='mb-6 text-pretty'>
						{`It all started back in 2006 as a junior in high school when I dove
						into my fascination with websites and finally taught myself how to
						build one. While I initially participated in the world of web
						development for fun as a hobby, I quickly realized the rising demand
						for web development services and my freelance business was born.`}
					</p>
					<p className='mb-6 text-pretty'>
						{`I built myself a portfolio website, had business cards made, and
						went door to door to all of the businesses in the neighborhood,
						offering to build them a website or enhance their existing one.
						Before I knew it, my summer break turned into many late nights
						working on websites for all of my new clients and I couldn't have
						been happier.`}
					</p>
					<p className='mb-6 text-pretty'>
						{`Fast forward to my college graduation in 2013, I landed my first
						profesional developer role for a startup. This experience was like
						getting a master's degree as I got to wear a lot of hats and work
						with all kinds of different languages, tools, and technologies
						related to the web development world. I also got to work alongside
						senior level developers and learn about best practices as it
						pertains to this industry.`}
					</p>
					<p className='mb-6 text-pretty'>
						{`In the years since, I've had the pleasure of working across many
						different industries, building websites for professional sports
						teams, medical apps to assist doctors with their patients,
						onboarding tools for traders within the finance space, and much more.`}
					</p>
					<p className='mb-6 text-pretty'>{`Seven months ago I set out to build something different: Insolla, an independent AI practice where I run the full technical sales motion myself, discovery calls, solution scoping, tailored demos, and proof-of-concept builds, including a source-grounded RAG assistant over live Salesforce CRM data. It's been the best crash course in applied AI I could have asked for, and it's shown me where I want to go next: a Forward Deployed Engineer role that sits between customers and working systems.`}</p>
				</Reveal>
				<Reveal delay={0.15} className='relative hidden lg:block w-full aspect-square rounded-3xl overflow-hidden'>
					<Image
						className='object-cover'
						src='/images/desk.jpg'
						alt='Brian Shimkus working at his desk'
						fill
						sizes='(min-width: 1024px) 50vw, 100vw'
					/>
				</Reveal>
			</div>
		</section>
	)
}
