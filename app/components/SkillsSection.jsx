import SectionTitle from './SectionTitle'
import Reveal from './Reveal'
import { skillPill } from '../utils'

const toolGroups = [
	{
		category: 'Applied AI',
		skills: [
			'OpenAI API',
			'LLMs & GPT models',
			'RAG architecture',
			'LangChain',
			'Pinecone & vector databases',
			'Structured outputs',
			'Evaluations & guardrails',
			'Python',
			'FastAPI',
		],
	},
	{
		category: 'Integrations',
		skills: [
			'Salesforce API (OAuth 2.0 JWT)',
			'DocuSign API',
			'REST APIs & webhooks',
			'JSON & data formats',
			'SQL & MySQL',
			'AWS',
		],
	},
	{
		category: 'Engineering',
		skills: [
			'TypeScript',
			'JavaScript',
			'Node.js',
			'React',
			'Next.js',
			'Tailwind CSS',
			'Git',
			'Playwright',
			'Vercel',
		],
	},
	{
		category: 'Customer Delivery',
		skills: [
			'Technical discovery',
			'Problem decomposition',
			'Workflow mapping',
			'Demo delivery',
			'Proof-of-concept scoping',
			'Stakeholder alignment',
			'Technical handoff',
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
