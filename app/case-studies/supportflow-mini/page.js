import Link from 'next/link'
import { FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SectionDivider from '../../components/SectionDivider'
import ProcessSteps from '../../components/ProcessSteps'
import Reveal from '../../components/Reveal'
import { gradientText, portfolioLink, skillPill, btnOutline } from '../../utils'

const title = 'SupportFlow Mini Case Study'
const description =
	'A customer support ticket router with AI recommendation, human review gate, and webhook delivery. Built end-to-end with FastAPI, Pydantic, SQLite, OpenAI, and deterministic evaluation.'

export const metadata = {
	title,
	description,
	alternates: {
		canonical: '/case-studies/supportflow-mini',
	},
	openGraph: {
		title,
		description,
		type: 'article',
		images: [
			{
				url: '/images/supportflow-mini.png',
				width: 1200,
				height: 630,
				alt: 'SupportFlow Mini Support Ticket Router',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title,
		description,
		images: ['/images/supportflow-mini.png'],
	},
}

const processSteps = [
	{ label: 'Customer Issue', tone: 'start' },
	{ label: 'AI Recommendation', tone: 'mid' },
	{ label: 'Human Review', tone: 'mid' },
	{ label: 'Safe Delivery', tone: 'mid' },
	{ label: 'Measure Quality', tone: 'end' },
]

const workflow = [
	{
		step: '1',
		name: 'Submit',
		description: 'Customer or support agent submits a ticket: customer name, tier, subject, and description.',
	},
	{
		step: '2',
		name: 'Recommend',
		description: 'AI model recommends a category (billing, technical, account, feature request, other) and priority (low, medium, high, urgent).',
	},
	{
		step: '3',
		name: 'Review',
		description: 'Human reviewer sees the recommendation with confidence score and can approve, correct, or reassign the ticket.',
	},
	{
		step: '4',
		name: 'Deliver',
		description: 'Approved routing is sent via webhook to the assigned team. Webhook includes the full ticket and final routing.',
	},
	{
		step: '5',
		name: 'Measure',
		description: 'Evaluate recommendation accuracy (agreement with human decision) and confidence calibration across the evaluation set.',
	},
]

const architecture = [
	{
		component: 'API & Database',
		responsibility: 'FastAPI service with Pydantic schemas, SQLite for tickets and events, dependency injection for clean routes.',
		detail: 'POST /api/tickets creates and stores tickets with full audit trail. GET endpoints surface data for review UI.',
	},
	{
		component: 'Typed Data Contract',
		responsibility: 'Pydantic models enforce ticket shape, AI output schema, and human decision structure.',
		detail: 'TicketCreate validates input. TriageResult defines category, priority, team, summary, suggested response, confidence. ReviewResult captures final decision and notes.',
	},
	{
		component: 'Mock-First Workflow',
		responsibility: 'Deterministic triage function runs the workflow without AI, proving logic before adding the model.',
		detail: 'Uses keyword-matching rules to categorize tickets, letting you test form submission, storage, and review UI without LLM calls.',
	},
	{
		component: 'AI Recommendation Engine',
		responsibility: 'Calls OpenAI API with ticket content, returns structured category, priority, team, and confidence.',
		detail: 'Model sees only the ticket; never sees the expected answer or reviewer decision. Calls happen in production, not local testing.',
	},
	{
		component: 'Browser Review Interface',
		responsibility: 'HTML form displays ticket, AI recommendation, and lets reviewer approve, correct, or reassign.',
		detail: 'POST to /api/tickets/(id)/review sends final routing decision and optional notes. Stores reviewer name and timestamp.',
	},
	{
		component: 'Webhook Integration',
		responsibility: 'Sends approved routing to external system via HTTP POST with full ticket and final categorization.',
		detail: 'Retry logic, idempotency keys, and integration testing happen in later chapters. Early chapters prove the happy path.',
	},
	{
		component: 'Evaluation Harness',
		responsibility: 'Scores recommendation accuracy against 5 holdout test cases, computes agreement and confidence metrics.',
		detail: 'Reports show how often the model agrees with humans and whether high-confidence predictions are actually correct.',
	},
]

const keyLearnings = [
	{
		title: 'Deterministic Testing',
		body: 'Mock the model to prove workflow logic. Same seed produces same recommendations, same review UI renders correctly, same webhook fires.',
	},
	{
		title: 'Typed Contracts',
		body: 'Pydantic enforces field types and presence. Invalid requests are rejected before business logic runs. Model outputs are always schema-valid.',
	},
	{
		title: 'One Problem, One Model Call',
		body: 'Ticket routing has exactly one decision: where should this go and how urgent is it? One model call, one confidence score, one human gate.',
	},
	{
		title: 'Human Gate Separates Review from Decision',
		body: 'Reviewer decision is stored separately from AI recommendation. You can compute agreement, measure confidence calibration, and maintain an audit trail.',
	},
	{
		title: 'Workflow First, Model Second',
		body: 'Build the full end-to-end flow with mock data. Prove forms, storage, review, and webhooks work. Then add the model call — same integration points, same data schema.',
	},
	{
		title: 'Production Practices from Day One',
		body: 'Dependency injection, environment config, secret boundaries, error handling, audit logs. No refactoring required when you ship.',
	},
]

const chapters = [
	{
		number: '1',
		title: 'Think like an FDE before writing code',
		topics: 'The workflow, requirements, success metrics, definitions of done',
	},
	{
		number: '2',
		title: 'Set up the smallest possible application',
		topics: 'Python 3.11+, FastAPI, Uvicorn, Pydantic, SQLite, browser',
	},
	{
		number: '3',
		title: 'Build the typed data contract',
		topics: 'TicketCreate, TriageResult, ReviewResult input/output schemas',
	},
	{
		number: '4',
		title: 'Prove the workflow without AI',
		topics: 'Mock triage, deterministic rules, API routes, database storage',
	},
	{
		number: '5',
		title: 'Add the browser workflow',
		topics: 'HTML form for ticket submission, review interface, metrics display',
	},
	{
		number: '6',
		title: 'Add one structured model call',
		topics: 'OpenAI API, Pydantic output schema, category and priority inference',
	},
	{
		number: '7',
		title: 'Add the human gate and one integration',
		topics: 'Review approval, webhook delivery, idempotency, retry logic',
	},
	{
		number: '8',
		title: 'Measure quality with a tiny evaluation set',
		topics: 'Holdout test cases, agreement metrics, confidence calibration',
	},
]

const articleJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Article',
	headline: title,
	description,
	image: 'https://www.brianshimkus.com/images/supportflow-mini.png',
	url: 'https://www.brianshimkus.com/case-studies/supportflow-mini',
	author: {
		'@type': 'Person',
		name: 'Brian Shimkus',
		url: 'https://www.brianshimkus.com',
	},
}

export default function SupportFlowMiniPage() {
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

				<p className='eyebrow mb-3'>Support Ticket Router &middot; AI Recommendation with Human Gate</p>
				<h1 className='text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.05] font-display mb-4'>
					SupportFlow Mini
					<br />
					<span className={gradientText}>Production System</span>
				</h1>
				<p className='text-lg text-foreground mb-8 max-w-2xl'>
					A customer support ticket router with AI recommendation, human review gate, and webhook delivery. Built end-to-end
					with FastAPI, Pydantic, SQLite, OpenAI, and deterministic evaluation. One problem, one model call, one human decision,
					one safe integration.
				</p>

				<ProcessSteps steps={processSteps} />

				<div className='flex flex-wrap gap-3 mb-10'>
					<Link href='https://github.com/brianshimkus/SupportFlow-Mini' target='_blank' rel='noopener noreferrer' className={btnOutline}>
						View Code <FaExternalLinkAlt className='text-xs' />
					</Link>
				</div>

				<div className='card p-6 mb-16'>
					<p className='text-xs font-semibold uppercase tracking-wider text-brand-text mb-2'>Status: In Progress</p>
					<p className='text-sm text-muted-foreground leading-relaxed'>
						A production-grade support ticket routing system. Handles ticket ingestion, AI-powered categorization and priority assignment, human review and approval workflow, webhook delivery to external systems, and quality evaluation across a held-out test set.
					</p>
				</div>

				<SectionDivider className='mb-10' />
				<h2 className='text-2xl font-semibold tracking-tight font-display mb-4'>The problem</h2>
				<p className='text-muted-foreground leading-relaxed mb-4'>
					Manual support ticket triage is slow and inconsistent. Tickets arrive with a subject and description. A human reviewer reads each one and routes it to the right team, but:
				</p>
				<ul className='space-y-2 text-muted-foreground mb-16'>
					<li className='flex gap-3'>
						<span className='text-brand-text shrink-0'>•</span>
						<span>Categorization varies between reviewers (billing vs. account, technical vs. feature request)</span>
					</li>
					<li className='flex gap-3'>
						<span className='text-brand-text shrink-0'>•</span>
						<span>Priority assignments are subjective and slow</span>
					</li>
					<li className='flex gap-3'>
						<span className='text-brand-text shrink-0'>•</span>
						<span>Urgent tickets can get buried if a reviewer is slow</span>
					</li>
					<li className='flex gap-3'>
						<span className='text-brand-text shrink-0'>•</span>
						<span>Misroutings waste time and hurt customer experience</span>
					</li>
				</ul>

				<SectionDivider className='mb-10' />
				<h2 className='text-2xl font-semibold tracking-tight font-display mb-4'>How it works</h2>
				<p className='text-muted-foreground leading-relaxed mb-6'>
					SupportFlow Mini routes each ticket through a simple, auditable workflow: submit the ticket, get an AI recommendation, let a human decide, deliver the routing to the team, measure accuracy.
				</p>

				<div className='card divide-y divide-overlay/10 mb-16'>
					{workflow.map((item, i) => (
						<Reveal
							as='div'
							key={item.step}
							delay={Math.min(i, 5) * 0.06}
							y={8}
							className='p-5 grid sm:grid-cols-4 gap-2 sm:gap-4'>
							<p className='text-sm font-semibold text-foreground font-display font-mono'>Step {item.step}</p>
							<p className='text-sm font-semibold text-brand-text sm:col-span-1'>{item.name}</p>
							<p className='text-sm text-muted-foreground sm:col-span-2'>{item.description}</p>
						</Reveal>
					))}
				</div>

				<SectionDivider className='mb-10' />
				<h2 className='text-2xl font-semibold tracking-tight font-display mb-4'>Architecture</h2>
				<p className='text-muted-foreground leading-relaxed mb-6'>
					FastAPI backend with Pydantic validation, SQLite for ticket and event storage, mock-first workflow logic, browser-based review interface, OpenAI for AI recommendation, and webhook integration for delivery. Deterministic evaluation harness measures model accuracy.
				</p>
				<div className='card divide-y divide-overlay/10 mb-16'>
					{architecture.map((row, i) => (
						<Reveal
							as='div'
							key={row.component}
							delay={Math.min(i, 8) * 0.06}
							y={8}
							className='p-5 grid sm:grid-cols-3 gap-2 sm:gap-4'>
							<p className='text-sm font-semibold text-foreground font-display font-mono'>{row.component}</p>
							<p className='text-sm text-muted-foreground sm:col-span-1'>{row.responsibility}</p>
							<p className='text-xs text-muted-foreground/80 italic sm:col-span-1'>{row.detail}</p>
						</Reveal>
					))}
				</div>

				<SectionDivider className='mb-10' />
				<h2 className='text-2xl font-semibold tracking-tight font-display mb-4'>Why mock first</h2>
				<p className='text-muted-foreground leading-relaxed mb-6'>
					Building with mock data first isolates the workflow, routing logic, database behavior, review state and UI integration from model uncertainty. You prove the core works before adding AI.
				</p>
				<p className='text-sm font-medium text-foreground mb-16'>
					Chapter 4 walks through deterministic triage with keyword-matching rules. Once forms, storage, and review all work correctly, Chapter 6 swaps in the real model call. Same data schema, same API contract, same webhook flow.
				</p>

				<SectionDivider className='mb-10' />
				<h2 className='text-2xl font-semibold tracking-tight font-display mb-4'>Implementation approach</h2>
				<div className='grid sm:grid-cols-2 gap-4 mb-16'>
					{keyLearnings.map((item) => (
						<div key={item.title} className='card p-5'>
							<p className='text-sm font-semibold text-foreground font-display mb-2'>{item.title}</p>
							<p className='text-xs text-muted-foreground leading-relaxed'>{item.body}</p>
						</div>
					))}
				</div>


				<SectionDivider className='mb-10' />
				<h2 className='text-2xl font-semibold tracking-tight font-display mb-4'>Stack</h2>
				<div className='flex flex-wrap gap-2 mb-16'>
					{[
						'Python',
						'FastAPI',
						'Uvicorn',
						'Pydantic',
						'SQLite',
						'OpenAI API',
						'Structured Outputs',
						'HTML',
						'JavaScript',
						'CSS',
						'Webhooks',
						'REST API',
						'Dependency Injection',
					].map((tag) => (
						<span key={tag} className={skillPill}>
							{tag}
						</span>
					))}
				</div>

				<SectionDivider className='mb-10' />
				<h2 className='text-2xl font-semibold tracking-tight font-display mb-4'>System capabilities</h2>
				<div className='space-y-3 text-sm text-muted-foreground mb-16'>
					<p className='flex gap-3'>
						<span className='text-brand-text font-bold shrink-0'>✓</span>
						<span>
							<span className='font-semibold text-foreground'>Ticket ingestion</span>: Accept customer support
							tickets via REST API with full validation. Store in SQLite with complete audit trail.
						</span>
					</p>
					<p className='flex gap-3'>
						<span className='text-brand-text font-bold shrink-0'>✓</span>
						<span>
							<span className='font-semibold text-foreground'>AI categorization</span>: Recommend ticket category
							(billing, technical, account, feature request, other) and priority (low, medium, high, urgent) with confidence score.
						</span>
					</p>
					<p className='flex gap-3'>
						<span className='text-brand-text font-bold shrink-0'>✓</span>
						<span>
							<span className='font-semibold text-foreground'>Human review workflow</span>: Web interface for
							reviewers to see recommendation, approve, correct, or reassign. Separate human decision from AI recommendation for audit trail.
						</span>
					</p>
					<p className='flex gap-3'>
						<span className='text-brand-text font-bold shrink-0'>✓</span>
						<span>
							<span className='font-semibold text-foreground'>Webhook delivery</span>: Send approved routing to
							external systems via HTTP with idempotency, retry logic, and error handling.
						</span>
					</p>
					<p className='flex gap-3'>
						<span className='text-brand-text font-bold shrink-0'>✓</span>
						<span>
							<span className='font-semibold text-foreground'>Quality evaluation</span>: Measure model accuracy
							against held-out test set. Track agreement with human reviewers and confidence calibration.
						</span>
					</p>
					<p className='flex gap-3'>
						<span className='text-brand-text font-bold shrink-0'>✓</span>
						<span>
							<span className='font-semibold text-foreground'>Deterministic testing</span>: Mock workflow
							without AI to prove forms, storage, review, and delivery work before adding the model.
						</span>
					</p>
					<p className='flex gap-3'>
						<span className='text-brand-text font-bold shrink-0'>✓</span>
						<span>
							<span className='font-semibold text-foreground'>Production foundation</span>: Pydantic validation,
							dependency injection, environment config, secret boundaries, and comprehensive error handling.
						</span>
					</p>
				</div>

				<div className='card p-8 text-center'>
					<h3 className='text-xl font-semibold tracking-tight font-display mb-2'>
						View the implementation
					</h3>
					<p className='text-sm text-muted-foreground mb-6 max-w-md mx-auto'>
						Complete, production-ready system from API through evaluation. Covers ticket ingestion, AI recommendation, human review workflow, webhook delivery, and quality measurement.
					</p>
					<div className='flex flex-wrap justify-center gap-3'>
						<Link href='https://github.com/brianshimkus/SupportFlow-Mini' target='_blank' rel='noopener noreferrer' className={portfolioLink}>
							Code <FaExternalLinkAlt className='text-[10px]' />
						</Link>
					</div>
				</div>
			</div>
			<Footer />
		</main>
	)
}
