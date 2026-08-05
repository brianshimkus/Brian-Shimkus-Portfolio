import Image from 'next/image'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SectionDivider from '../../components/SectionDivider'
import { gradientText, portfolioLink, skillPill, btnCta } from '../../utils'

const title = 'POD Recovery Assistant Case Study'
const description =
	'An independent Solutions Engineering case study: a controlled AI workflow that recovers missing proof-of-delivery documents for a freight brokerage, with SOP-grounded recommendations, human approval, and a full audit trail.'

export const metadata = {
	title,
	description,
	alternates: {
		canonical: '/case-studies/pod-recovery-assistant',
	},
	openGraph: {
		title,
		description,
		type: 'article',
		images: [
			{
				url: '/images/pod-recovery-assistant.png',
				width: 1448,
				height: 1086,
				alt: 'POD Recovery Assistant',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title,
		description,
		images: ['/images/pod-recovery-assistant.png'],
	},
}

const processSteps = [
	{ label: 'Delivered', tone: 'start' },
	{ label: 'POD Missing', tone: 'mid' },
	{ label: 'Outreach', tone: 'mid' },
	{ label: 'Validate', tone: 'mid' },
	{ label: 'Billing Ready', tone: 'end' },
]

const assumptions = [
	{ value: '8,000', label: 'Loads per month' },
	{ value: '12%', label: 'Missing usable POD at 24 hours' },
	{ value: '2.5', label: 'Manual outreach touches per case' },
	{ value: '240 h', label: 'Estimated monthly follow-up time' },
]

const workflowSteps = [
	'TMS marks a load delivered.',
	'The workflow checks whether a usable POD exists after the configured wait period.',
	'Policy and load data determine whether outreach is eligible and which contact and channel are allowed.',
	'The AI drafts a grounded action with SOP citations; the demo requires approval before sending.',
	'A simulated carrier response returns a document.',
	'The system extracts candidate identifiers, then deterministic rules validate the match.',
	'A valid match updates the simulated TMS; ambiguous cases create a human-review exception.',
	'Every decision, approval, external action, and result enters the audit timeline.',
]

const architecture = [
	{
		component: 'Demo Console',
		responsibility: 'Runs scenarios and shows workflow evidence.',
		limit: 'No production operator authentication.',
	},
	{
		component: 'Workflow API',
		responsibility: 'Maintains state and enforces allowed transitions.',
		limit: 'Single process; synthetic tenant.',
	},
	{
		component: 'Mock TMS',
		responsibility: 'Provides load and contact data; accepts write-back.',
		limit: 'Not a real vendor integration.',
	},
	{
		component: 'Policy Store',
		responsibility: 'Supplies customer SOP sections and automation rules.',
		limit: 'Small curated fixture set.',
	},
	{
		component: 'LLM Adapter',
		responsibility: 'Produces structured recommendation or extraction.',
		limit: 'Optional; fixture mode is default.',
	},
	{
		component: 'Validator',
		responsibility: 'Checks identifiers and policy deterministically.',
		limit: 'Simplified matching rules.',
	},
	{
		component: 'Audit Store',
		responsibility: 'Records decisions, approvals, actions, and results.',
		limit: 'No production retention program.',
	},
]

const nonNegotiables = [
	'Use only supplied data; never invent a load, contact, status, document fact, or policy.',
	'If a required field or governing rule is missing, return needs_review.',
	'Return structured output that the application validates against an allowlist.',
	'Do not let the model directly send messages, update the TMS, or approve documents.',
	'Require human approval for the portfolio demo’s external-action step.',
	'Use deterministic rules to validate load number, carrier, delivery date, and duplicate document state.',
	'Record model version, prompt template version, source IDs, output, validation result, and operator decision.',
]

const articleJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Article',
	headline: title,
	description,
	image: 'https://www.brianshimkus.dev/images/pod-recovery-assistant.png',
	url: 'https://www.brianshimkus.dev/case-studies/pod-recovery-assistant',
	author: {
		'@type': 'Person',
		name: 'Brian Shimkus',
		url: 'https://www.brianshimkus.dev',
	},
}

export default function PodRecoveryAssistantPage() {
	return (
		<main className='app-bg flex min-h-screen flex-col'>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
			/>
			<Navbar />
			<div className='container mt-8 mb-24 mx-auto px-6 sm:px-12 py-4 max-w-6xl'>
				<Link
					href='/#portfolio'
					className='inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 mb-10'>
					<FaArrowLeft className='text-xs' /> Back to Portfolio
				</Link>

				<p className='eyebrow mb-3'>Independent Portfolio Project &middot; Solutions Engineering</p>
				<h1 className='text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.05] font-display mb-4'>
					Freight Operations AI
					<br />
					<span className={gradientText}>POD Recovery Assistant</span>
				</h1>
				<p className='text-lg text-foreground mb-8 max-w-2xl'>
					A lean, interview-ready build for a simulated presales engagement in freight
					brokerage operations: an AI-assisted workflow that recovers missing proof-of-delivery
					documents without becoming an autonomous agent.
				</p>

				<div className='flex flex-wrap items-center gap-2 mb-10'>
					{processSteps.map((step, i) => (
						<span
							key={step.label}
							className={`${
								step.tone === 'end'
									? 'bg-foreground text-background'
									: step.tone === 'start'
									? 'bg-overlay/5 text-foreground/70 border border-overlay/10'
									: 'bg-brand/10 text-brand-text border border-brand/20'
							} rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider`}>
							{step.label}
						</span>
					))}
				</div>

				<div className='card p-6 mb-16'>
					<p className='text-xs font-semibold uppercase tracking-wider text-brand-text mb-2'>
						Status: In Progress
					</p>
					<p className='text-sm text-muted-foreground leading-relaxed'>
						This case study is being built in public. This page documents the discovery,
						architecture, and safeguards work completed so far; the live demo and technical
						walkthrough are still in development. This is an independent, fictional portfolio
						exercise based on public freight-operations patterns. It does not represent any
						employer&apos;s product, architecture, customers, or internal methods.
					</p>
				</div>

				<SectionDivider className='mb-10' />
				<h2 className='text-2xl font-semibold tracking-tight font-display mb-4'>The problem</h2>
				<p className='text-muted-foreground leading-relaxed mb-6'>
					<strong className='text-foreground'>Summit Freight Partners</strong> is a fictional,
					mid-market non-asset freight brokerage operating across North America. Operators
					manually chase proof-of-delivery documents across email, text, and phone. Missing or
					mismatched documents delay billing and create repetitive, low-value work for the team.
				</p>
				<p className='text-sm text-muted-foreground leading-relaxed mb-6'>
					Every number below is an illustrative assumption to validate in real discovery, not
					customer evidence.
				</p>
				<div className='grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16'>
					{assumptions.map((a) => (
						<div key={a.label} className='card p-5 text-center'>
							<p className='text-2xl font-bold text-brand-text font-display mb-1'>{a.value}</p>
							<p className='text-xs text-muted-foreground leading-snug'>{a.label}</p>
						</div>
					))}
				</div>

				<SectionDivider className='mb-10' />
				<h2 className='text-2xl font-semibold tracking-tight font-display mb-4'>
					The solution concept
				</h2>
				<p className='text-muted-foreground leading-relaxed mb-6'>
					One narrow workflow, deliberately scoped: a controlled process with an AI-assisted
					decision step, not a general autonomous agent platform. That restraint is part of the
					technical story.
				</p>
				<ol className='space-y-3 mb-16'>
					{workflowSteps.map((step, i) => (
						<li key={i} className='flex gap-4 text-sm text-muted-foreground leading-relaxed'>
							<span className='shrink-0 text-brand-text font-bold font-display'>
								{String(i + 1).padStart(2, '0')}
							</span>
							{step}
						</li>
					))}
				</ol>

				<SectionDivider className='mb-10' />
				<h2 className='text-2xl font-semibold tracking-tight font-display mb-4'>
					Lean architecture and boundaries
				</h2>
				<p className='text-muted-foreground leading-relaxed mb-6'>
					Say every limitation plainly. The project demonstrates reasoning and workflow design,
					not production certification.
				</p>
				<div className='card divide-y divide-overlay/10 mb-16'>
					{architecture.map((row) => (
						<div key={row.component} className='p-5 grid sm:grid-cols-3 gap-2 sm:gap-4'>
							<p className='text-sm font-semibold text-foreground font-display'>{row.component}</p>
							<p className='text-sm text-muted-foreground sm:col-span-1'>{row.responsibility}</p>
							<p className='text-xs text-muted-foreground/80 italic sm:col-span-1'>{row.limit}</p>
						</div>
					))}
				</div>

				<SectionDivider className='mb-10' />
				<h2 className='text-2xl font-semibold tracking-tight font-display mb-4'>
					AI decision contract and safeguards
				</h2>
				<p className='text-muted-foreground leading-relaxed mb-6'>
					The model may recommend &mdash; the application decides. It is only ever given the
					selected load record, approved contact data, relevant SOP sections, and the allowed
					action list.
				</p>
				<ul className='grid sm:grid-cols-2 gap-3 mb-6'>
					{nonNegotiables.map((rule) => (
						<li
							key={rule}
							className='card p-4 text-sm text-muted-foreground leading-relaxed'>
							{rule}
						</li>
					))}
				</ul>
				<p className='text-sm font-medium text-foreground mb-16'>
					A compelling AI demo shows when the system refuses or escalates, not only when it
					succeeds.
				</p>

				<SectionDivider className='mb-10' />
				<h2 className='text-2xl font-semibold tracking-tight font-display mb-4'>
					How this will be demonstrated
				</h2>
				<p className='text-muted-foreground leading-relaxed mb-6'>
					The finished deliverable pairs a seven-minute customer-facing demo (problem, workflow,
					a run exception, and value framing) with a twelve-minute technical walkthrough
					(architecture, state and audit, the AI contract, integration boundaries, and the
					production path). It ships alongside the presales artifacts that support a real
					proof-of-value: a discovery brief, a gap log, a security brief, and a two-page POV plan.
				</p>
				<div className='flex flex-wrap gap-2 mb-16'>
					{['Discovery Brief', 'Gap Log', 'Security Brief', 'POV Plan', 'Follow-up Email'].map(
						(tag) => (
							<span key={tag} className={skillPill}>
								{tag}
							</span>
						)
					)}
				</div>

				<div className='card p-8 text-center'>
					<h3 className='text-xl font-semibold tracking-tight font-display mb-2'>
						Following along?
					</h3>
					<p className='text-sm text-muted-foreground mb-6 max-w-md mx-auto'>
						This build is happening in public. Reach out if you&apos;d like to talk through the
						approach, or check back for the finished demo and technical walkthrough.
					</p>
					<a href='mailto:brian@brianshimkus.com' className={btnCta}>
						Contact Me
					</a>
				</div>
			</div>
			<Footer />
		</main>
	)
}
