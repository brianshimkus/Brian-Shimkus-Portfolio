import SectionTitle from './SectionTitle'
import Reveal from './Reveal'
import { skillPill } from '../utils'

const toolGroups = [
	{
		category: 'Pre-Sales & Discovery',
		skills: [
			'Technical discovery & interviews',
			'Tailored demos',
			'POC scoping & delivery',
			'Solution architecture',
			'Executive presentations',
			'Objection handling',
			'Customer enablement',
		],
	},
	{
		category: 'AI & LLM',
		skills: [
			'OpenAI API & GPT',
			'RAG architecture & retrieval',
			'Embeddings & vector databases',
			'LangChain & prompt engineering',
			'Source grounding & structured outputs',
		],
	},
	{
		category: 'Integration & Backend',
		skills: [
			'REST APIs & webhooks',
			'Salesforce API (OAuth 2.0 JWT)',
			'FastAPI & Python',
			'Database design & SQL',
			'Enterprise systems & compliance',
		],
	},
	{
		category: 'Frontend & Tools',
		skills: [
			'React & Next.js',
			'TypeScript & JavaScript',
			'Tailwind CSS',
			'Make.com & n8n',
			'Design tools & prototyping',
		],
	},
]

function SkillCard({ group }) {
	return (
		<div className='card p-7'>
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
	)
}

export default function SkillsSection() {
	return (
		<section id='skills' className='scroll-mt-16'>
			<SectionTitle eyebrow='What I Know' title='Skills' divider={false} />
			<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
				{toolGroups.map((group, index) => (
					<Reveal key={group.category} delay={index * 0.08}>
						<SkillCard group={group} />
					</Reveal>
				))}
			</div>
		</section>
	)
}
