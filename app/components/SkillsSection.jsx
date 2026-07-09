import SectionTitle from './SectionTitle'
import { skillPill } from '../utils'

const skillGroups = [
	{
		category: 'AI & LLM',
		skills: [
			'OpenAI APIs',
			'RAG Architecture',
			'Prompt Design',
			'LLM Workflow Automation',
			'Python',
		],
	},
	{
		category: 'Automation & No-Code',
		skills: ['Make.com', 'n8n', 'Airtable', 'Hunter.io', 'Brevo'],
	},
	{
		category: 'Integration & Platform',
		skills: [
			'REST APIs',
			'Node.js',
			'SQL (MySQL)',
			'DocuSign API',
			'Contentful',
			'AWS',
		],
	},
	{
		category: 'Front-End',
		skills: [
			'React',
			'TypeScript',
			'JavaScript',
			'Redux',
			'Tailwind',
			'Jest',
			'Playwright',
		],
	},
	{
		category: 'Solutions Delivery',
		skills: [
			'Technical Discovery',
			'Stakeholder Demos & POCs',
			'Solution Scoping',
			'Cross-Functional Leadership',
		],
	},
]

export default function SkillsSection() {
	return (
		<section id='skills' className='scroll-mt-16'>
			<SectionTitle eyebrow='What I Know' title='Skills' />
			<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
				{skillGroups.map((group) => (
					<div key={group.category} className='card p-7'>
						<h3 className='text-lg font-semibold tracking-tight mb-4 font-display'>
							{group.category}
						</h3>
						<ul className='flex flex-wrap gap-2'>
							{group.skills.map((skill) => (
								<li key={skill} className={skillPill}>
									{skill}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</section>
	)
}
