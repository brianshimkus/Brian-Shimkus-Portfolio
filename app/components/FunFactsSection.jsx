import Image from 'next/image'
import SectionTitle from './SectionTitle'

const funFacts = [
	{
		title: 'Guitar Player and Singer',
		thumbnail: '/images/guitar.jpg',
		description: 'Performing live since 2014',
	},
	{
		title: 'Mixed Martial Artist',
		thumbnail: '/images/bjj-blue.jpg',
		description: 'Boxer and blue belt in jiu-jitsu',
	},
	{
		title: '4-time Softball Champion',
		thumbnail: '/images/softball.jpg',
		description: 'Member of the Duck Boys',
	},
	{
		title: 'Cat Dad to Cayenne',
		thumbnail: '/images/cayenne.jpg',
		description: 'Adopted March 28th, 2025',
	},
]

export default function FunFactsSection() {
	return (
		<section id='funfacts' className='scroll-mt-16'>
			<SectionTitle eyebrow='Off the Clock' title='Fun Facts' />
			<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6'>
				{funFacts.map((funFact, index) => (
					<div key={index} className='card p-6'>
						<Image
							src={funFact.thumbnail}
							alt={funFact.title}
							className='rounded-lg mb-4 object-cover'
							width={400}
							height={400}
						/>
						<h3 className='text-lg font-semibold tracking-tight mb-2 font-display'>
							{funFact.title}
						</h3>
						<p className='text-sm text-muted-foreground'>
							{funFact.description}
						</p>
					</div>
				))}
			</div>
		</section>
	)
}
