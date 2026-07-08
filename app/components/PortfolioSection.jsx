import Image from 'next/image'
import SectionTitle from './SectionTitle'
import { portfolioKeyword, portfolioLink } from '../utils'
import { FaExternalLinkAlt } from 'react-icons/fa'

const aiProjects = [
	{
		title: 'Insolla',
		thumbnail: '/images/insolla.jpg',
		description: 'AI automation consultancy — intelligent solutions through AI',
		appLink: 'https://insolla.ai/',
		githubLink: 'https://github.com/brianshimkus/Insolla',
		keywords: ['AI', 'NextJS', 'Tailwind', 'Typescript'],
	},
	{
		title: 'Salesforce Intelligence',
		thumbnail: '/images/salesforce-rag.jpg',
		description:
			'RAG over live Salesforce data — ask natural-language questions about accounts, cases, and escalations',
		appLink:
			'https://insolla-salesforce-rag-kjfm8hmmbzqm6j3hmyjeth.streamlit.app/',
		keywords: ['RAG', 'OpenAI', 'LangChain', 'Pinecone', 'Streamlit'],
	},
	{
		title: 'Workflow Analyzer',
		thumbnail: '/images/workflow-analyzer.jpg',
		description:
			'Upload a process doc or SOP and get exactly what to automate, which tools to use, and hours saved',
		appLink: 'https://www.insolla.ai/workflow-analyzer',
		keywords: ['AI', 'NextJS', 'Automation'],
	},
	{
		title: 'List Enricher',
		thumbnail: '/images/list-enricher.jpg',
		description:
			'Enrich any spreadsheet in plain English — describe the columns you want, get researched data back per row',
		appLink: 'https://www.insolla.ai/products/list-enricher',
		keywords: ['AI', 'NextJS', 'Sales Tools'],
	},
	{
		title: 'SOP Generator',
		thumbnail: '/images/sop-generator.jpg',
		description:
			'Turn tribal knowledge into documented, structured Standard Operating Procedures',
		appLink: 'https://www.insolla.ai/products/sop-generator',
		keywords: ['AI', 'NextJS', 'Docs'],
	},
	{
		title: 'Meeting Notes Analyzer',
		thumbnail: '/images/meeting-notes.jpg',
		description:
			'Turn meeting notes and transcripts into action items, decisions, and open questions',
		appLink: 'https://www.insolla.ai/products/meeting-notes',
		keywords: ['AI', 'NextJS', 'Productivity'],
	},
	{
		title: 'Contract Analyzer',
		thumbnail: '/images/contract-analyzer.jpg',
		description:
			'Plain-English contract summaries, key dates, and severity-flagged risks in 30 seconds',
		appLink: 'https://www.insolla.ai/products/contract-analyzer',
		keywords: ['AI', 'NextJS', 'Legal Tech'],
	},
]

const otherProjects = [
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
		appLink: 'https://shimfin.brianshimkus.dev/',
		githubLink: 'https://github.com/brianshimkus/Shimfin',
		keywords: ['React', 'Firebase'],
	},
	{
		title: 'COVID 19 Tracker',
		thumbnail: '/images/covid-tracker.jpg',
		description: 'COVID-19 tracker app built in React',
		appLink: 'https://covid.brianshimkus.dev/',
		githubLink: 'https://github.com/brianshimkus/covid-19-tracker',
		keywords: ['React', 'Material UI', 'Flexbox'],
	},
	{
		title: 'Github Finder',
		thumbnail: '/images/github-finder.jpg',
		description: 'Search GitHub users and see user data',
		appLink: 'https://githubfinder.brianshimkus.dev/',
		githubLink: 'https://github.com/brianshimkus/Github-Finder',
		keywords: ['React', 'Node.js'],
	},
]

function ProjectCard({ project }) {
	return (
		<div className='card card-interactive group flex flex-col'>
			<div className='relative w-full aspect-[4/3] rounded-t-2xl overflow-hidden'>
				<Image
					src={project.thumbnail}
					alt={project.title}
					fill
					sizes='(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw'
					className='object-cover object-top transition-transform duration-500 group-hover:scale-105'
				/>
				{project.comingSoon && (
					<span className='absolute top-3 left-3 inline-flex items-center rounded-full bg-brand/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-light ring-1 ring-inset ring-brand/30 backdrop-blur-sm'>
						Launching Soon
					</span>
				)}
			</div>
			<div className='p-6 flex flex-col flex-1'>
				<h3 className='text-lg font-semibold tracking-tight mb-2 font-display group-hover-gradient'>
					{project.title}
				</h3>
				<p className='text-sm text-muted-foreground leading-relaxed flex-1'>
					{project.description}
				</p>
				<ul className='flex flex-wrap gap-2 mt-4 mb-4'>
					{project.keywords.map((keyword, index) => (
						<li key={index} className={portfolioKeyword}>
							{keyword}
						</li>
					))}
				</ul>
				<div className='flex items-center gap-3 pt-4 border-t border-white/5'>
					{project.appLink?.length > 0 && (
						<a href={project.appLink} target='_blank' rel='noopener noreferrer' className={portfolioLink}>
							App <FaExternalLinkAlt className='text-[10px]' />
						</a>
					)}
					{project.githubLink?.length > 0 && (
						<a href={project.githubLink} target='_blank' rel='noopener noreferrer' className={portfolioLink}>
							Code <FaExternalLinkAlt className='text-[10px]' />
						</a>
					)}
				</div>
			</div>
		</div>
	)
}

export default function PortfolioSection() {
	return (
		<section id='portfolio'>
			<SectionTitle eyebrow='What I Build' title='Portfolio' />
			<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
				{aiProjects.map((project, index) => (
					<ProjectCard key={index} project={project} />
				))}
			</div>

			<p className='mt-16 mb-6 text-xs uppercase tracking-wider text-foreground/40'>
				More projects
			</p>
			<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
				{otherProjects.map((project, index) => (
					<ProjectCard key={index} project={project} />
				))}
			</div>
		</section>
	)
}
