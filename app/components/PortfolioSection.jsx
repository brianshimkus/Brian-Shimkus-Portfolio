import Image from 'next/image'
import SectionTitle from './SectionTitle'
import { portfolioLink } from '../utils'
import { FaExternalLinkAlt } from 'react-icons/fa'

const aiProjects = [
	{
		title: 'Insolla',
		thumbnail: '/images/insolla.jpg',
		description:
			'An AI automation consultancy helping small businesses design LLM-powered systems, from automated outbound engines to CRM integrations and agent-driven workflows.',
		appLink: 'https://insolla.ai/',
	},
	{
		title: 'Salesforce Intelligence',
		thumbnail: '/images/salesforce-rag.jpg',
		description:
			'A retrieval-augmented chat assistant built on live Salesforce data, letting support and sales teams ask natural-language questions about accounts, cases, and escalations and get sourced answers instantly.',
		appLink:
			'https://insolla-salesforce-rag-kjfm8hmmbzqm6j3hmyjeth.streamlit.app/',
		githubLink: 'https://github.com/brianshimkus/Insolla-Salesforce-RAG',
	},
	{
		title: 'Workflow Analyzer',
		thumbnail: '/images/workflow-analyzer.jpg',
		description:
			'Upload a process document, screenshot, or SOP and this tool extracts the workflow, then tells you exactly what to automate, which tools to use, and how many hours it will save each week.',
		appLink: 'https://www.insolla.ai/workflow-analyzer',
	},
	{
		title: 'List Enricher',
		thumbnail: '/images/list-enricher.jpg',
		description:
			'Upload a spreadsheet, describe the columns you want added in plain English, and get back a clean file enriched with real, web-researched data for every row.',
		appLink: 'https://www.insolla.ai/products/list-enricher',
	},
	{
		title: 'SOP Generator',
		thumbnail: '/images/sop-generator.jpg',
		description:
			'Describe a process in plain English or upload existing notes, and this tool turns tribal knowledge into a polished Standard Operating Procedure complete with roles, prerequisites, and quality checks.',
		appLink: 'https://www.insolla.ai/products/sop-generator',
	},
	{
		title: 'Meeting Notes Analyzer',
		thumbnail: '/images/meeting-notes.jpg',
		description:
			'Paste in a transcript or raw notes and get a clean recap with action items, owners, due dates, decisions, and open questions ready to copy straight into your task tracker.',
		appLink: 'https://www.insolla.ai/products/meeting-notes',
	},
	{
		title: 'Contract Analyzer',
		thumbnail: '/images/contract-analyzer.jpg',
		description:
			'Upload any contract and get a plain-English summary, key dates, obligations on both sides, and severity-flagged risks worth pushing back on, all in about 30 seconds.',
		appLink: 'https://www.insolla.ai/products/contract-analyzer',
	},
]

const otherProjects = [
	{
		title: 'Noted',
		thumbnail: '/images/noted.jpg',
		description:
			'A SaaS notes app with rich text editing, light and dark mode, and subscription billing built in.',
		appLink: 'https://noted.brianshimkus.dev/',
		githubLink: 'https://github.com/brianshimkus/Noted',
	},
	{
		title: 'Shimfin',
		thumbnail: '/images/shimfin.jpg',
		description:
			'A real estate listings app for browsing and searching properties with a live Firebase backend.',
		appLink: 'https://shimfin.brianshimkus.dev/',
		githubLink: 'https://github.com/brianshimkus/Shimfin',
	},
	{
		title: 'COVID 19 Tracker',
		thumbnail: '/images/covid-tracker.jpg',
		description:
			'A COVID-19 data tracker built in React, visualizing case counts and trends by country.',
		appLink: 'https://covid.brianshimkus.dev/',
		githubLink: 'https://github.com/brianshimkus/covid-19-tracker',
	},
	{
		title: 'Github Finder',
		thumbnail: '/images/github-finder.jpg',
		description:
			'A GitHub user search tool for looking up profiles, repositories, and public activity.',
		appLink: 'https://githubfinder.brianshimkus.dev/',
		githubLink: 'https://github.com/brianshimkus/Github-Finder',
	},
]

function ProjectCard({ project }) {
	return (
		<div className='card flex flex-col'>
			<div className='relative w-full aspect-[4/3] rounded-t-2xl overflow-hidden'>
				<Image
					src={project.thumbnail}
					alt={project.title}
					fill
					sizes='(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw'
					className='object-cover object-top'
				/>
				{project.comingSoon && (
					<span className='absolute top-3 left-3 inline-flex items-center rounded-full bg-brand/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-light ring-1 ring-inset ring-brand/30 backdrop-blur-sm'>
						Launching Soon
					</span>
				)}
			</div>
			<div className='p-7 flex flex-col flex-1'>
				<h3 className='text-xl font-semibold tracking-tight mb-2 font-display'>
					{project.title}
				</h3>
				<p className='text-sm text-muted-foreground leading-relaxed flex-1'>
					{project.description}
				</p>
				<div className='flex items-center gap-3 pt-5 mt-5 border-t border-white/5'>
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
			<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
				{aiProjects.map((project, index) => (
					<ProjectCard key={index} project={project} />
				))}
			</div>

			<div className='mt-20 pt-10 border-t border-white/10'>
				<p className='mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground'>
					More projects
				</p>
				<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
					{otherProjects.map((project, index) => (
						<ProjectCard key={index} project={project} />
					))}
				</div>
			</div>
		</section>
	)
}
