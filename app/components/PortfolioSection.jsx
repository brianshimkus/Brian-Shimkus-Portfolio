'use client'

import Image from 'next/image'
import Link from 'next/link'
import { track } from '@vercel/analytics'
import SectionTitle from './SectionTitle'
import Reveal from './Reveal'
import { portfolioLink } from '../utils'
import { FaExternalLinkAlt, FaArrowRight, FaBolt } from 'react-icons/fa'

const aiProjects = [
	{
		title: 'Casefile',
		thumbnail: '/images/casefile.png',
		description:
			'A complete end-to-end build: an investigation copilot that ingests claims from five disagreeing data sources, resolves entity linkages with measured precision, computes deterministic risk scores, answers investigator questions with cited evidence, verifies locations against live geocoding APIs, and deploys with hardened security. Built for P&C insurers, showcasing the full discovery-to-delivery motion.',
		impact: 'Reduces insurance claim investigation time from multi-day manual process to minutes with explainable, auditable decisions.',
		badge: 'In Progress',
		caseStudyLink: '/case-studies/casefile',
		githubLink: '/casefile-github',
	},
	{
		title: 'Salesforce Intelligence',
		thumbnail: '/images/salesforce-rag.png',
		description:
			'A retrieval-augmented chat assistant built on live Salesforce data, letting support and sales teams ask natural-language questions about accounts, cases, and escalations and get sourced answers instantly.',
		impact: 'Turns a multi-record manual lookup across Cases, Accounts, and Opportunities into one sourced answer in seconds.',
		caseStudyLink: '/case-studies/salesforce-intelligence',
		appLink: '/salesforce-demo',
		githubLink: '/salesforce-github',
	},
]

const otherProjects = [
	{
		title: 'Workflow Analyzer',
		thumbnail: '/images/workflow-analyzer.png',
		description:
			'Upload a process document, screenshot, or SOP and this tool extracts the workflow, then tells you exactly what to automate, which tools to use, and how many hours it will save each week.',
		impact: '~2 hours of manual process mapping condensed into a 5-minute upload.',
		appLink: '/workflow-analyzer',
	},
	{
		title: 'List Enricher',
		thumbnail: '/images/list-enricher.png',
		description:
			'Upload a spreadsheet, describe the columns you want added in plain English, and get back a clean file enriched with real, web-researched data for every row.',
		impact: 'Turns a multi-hour, row-by-row research task into one batch run.',
		appLink: '/list-enricher',
	},
	{
		title: 'SOP Generator',
		thumbnail: '/images/sop-generator.png',
		description:
			'Describe a process in plain English or upload existing notes, and this tool turns tribal knowledge into a polished Standard Operating Procedure complete with roles, prerequisites, and quality checks.',
		impact: 'Cuts SOP drafting from a half-day of writing to under 10 minutes.',
		appLink: '/sop-generator',
	},
	{
		title: 'Meeting Notes Analyzer',
		thumbnail: '/images/meeting-notes.png',
		description:
			'Paste in a transcript or raw notes and get a clean recap with action items, owners, due dates, decisions, and open questions ready to copy straight into your task tracker.',
		impact: 'Turns 30 minutes of post-meeting note-cleanup into an instant recap.',
		appLink: '/meeting-notes-analyzer',
	},
	{
		title: 'Contract Analyzer',
		thumbnail: '/images/contract-analyzer.png',
		description:
			'Upload any contract and get a plain-English summary, key dates, obligations on both sides, and severity-flagged risks worth pushing back on, all in about 30 seconds.',
		impact: 'Cuts contract triage from ~45 minutes of manual review to under a minute.',
		appLink: '/contract-analyzer',
	},
]

function ProjectCard({ project }) {
	return (
		<div className='card flex flex-col h-full'>
			<div className='relative w-full aspect-[4/3] rounded-t-2xl overflow-hidden bg-charcoal'>
				<Image
					src={project.thumbnail}
					alt={project.title}
					fill
					sizes='(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw'
					className={project.thumbnailFit === 'contain' ? 'object-contain' : 'object-cover object-top'}
				/>
				{project.badge && (
					<span className='absolute top-3 right-3 inline-flex items-center rounded-full bg-black/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white ring-1 ring-inset ring-white/20 backdrop-blur-md'>
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
				{project.impact && (
					<p className='mt-4 inline-flex items-start gap-1.5 text-xs text-brand-text'>
						<FaBolt className='text-[10px] shrink-0 mt-0.5' />
						<span>
							<span className='font-semibold'>Est. impact:</span> {project.impact}
						</span>
					</p>
				)}
				<div className='flex flex-wrap items-center gap-3 pt-5 mt-5 border-t border-overlay/5'>
					{project.caseStudyLink?.length > 0 && (
						<Link
							href={project.caseStudyLink}
							onClick={() =>
								track(`${project.title} - Case Study`, { project: project.title, type: 'case_study' })
							}
							className={portfolioLink}>
							Case Study <FaArrowRight className='text-[10px]' />
						</Link>
					)}
					{project.appLink?.length > 0 && (
						<a
							href={project.appLink}
							target='_blank'
							rel='noopener noreferrer'
							onClick={() => track(`${project.title} - App`, { project: project.title, type: 'app' })}
							className={portfolioLink}>
							App <FaExternalLinkAlt className='text-[10px]' />
						</a>
					)}
					{project.githubLink?.length > 0 && (
						<a
							href={project.githubLink}
							target='_blank'
							rel='noopener noreferrer'
							onClick={() => track(`${project.title} - Code`, { project: project.title, type: 'code' })}
							className={portfolioLink}>
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
			<p className='-mt-6 mb-8 text-xs text-muted-foreground/70 max-w-2xl italic'>
				Impact estimates are illustrative, modeled on the workflow each project targets, not
				measured client results.
			</p>
			<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
				{aiProjects.map((project, index) => (
					<Reveal key={index} delay={(index % 3) * 0.08} className='h-full'>
						<ProjectCard project={project} />
					</Reveal>
				))}
			</div>

			<div className='mt-20 pt-10 border-t border-overlay/10'>
				<p className='mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground'>
					More projects
				</p>
				<p className='mb-6 text-sm text-muted-foreground max-w-2xl'>
					Narrower, faster builds shipped through Insolla, the same
					discovery-to-delivery process applied at a smaller scale.
				</p>
				<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
					{otherProjects.map((project, index) => (
						<Reveal key={index} delay={(index % 3) * 0.08} className='h-full'>
							<ProjectCard project={project} />
						</Reveal>
					))}
				</div>
			</div>
		</section>
	)
}
