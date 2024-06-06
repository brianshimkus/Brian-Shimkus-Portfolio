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
		description: 'BJJ blue belt at Renzo Gracie Academy',
	},
	{
		title: '4-time Softball Champion',
		thumbnail: '/images/softball.jpg',
		description: 'Member of the Duck Boys',
	},
	{
		title: 'Die-Hard Cubs Fan',
		thumbnail: '/images/cubs.jpg',
		description: 'Former season ticket holder',
	},
]

export default function FunFactsSection() {
	return (
		<section id='#funfacts'>
			<SectionTitle title='Fun Facts' />
			<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8'>
				{funFacts.map((funFact, index) => (
					<div
						key={index}
						className='bg-zinc-800 border-2 border-zinc-700 rounded-md  transition ease-in-out duration-300 h-full px-4 py-6'>
						<Image
							src={funFact.thumbnail}
							alt={funFact.title}
							className='rounded-md mb-4'
							width={400}
							height={400}
						/>
						<h3 className='text-xl font-bold mb-2'>{funFact.title}</h3>
						<p className='text-zinc-400'>{funFact.description}</p>
					</div>
				))}
			</div>
		</section>
	)
}
