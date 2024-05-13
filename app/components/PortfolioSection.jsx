import Image from 'next/image'
import SectionTitle from './SectionTitle'
import {
	pinkGradientBackground,
	portfolioKeyword,
	portfolioLink,
	tealGradient,
	tealGradientBackground,
} from '../utils'
import { FaExternalLinkAlt } from 'react-icons/fa'

const projects = [
	{
		title: 'Noted',
		thumbnail: '/images/noted.jpg',
		description: 'SaaS notes app with light and dark mode',
		appLink: 'https://noted.brianshimkus.dev/',
		githubLink: 'https://github.com/brianshimkus/Noted',
		keywords: [
			'NextJS',
			'Tailwind',
			'Shadcn UI',
			'Prisma',
			'Stripe',
			'Kinde',
			'Supabase',
		],
	},
	{
		title: 'Pro Shop',
		thumbnail: '/images/pro-shop.jpg',
		description: 'E-commerce app built with the MERN stack & Redux Toolkit',
		appLink: 'https://proshop.brianshimkus.dev/',
		githubLink: 'https://github.com/brianshimkus/Pro-Shop',
		keywords: [
			'MongoDB',
			'Express',
			'React',
			'NodeJS',
			'Redux',
			'JWT',
			'E-Commerce',
		],
	},
	{
		title: 'Shim AI',
		thumbnail: '/images/shim-ai.jpg',
		description: 'SAAS app focused on AI',
		githubLink: 'https://github.com/brianshimkus/Shim-AI',
		keywords: [
			'AI',
			'MySQL',
			'Stripe',
			'NextJS',
			'Prisma',
			'Tailwind',
			'Clerk',
			'Shadcn UI',
		],
		comingSoon: true,
	},
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
							{project.comingSoon && (
								<span
									className={`${tealGradientBackground} text-black rounded-full px-3 uppercase text-sm pt-1 font-bold mr-2`}>
									Launching Soon
								</span>
							)}
							{project.appLink?.length > 0 && (
								<a
									href={project.appLink}
									target='_blank'
									className={`${portfolioLink} ${pinkGradientBackground} flex`}>
									<span className='mr-1'>App</span>{' '}
									<FaExternalLinkAlt className='text-xs pt-1' />
								</a>
							)}
							{project.githubLink?.length > 0 && (
								<a
									href={project.githubLink}
									target='_blank'
									className={`${portfolioLink} ${pinkGradientBackground} flex`}>
									<span className='mr-1'>Code</span>{' '}
									<FaExternalLinkAlt className='text-xs pt-1' />
								</a>
							)}
						</div>
						<h2
							className={`${tealGradient} text-2xl font-bold tracking-wider flex-grow mt-6 mb-4`}>
							{project.title}
						</h2>
						<Image
							className='rounded-md'
							src={project.thumbnail}
							alt={project.title}
							width={800}
							height={500}
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
