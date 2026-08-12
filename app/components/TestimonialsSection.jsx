import SectionTitle from './SectionTitle'
import Reveal from './Reveal'
import { FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
	{
		quote:
			"Brian and I worked together on the User Experience team, where he was brought in to assist with front end development of our UIUX projects. He did a great job of quickly jumping in to the mix to work on several of our internal projects, bringing a willingness to learn and a positive attitude to every project. He is also very eager to suggest new approaches to projects and brings an innovative, forward-thinking mindset. He is a talented, energetic and very enthusiastic developer and would be a great asset to any team.",
		name: 'Mark Coleman',
		context: 'User Experience Team Colleague',
	},
	{
		quote:
			'Brian is a hard working & focused user interface and user experience developer. In our time working together at R1, Brian was consistently dedicated and focused on complex projects, often times putting in significant extra work to help the team meet deadlines. He worked equally well with local teams in the office as well as teams based in India. Good teammate that will help you bring your UI/UX to the next level.',
		name: 'Shane Colley',
		context: 'Colleague, R1 RCM',
	},
]

export default function TestimonialsSection() {
	return (
		<section id='testimonials' className='scroll-mt-16'>
			<SectionTitle eyebrow='What People Say' title='Testimonials' />
			<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
				{testimonials.map((t, index) => (
					<Reveal key={t.name} delay={(index % 3) * 0.08} className='h-full'>
						<div className='card p-7 flex flex-col h-full'>
							<FaQuoteLeft className='text-brand-text/40 text-2xl mb-4' aria-hidden />
							<p className='text-sm text-muted-foreground leading-relaxed flex-1 text-pretty'>
								{t.quote}
							</p>
							<div className='mt-6 pt-5 border-t border-overlay/5'>
								<p className='text-sm font-semibold text-foreground font-display'>{t.name}</p>
								<p className='text-xs text-muted-foreground'>{t.context}</p>
							</div>
						</div>
					</Reveal>
				))}
			</div>
			<p className='mt-6 text-xs text-muted-foreground/70 max-w-2xl italic'>
				From LinkedIn, earlier in my front-end engineering career.
			</p>
		</section>
	)
}
