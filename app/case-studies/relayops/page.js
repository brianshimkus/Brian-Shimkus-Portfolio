import Link from 'next/link'
import { FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SectionDivider from '../../components/SectionDivider'
import ProcessSteps from '../../components/ProcessSteps'
import Reveal from '../../components/Reveal'
import { gradientText, portfolioLink, skillPill, btnOutline } from '../../utils'

const title = 'RelayOps Case Study'
const description =
	'A production incident workflow platform with grounded AI diagnosis. Process financial integration incidents through eight quality gates with deterministic recovery, built end-to-end from empty folder to portfolio demo.'

export const metadata = {
	title,
	description,
	alternates: {
		canonical: '/case-studies/relayops',
	},
	openGraph: {
		title,
		description,
		type: 'article',
		images: [
			{
				url: '/images/relayops.png',
				width: 1448,
				height: 1086,
				alt: 'RelayOps Production Incident Workflow',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title,
		description,
		images: ['/images/relayops.png'],
	},
}

const processSteps = [
	{ label: 'End-to-End Slice', tone: 'start' },
	{ label: 'Scenario Engine', tone: 'mid' },
	{ label: 'Integrations & Retries', tone: 'mid' },
	{ label: 'Grounded Diagnosis', tone: 'mid' },
	{ label: 'Safe Actions & MCP', tone: 'mid' },
	{ label: 'Evaluation & Gates', tone: 'mid' },
	{ label: 'Operations & Deploy', tone: 'end' },
]

const gates = [
	{
		number: '0',
		name: 'Environment',
		criteria: 'Git, Docker, Python, Node.js, pnpm report usable versions',
	},
	{
		number: '1',
		name: 'Vertical Slice',
		criteria: 'Create incident through API, store in PostgreSQL, read it back in browser',
	},
	{
		number: '2',
		name: 'Simulator',
		criteria: 'Same seed reproduces same incident, evidence and recovery condition',
	},
	{
		number: '3',
		name: 'Integrations',
		criteria: 'Retries, idempotency and failure injection visible in incident timeline',
	},
	{
		number: '4',
		name: 'Diagnosis',
		criteria: 'Model returns schema-valid hypotheses with citation IDs in evidence set',
	},
	{
		number: '5',
		name: 'Safe Action',
		criteria: 'No consequential tool runs without exact, unused approval-bound payload',
	},
	{
		number: '6',
		name: 'Evaluation',
		criteria: 'Holdout quality gates pass, unsafe actions remain exactly zero',
	},
	{
		number: '7',
		name: 'Operations',
		criteria: 'System survives model outage and remains usable in read-only degraded mode',
	},
]

const architecture = [
	{
		component: 'Next.js Web App',
		responsibility: 'Operator console: displays incidents, evidence, ranked hypotheses, approvals and recovery.',
		detail: 'Typed API client with schemas validated by Pydantic on the backend.',
	},
	{
		component: 'FastAPI Service',
		responsibility: 'State machine, tenant context, authorization, audit log and REST API.',
		detail: 'Dependency injection provides database session to every route.',
	},
	{
		component: 'PostgreSQL',
		responsibility: 'Persists incidents, evidence, proposals, approvals and audit events.',
		detail: 'pgvector extension supports runbook retrieval with stable citation identifiers.',
	},
	{
		component: 'Scenario Engine',
		responsibility: 'Creates deterministic incident families with known answers and repeatable seeds.',
		detail: 'Fixtures built into the evaluator; the model proposes, deterministic core checks.',
	},
	{
		component: 'AI Diagnosis Service',
		responsibility: 'Returns typed hypotheses whose citation IDs exist in evidence set.',
		detail: 'Prompts use ground truth from scenarios, never the answer key.',
	},
	{
		component: 'MCP Tools',
		responsibility: 'Typed interface to sandbox operations: rotate tokens, repair idempotency.',
		detail: 'Tool contracts include permissions and side-effect control.',
	},
	{
		component: 'Evaluation Harness',
		responsibility: 'Scores 40 versioned scenarios and blocks releases when quality or safety gates fail.',
		detail: 'Metrics, holdouts and release discipline prevent model regressions.',
	},
	{
		component: 'Operations Layer',
		responsibility: 'Docker, CI, telemetry, load tests, outage drills and recovery evidence.',
		detail: 'Production ownership wired through every phase, not bolted on at the end.',
	},
]

const productionWork = [
	{
		title: 'Eight incident families',
		body: 'Expired broker token, missing data entitlement, duplicate payment webhook, settlement schema drift, reconciliation mismatch, processor retry storm, audit pipeline interruption, model provider outage, each with known root cause, approved recovery and deterministic check.',
	},
	{
		title: 'Grounded diagnosis',
		body: 'AI turns evidence into ranked hypotheses without inventing claims. Every hypothesis cites evidence IDs. The model never sees root cause, approved tools or recovery condition.',
	},
	{
		title: 'Safe action proposals',
		body: 'Tool proposals include exact arguments bound to an approval record. Execution reads approvals from the database. The executor cannot run a tool outside its approval contract.',
	},
	{
		title: 'Deterministic scenario engine',
		body: 'Same seed reproduces the same incident, evidence timeline, and recovery check. Injection happens at the evaluator level. The application sees only observable, repeatable synthetic data.',
	},
	{
		title: 'Production readiness gates',
		body: 'Every gate verifies a specific capability: environment setup, vertical slice, deterministic repetition, real integrations, grounded diagnosis, safe actions, quality evaluation and operational resilience.',
	},
]

const articleJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Article',
	headline: title,
	description,
	image: 'https://www.brianshimkus.com/images/relayops.png',
	url: 'https://www.brianshimkus.com/case-studies/relayops',
	author: {
		'@type': 'Person',
		name: 'Brian Shimkus',
		url: 'https://www.brianshimkus.com',
	},
}

export default function RelayOpsPage() {
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

				<p className='eyebrow mb-3'>Complete Build Tutorial &middot; Signal to Verified Recovery</p>
				<h1 className='text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.05] font-display mb-4'>
					RelayOps
					<br />
					<span className={gradientText}>Incident Workflow Platform</span>
				</h1>
				<p className='text-lg text-foreground mb-8 max-w-2xl'>
					A production incident workflow with grounded AI diagnosis. Process financial integration incidents
					through eight quality gates: environment, vertical slice, simulator, integrations, diagnosis, safe
					actions, evaluation, and operations. Deterministic recovery, built end-to-end from empty folder
					to working portfolio demo.
				</p>

				<ProcessSteps steps={processSteps} />

				<div className='flex flex-wrap gap-3 mb-10'>
					<Link href='https://github.com/brianshimkus/RelayOps' target='_blank' rel='noopener noreferrer' className={btnOutline}>
						View Code <FaExternalLinkAlt className='text-xs' />
					</Link>
				</div>

				<div className='card p-6 mb-16'>
					<p className='text-xs font-semibold uppercase tracking-wider text-brand-text mb-2'>Status: Complete Build</p>
					<p className='text-sm text-muted-foreground leading-relaxed'>
						A 6-week core build + 2-week hardening and packaging tutorial. Covers all eight no-skip gates, deterministic
						testing, production deployment, and operational resilience. Uses synthetic financial data; no real customer or
						credentials in any phase.
					</p>
				</div>

				<SectionDivider className='mb-10' />
				<h2 className='text-2xl font-semibold tracking-tight font-display mb-4'>The problem</h2>
				<p className='text-muted-foreground leading-relaxed mb-4'>
					Financial integration incidents are chaotic and slow to resolve. When a broker token expires, data entitlement
					fails, or a payment webhook duplicates, operators dig through logs manually:
				</p>
				<ul className='space-y-2 text-muted-foreground mb-16'>
					<li className='flex gap-3'>
						<span className='text-brand-text shrink-0'>•</span>
						<span>Identify the root cause by reading logs and system state</span>
					</li>
					<li className='flex gap-3'>
						<span className='text-brand-text shrink-0'>•</span>
						<span>Design the recovery action (rotate tokens, replay webhooks, repair data)</span>
					</li>
					<li className='flex gap-3'>
						<span className='text-brand-text shrink-0'>•</span>
						<span>Execute it against live systems, hoping the repair is idempotent</span>
					</li>
					<li className='flex gap-3'>
						<span className='text-brand-text shrink-0'>•</span>
						<span>Verify recovery actually worked and didn&apos;t make things worse</span>
					</li>
				</ul>

				<SectionDivider className='mb-10' />
				<h2 className='text-2xl font-semibold tracking-tight font-display mb-4'>How it works</h2>
				<p className='text-muted-foreground leading-relaxed mb-6'>
					RelayOps ingests incidents, surfaces ranked root-cause hypotheses, proposals safe recovery actions with explicit
					approval, and verifies recovery through deterministic checks. Every stage has a gate; you pass only when that
					capability is proven.
				</p>

				<div className='card divide-y divide-overlay/10 mb-16'>
					{gates.map((gate, i) => (
						<Reveal
							as='div'
							key={gate.number}
							delay={Math.min(i, 8) * 0.06}
							y={8}
							className='p-5 grid sm:grid-cols-4 gap-2 sm:gap-4'>
							<p className='text-sm font-semibold text-foreground font-display font-mono'>Gate {gate.number}</p>
							<p className='text-sm font-semibold text-brand-text sm:col-span-1'>{gate.name}</p>
							<p className='text-sm text-muted-foreground sm:col-span-2'>{gate.criteria}</p>
						</Reveal>
					))}
				</div>

				<SectionDivider className='mb-10' />
				<h2 className='text-2xl font-semibold tracking-tight font-display mb-4'>Architecture</h2>
				<p className='text-muted-foreground leading-relaxed mb-6'>
					Next.js frontend, FastAPI backend with SQLAlchemy models, PostgreSQL with pgvector for evidence retrieval,
					deterministic scenario engine, grounded AI diagnosis, MCP tools for safe actions, and evaluation harness with
					quality gates that block releases on model regression.
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
				<h2 className='text-2xl font-semibold tracking-tight font-display mb-4'>Why deterministic scenarios</h2>
				<p className='text-muted-foreground leading-relaxed mb-6'>
					A human tester or external SLA could inject incidents, but you lose reproducibility. RelayOps seeds scenarios
					with known answers, injects them at the evaluator level, and keeps the application seeing only observable,
					repeatable synthetic data. The model never sees expected root cause, approved tools, or recovery condition.
				</p>
				<p className='text-sm font-medium text-foreground mb-16'>
					Every scenario verifies that the model can rank real root causes above plausible decoys, and that proposed
					actions stay within the approval contract. Quality gates ensure the model never regresses.
				</p>

				<SectionDivider className='mb-10' />
				<h2 className='text-2xl font-semibold tracking-tight font-display mb-4'>
					Eight no-skip production gates
				</h2>
				<p className='text-muted-foreground leading-relaxed mb-6'>
					Each gate verifies a specific piece of production readiness. You cannot skip a gate and you cannot soft-fail one.
					The tutorial walks through all eight.
				</p>
				<div className='grid sm:grid-cols-2 gap-4 mb-6'>
					{productionWork.map((item) => (
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
						'TypeScript',
						'React',
						'Next.js',
						'Python',
						'FastAPI',
						'PostgreSQL',
						'pgvector',
						'OpenAI',
						'LangChain',
						'MCP',
						'Docker',
						'CI/CD',
						'Observability',
					].map((tag) => (
						<span key={tag} className={skillPill}>
							{tag}
						</span>
					))}
				</div>

				<div className='card p-8 text-center'>
					<h3 className='text-xl font-semibold tracking-tight font-display mb-2'>
						See the complete build
					</h3>
					<p className='text-sm text-muted-foreground mb-6 max-w-md mx-auto'>
						The complete tutorial covers every phase from environment setup through portfolio-ready deployment. Real
						production practices built in from week one, not retrofitted at the end.
					</p>
					<div className='flex flex-wrap justify-center gap-3'>
						<Link href='https://github.com/brianshimkus/RelayOps' target='_blank' rel='noopener noreferrer' className={portfolioLink}>
							Code <FaExternalLinkAlt className='text-[10px]' />
						</Link>
					</div>
				</div>
			</div>
			<Footer />
		</main>
	)
}
