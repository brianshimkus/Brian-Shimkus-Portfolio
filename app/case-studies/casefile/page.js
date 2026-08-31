import Link from 'next/link'
import { FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SectionDivider from '../../components/SectionDivider'
import ProcessSteps from '../../components/ProcessSteps'
import Reveal from '../../components/Reveal'
import { gradientText, portfolioLink, skillPill, btnOutline } from '../../utils'

const title = 'Casefile Case Study'
const description =
	'An end-to-end investigation copilot that ingests claims from multiple disagreeing data sources, resolves entity linkages, computes deterministic risk scores, answers investigator questions with cited evidence, and deploys with hardened security.'

export const metadata = {
	title,
	description,
	alternates: {
		canonical: '/case-studies/casefile',
	},
	openGraph: {
		title,
		description,
		type: 'article',
		images: [
			{
				url: '/images/casefile.png',
				width: 1448,
				height: 1086,
				alt: 'Casefile Investigation Copilot',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title,
		description,
		images: ['/images/casefile.png'],
	},
}

const processSteps = [
	{ label: 'Source Ingestion', tone: 'start' },
	{ label: 'Entity Resolution', tone: 'mid' },
	{ label: 'Risk Scoring', tone: 'mid' },
	{ label: 'RAG & Agent', tone: 'mid' },
	{ label: 'External API Verification', tone: 'end' },
]

const pipelineSteps = [
	'Ingest claim records from five disagreeing internal systems into a unified data model, seeded with known-good claims.',
	'Resolve entity linkages across sources with measured precision, recall, and false-merge rates, routing low-confidence matches to a human review queue.',
	'Compute a deterministic, rule-based risk score for every claim in code, with per-merge audit records explaining every decision.',
	'Build a grounded RAG layer: an agent orchestrates over deterministic core, answers investigator questions with cited evidence and policy documents, never invents claims.',
	'Verify location data against a live geocoding API (Geocodio) with real authentication, retries, and circuit-breaking for production reliability.',
	'Deploy to a real URL with CI/CD, security hardening, PII redaction in logs, encryption, and adversarial testing that names what Casefile is architecturally incapable of doing.',
]

const architecture = [
	{
		component: 'Data Ingestion Layer',
		responsibility: 'Pull claims from five internal systems with conflicting schemas.',
		detail: 'Converts each source into a canonical record type; seeded defects caught.',
	},
	{
		component: 'Entity Resolution',
		responsibility: 'Link records across sources with measured blocking, matching, and review.',
		detail: 'Precision, recall, and false-merge rate tracked. Low-confidence links stay unresolved.',
	},
	{
		component: 'Deterministic Risk Scoring',
		responsibility: 'Compute rule-based risk per claim without ML black boxes.',
		detail: 'Every score is explainable. Per-merge audit trail shows scoring logic.',
	},
	{
		component: 'RAG & Agent Layer',
		responsibility: 'Orchestrate over deterministic core, answer questions with policy citations.',
		detail: 'Agent never hallucinates. All answers traced back to adjuster notes and policy docs.',
	},
	{
		component: 'External API Integration',
		responsibility: 'Verify location details against live Geocodio with auth, retries, circuit-breaking.',
		detail: 'Idempotent writes. Every external API call proven across forced re-runs.',
	},
	{
		component: 'Security & Deployment',
		responsibility: 'Deploy with broken-deploy drill, adversarial testing, PII redaction.',
		detail: 'Security posture includes what Casefile is architecturally incapable of.',
	},
]

const productionWork = [
	{
		title: 'Blocking & matching evaluation',
		body: 'Labeled dataset of claim pairs (should-match / should-not-match) to catch regressions when adding sources or rule changes.',
	},
	{
		title: 'Score calibration',
		body: 'Validate risk scores against real investigator decisions and case outcomes, recalibrate rules to match ground truth.',
	},
	{
		title: 'Query classification',
		body: 'Route questions to the right sub-system: entity lookups, policy checks, score justification, or conversational context.',
	},
	{
		title: 'Conversational memory',
		body: 'Multi-turn dialogue over a single claim, so investigators can ask follow-up questions in context.',
	},
	{
		title: 'Audit trail completeness',
		body: 'Ensure every field, score, and decision is auditable to a source, timestamp, and user for compliance.',
	},
]

const articleJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Article',
	headline: title,
	description,
	image: 'https://www.brianshimkus.com/images/casefile.png',
	url: 'https://www.brianshimkus.com/case-studies/casefile',
	author: {
		'@type': 'Person',
		name: 'Brian Shimkus',
		url: 'https://www.brianshimkus.com',
	},
}

export default function CasefilePage() {
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

				<p className='eyebrow mb-3'>Complete Build &middot; Discovery to Deployment</p>
				<h1 className='text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.05] font-display mb-4'>
					Casefile
					<br />
					<span className={gradientText}>Investigation Copilot</span>
				</h1>
				<p className='text-lg text-foreground mb-8 max-w-2xl'>
					An end-to-end build showcasing the full discovery-to-delivery motion: ingesting claims from five
					disagreeing data sources, resolving entities with measured accuracy, computing deterministic risk
					scores, answering investigator questions with cited evidence, verifying against live external APIs,
					and deploying with production-grade security.
				</p>

				<ProcessSteps steps={processSteps} />

				<div className='flex flex-wrap gap-3 mb-10'>
					<Link href='/casefile-github' target='_blank' rel='noopener noreferrer' className={btnOutline}>
						View the Code <FaExternalLinkAlt className='text-xs' />
					</Link>
				</div>

				<div className='card p-6 mb-16'>
					<p className='text-xs font-semibold uppercase tracking-wider text-brand-text mb-2'>Status: In Progress</p>
					<p className='text-sm text-muted-foreground leading-relaxed'>
						A complete 10-phase build tutorial demonstrating discovery-brief through live rehearsal. Uses synthetic
						claim data; no real customer or PII data in any phase.
					</p>
				</div>

				<SectionDivider className='mb-10' />
				<h2 className='text-2xl font-semibold tracking-tight font-display mb-4'>The problem</h2>
				<p className='text-muted-foreground leading-relaxed mb-4'>
					Insurance claim investigation is a multi-day, manual process. Claim data lives in five disagreeing internal
					systems (billing, medical, property, liability, fraud detection). Investigators must:
				</p>
				<ul className='space-y-2 text-muted-foreground mb-16'>
					<li className='flex gap-3'>
						<span className='text-brand-text shrink-0'>•</span>
						<span>Manually look up the same claim across systems and reconcile contradictions</span>
					</li>
					<li className='flex gap-3'>
						<span className='text-brand-text shrink-0'>•</span>
						<span>Check location details by hand against maps and weather databases</span>
					</li>
					<li className='flex gap-3'>
						<span className='text-brand-text shrink-0'>•</span>
						<span>Compute risk by reading policies and guidelines, prone to inconsistency</span>
					</li>
					<li className='flex gap-3'>
						<span className='text-brand-text shrink-0'>•</span>
						<span>Answer follow-up questions by re-digging through the same records</span>
					</li>
				</ul>

				<SectionDivider className='mb-10' />
				<h2 className='text-2xl font-semibold tracking-tight font-display mb-4'>How it works</h2>
				<p className='text-muted-foreground leading-relaxed mb-6'>
					Casefile unifies claim data, resolves linkages, computes risk deterministically, and answers questions
					with grounded evidence. Every decision is auditable.
				</p>
				<ol className='space-y-3 mb-16'>
					{pipelineSteps.map((step, i) => (
						<Reveal
							as='li'
							key={i}
							delay={Math.min(i, 6) * 0.06}
							y={8}
							className='flex gap-4 text-sm text-muted-foreground leading-relaxed'>
							<span className='shrink-0 text-brand-text font-bold font-display'>
								{String(i + 1).padStart(2, '0')}
							</span>
							{step}
						</Reveal>
					))}
				</ol>

				<SectionDivider className='mb-10' />
				<h2 className='text-2xl font-semibold tracking-tight font-display mb-4'>Architecture</h2>
				<p className='text-muted-foreground leading-relaxed mb-6'>
					Python backend with FastAPI, LangChain for orchestration, deterministic risk logic, RAG over policy
					documents, external API integration with Geocodio, and React frontend for investigator workflows.
				</p>
				<div className='card divide-y divide-overlay/10 mb-16'>
					{architecture.map((row, i) => (
						<Reveal
							as='div'
							key={row.component}
							delay={Math.min(i, 6) * 0.06}
							y={8}
							className='p-5 grid sm:grid-cols-3 gap-2 sm:gap-4'>
							<p className='text-sm font-semibold text-foreground font-display font-mono'>{row.component}</p>
							<p className='text-sm text-muted-foreground sm:col-span-1'>{row.responsibility}</p>
							<p className='text-xs text-muted-foreground/80 italic sm:col-span-1'>{row.detail}</p>
						</Reveal>
					))}
				</div>

				<SectionDivider className='mb-10' />
				<h2 className='text-2xl font-semibold tracking-tight font-display mb-4'>Why deterministic risk scoring</h2>
				<p className='text-muted-foreground leading-relaxed mb-6'>
					Machine learning models are fast but inscrutable; investigators need to understand why a claim scored high.
					Casefile uses rule-based scoring: policy rules (age limits, coverage verification) map directly to risk.
					Every score is explainable because the logic is code, not weights in a neural network.
				</p>
				<p className='text-sm font-medium text-foreground mb-16'>
					The tradeoff is effort: building comprehensive rules takes more upfront work than feeding data to an ML
					pipeline. But in regulated insurance, explainability beats accuracy.
				</p>

				<SectionDivider className='mb-10' />
				<h2 className='text-2xl font-semibold tracking-tight font-display mb-4'>
					What I&apos;d do for production
				</h2>
				<p className='text-muted-foreground leading-relaxed mb-6'>
					Casefile is end-to-end but not production-hardened; the build tutorial emphasizes judgment and trade-offs,
					not perfection.
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
						'Python',
						'FastAPI',
						'LangChain',
						'OpenAI',
						'Pinecone',
						'Geocodio API',
						'React',
						'Terraform',
						'PostgreSQL',
					].map((tag) => (
						<span key={tag} className={skillPill}>
							{tag}
						</span>
					))}
				</div>

				<div className='card p-8 text-center'>
					<h3 className='text-xl font-semibold tracking-tight font-display mb-2'>See the full build</h3>
					<p className='text-sm text-muted-foreground mb-6 max-w-md mx-auto'>
						The complete tutorial walks through all 10 phases: discovery brief, data ingestion, entity resolution,
						risk scoring, RAG layer, external API integration, deployment, security, technical communication, and
						live rehearsal.
					</p>
					<div className='flex flex-wrap justify-center gap-3'>
						<Link href='/casefile-github' target='_blank' rel='noopener noreferrer' className={portfolioLink}>
							Code <FaExternalLinkAlt className='text-[10px]' />
						</Link>
					</div>
				</div>
			</div>
			<Footer />
		</main>
	)
}
