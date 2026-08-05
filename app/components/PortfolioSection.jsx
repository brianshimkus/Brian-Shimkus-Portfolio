import Image from 'next/image'
import Link from 'next/link'
import SectionTitle from './SectionTitle'
import { portfolioLink } from '../utils'
import { FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa'

const aiProjects = [
	{
		title: 'POD Recovery Assistant',
		thumbnail: '/images/pod-recovery-assistant.jpg',
		description:
			'An independent Solutions Engineering case study: a controlled AI workflow that recovers missing proof-of-delivery documents for a freight brokerage, with SOP-grounded recommendations, human approval, and a full audit trail.',
		badge: 'In Progress',
		caseStudyLink: '/case-studies/pod-recovery-assistant',
	},
	{
		title: 'Salesforce Intelligence',
		thumbnail: '/images/salesforce-rag.jpg',
		description:
			'A retrieval-augmented chat assistant built on live Salesforce data, letting support and sales teams ask natural-language questions about accounts, cases, and escalations and get sourced answers instantly.',
		appLink: 'https://rag.insolla.ai',
		githubLink: 'https://github.com/brianshimkus/Insolla-Salesforce-RAG',
	},
]

const otherProjects = [
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
				{project.badge && (
					<span className='absolute top-3 left-3 inline-flex items-center rounded-full bg-brand/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-text ring-1 ring-inset ring-brand/30 backdrop-blur-sm'>
						{project.badge}
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
				<div className='flex items-center gap-3 pt-5 mt-5 border-t border-overlay/5'>
					{project.caseStudyLink?.length > 0 && (
						<Link href={project.caseStudyLink} className={portfolioLink}>
							Case Study <FaArrowRight className='text-[10px]' />
						</Link>
					)}
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
		<section id='portfolio' className='scroll-mt-16'>
			<SectionTitle eyebrow='What I Build' title='Portfolio' />
			<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
				{aiProjects.map((project, index) => (
					<ProjectCard key={index} project={project} />
				))}
			</div>

			<div className='mt-20 pt-10 border-t border-overlay/10'>
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
