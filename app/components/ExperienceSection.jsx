'use client'

import { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import SectionTitle from './SectionTitle'
import Reveal from './Reveal'

const experience = [
	{
		role: 'AI Solutions Engineer',
		company: 'Insolla (Independent AI Practice)',
		location: 'Chicago, IL (Remote)',
		dates: 'Dec 2025 – Present',
		bullets: [
			'Practiced the complete pre-sales motion solo: discovery calls, solution scoping, tailored demos, and proof-of-concept builds, run end-to-end without a team.',
			'Produce the full pre-sales package: discovery guide, stakeholder map, technical walkthrough, security brief, and POV plan.',
			'Build proofs of concept against customers’ own systems, integrating CRM, document, and workflow platforms through REST APIs, webhooks, and iPaaS tooling, not canned data.',
			'Cut a small business’s social media workflow from 8 hours a week to 10 minutes with an automated content pipeline, scoped and delivered directly with the owner.',
		],
	},
	{
		role: 'Lead Front-End Developer',
		company: 'TerraFort (Freelance)',
		location: null,
		dates: 'Aug 2025 – Dec 2025',
		bullets: [
			'Led design and development of a web and mobile platform at an early-stage startup, executing product initiatives from concept to delivery.',
			'Owned vendor-facing technical evaluations, scoping and integrating third-party and AI tooling into the product.',
		],
	},
	{
		role: 'Senior Front-End Developer',
		company: 'OCC (Contract)',
		location: 'Chicago, IL',
		dates: 'Jul 2024 – Jun 2025',
		bullets: [
			'Ran weekly stakeholder sessions at a systemically important financial market utility, covering goal setting, live progress demos, and open-question resolution.',
			'Delivered React and TypeScript solutions from Figma through production; implemented Mock Service Worker to unblock front-end work from backend dependencies.',
		],
	},
	{
		role: 'Lead Front-End Developer',
		company: 'Marex',
		location: 'Chicago, IL',
		dates: 'Oct 2020 – Jan 2024',
		bullets: [
			'Led the program that digitalized broker and trader onboarding, replacing a compliance-heavy, paper-based workflow with a fully digital process and measurably shortening the onboarding cycle.',
			'Integrated the DocuSign API to digitize document signing across all products.',
			'Led a five-person front-end team delivering stakeholder-driven solutions; designed and ran the team’s internship program.',
		],
	},
]

const earlierExperience = [
	{ role: 'Senior Front-End Developer', company: 'Walker & Dunlop (Contract)', years: '2020' },
	{ role: 'Senior Front-End Developer', company: 'ICF', years: '2019 – 2020' },
	{ role: 'Front-End Developer', company: 'TransUnion', years: '2018 – 2019' },
	{ role: 'UX Architect & Front-End Developer', company: 'R1 RCM', years: '2016 – 2018' },
	{ role: 'Front-End Developer', company: 'TimeZoneOne (Contract)', years: '2015 – 2016' },
	{ role: 'Junior Front-End Developer', company: 'Kohactive', years: '2013 – 2015' },
]

function ExperienceCard({ item }) {
	return (
		<div className='relative pl-9'>
			<span className='absolute left-0 top-2 h-3.5 w-3.5 rounded-full bg-brand ring-4 ring-background' />
			<div className='card p-6'>
				<div className='flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1'>
					<h3 className='text-lg font-semibold tracking-tight font-display'>{item.role}</h3>
					<span className='text-xs text-muted-foreground shrink-0'>{item.dates}</span>
				</div>
				<p className='text-sm text-brand-text font-medium mb-4'>
					{item.company}
					{item.location && ` · ${item.location}`}
				</p>
				<ul className='space-y-2'>
					{item.bullets.map((bullet, i) => (
						<li key={i} className='flex gap-2 text-sm text-muted-foreground leading-relaxed'>
							<span className='text-brand-text shrink-0'>&rsaquo;</span>
							{bullet}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default function ExperienceSection() {
	const containerRef = useRef(null)
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start 75%', 'end 55%'],
	})

	return (
		<section id='experience' className='scroll-mt-16'>
			<SectionTitle eyebrow="Where I've Been" title='Experience' />
			<div ref={containerRef} className='relative' style={{ position: 'relative' }}>
				<div className='absolute left-[6px] top-2 bottom-2 w-px bg-overlay/10' />
				<motion.div
					style={{ scaleY: scrollYProgress }}
					className='absolute left-[6px] top-2 bottom-2 w-px origin-top bg-gradient-to-b from-[#5E9EE1] to-[#8B5CF6]'
				/>
				<div className='space-y-8'>
					{experience.map((item, i) => (
						<Reveal key={item.company} delay={i * 0.06}>
							<ExperienceCard item={item} />
						</Reveal>
					))}
				</div>
			</div>

			<Reveal delay={0.1} className='mt-8'>
				<div className='card p-6'>
					<h3 className='text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4'>
						Earlier Experience
					</h3>
					<ul className='grid sm:grid-cols-2 gap-x-8 gap-y-3'>
						{earlierExperience.map((item) => (
							<li
								key={item.company}
								className='flex items-baseline justify-between gap-3 text-sm border-b border-overlay/5 pb-2'>
								<span className='text-foreground/80'>
									{item.role} <span className='text-muted-foreground'>&middot; {item.company}</span>
								</span>
								<span className='text-xs text-muted-foreground shrink-0'>{item.years}</span>
							</li>
						))}
					</ul>
				</div>
			</Reveal>
		</section>
	)
}
