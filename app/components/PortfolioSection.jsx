import Image from 'next/image'
import SectionTitle from './SectionTitle'
import {
	pinkGradientBackground,
	portfolioKeyword,
	portfolioLink,
	tealGradient,
} from '../utils'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const projects = [
	{
		title: 'Shimfin',
		thumbnail: '/images/shimfin.jpg',
		description: 'A real estate app',
		appLink: 'https://shimfin.vercel.app/',
		githubLink: 'https://github.com/brianshimkus/Shimfin',
		keywords: ['React', 'Firebase'],
	},
	{
		title: 'COVID 19 Tracker',
		thumbnail: '/images/covid-tracker.jpg',
		description: 'COVID-19 tracker app built in React',
		appLink: 'https://covid-19-tracker-brian.netlify.app/',
		githubLink: 'https://github.com/brianshimkus/covid-19-tracker',
		keywords: ['React', 'Material UI', 'Flexbox'],
	},
	{
		title: 'Github Finder',
		thumbnail: '/images/github-finder.jpg',
		description: 'Search GitHub users and see user data',
		appLink: 'https://github-finder-brian.vercel.app/',
		githubLink: 'https://github.com/brianshimkus/Github-Finder',
		keywords: ['React', 'Node.js'],
	},
]

export default function PortfolioSection() {
	return (
		<section id='#portfolio'>
			<SectionTitle title='Portfolio' />
			<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8'>
				{projects.map((project, index) => (
					<div
						key={index}
						className='bg-zinc-800 border-2 border-zinc-700 rounded-md  transition ease-in-out duration-300 h-full px-4 py-6'>
						<div className='flex mb-4'>
							<div className='flex flex-grow'></div>
							<a
								href={project.appLink}
								target='_blank'
								className={`${portfolioLink} ${pinkGradientBackground} flex`}>
								<span className='mr-1'>App</span>{' '}
								<FaExternalLinkAlt className='text-xs pt-1' />
							</a>
							<a
								href={project.githubLink}
								target='_blank'
								className={`${portfolioLink} ${pinkGradientBackground} flex`}>
								<span className='mr-1'>Code</span>{' '}
								<FaExternalLinkAlt className='text-xs pt-1' />
							</a>
						</div>
						<h2
							className={`${tealGradient} text-2xl font-bold tracking-wider flex-grow mt-6 mb-4`}>
							{project.title}
						</h2>
						<Image
							className='rounded-md'
							src={project.thumbnail}
							alt={project.title}
							width={600}
							height={400}
						/>
						<div className='min-h-18'>
							<p className='mt-4 mb-8'>{project.description}</p>
						</div>
						<ul className='flex flex-wrap'>
							{project.keywords.map((keyword, index) => (
								<li key={index} className={`${portfolioKeyword} mb-2`}>
									{keyword}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	)
}
