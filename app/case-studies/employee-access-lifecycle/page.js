import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SectionDivider from '../../components/SectionDivider'
import { gradientText, skillPill, btnCta } from '../../utils'

const title = 'Employee Access Lifecycle Assistant Case Study'
const description =
	'An independent Solutions Engineering case study: a deterministic policy engine that evaluates employee role changes, routes risky access combinations for security review, and provisions through mock connectors with a full audit trail.'

export const metadata = {
	title,
	description,
	alternates: {
		canonical: '/case-studies/employee-access-lifecycle',
	},
	openGraph: {
		title,
		description,
		type: 'article',
		images: [
			{
				url: '/images/employee-access-lifecycle.png',
				width: 1448,
				height: 1086,
				alt: 'Employee Access Lifecycle Assistant',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title,
		description,
		images: ['/images/employee-access-lifecycle.png'],
	},
}

const processSteps = [
	{ label: 'Trigger', tone: 'start' },
	{ label: 'Evaluate', tone: 'mid' },
	{ label: 'Approve', tone: 'mid' },
	{ label: 'Provision', tone: 'mid' },
	{ label: 'Audit', tone: 'end' },
]

const assumptions = [
	{ value: '65', label: 'Joiner, mover, and leaver events per month' },
	{ value: '7', label: 'Downstream access decisions per event' },
	{ value: '48 min', label: 'Manual IT effort per lifecycle event' },
	{ value: '14%', label: 'Require manager, security, or app-owner review' },
]

const workflowSteps = [
	'A synthetic HR event arrives and is matched to an immutable employee identifier and source record.',
	'Required attributes are validated, then the policy engine calculates the grant, retain, remove, and prohibit set for the role change.',
	'Standard changes route to manager approval; risky or separation-of-duties combinations route to mandatory security review.',
	'An authorized approver approves the exact access difference, binding the decision to a policy version and a decision hash.',
	'At the effective time, mock connector commands execute idempotently against identity, SaaS, and service-desk adapters.',
	'Downstream state is verified and confirmed before the event is marked complete; partial failures stay visible and retryable rather than silently succeeding.',
	'If HR cancels or changes the role move before the effective time, the prior approval is invalidated and re-evaluated. A stale approval is never executed.',
]

const architecture = [
	{
		component: 'FastAPI App',
		responsibility: 'State machine, policy engine, and approval service.',
		limit: 'Single process; synthetic tenant.',
	},
	{
		component: 'Policy Store',
		responsibility: 'Versioned RBAC, attribute, and separation-of-duties rules.',
		limit: 'Deterministic JSON rules, not a policy editor.',
	},
	{
		component: 'Mock Connectors',
		responsibility: 'Identity provider, SaaS apps, and service desk adapters.',
		limit: 'Least-privilege test accounts, no production tenant.',
	},
	{
		component: 'Audit Store',
		responsibility: 'Append-only history of inputs, decisions, approvals, and outcomes.',
		limit: 'No production retention program.',
	},
	{
		component: 'Optional AI Adapter',
		responsibility: 'Classifies free-text manager justification and drafts rationale.',
		limit: 'Advisory only; never authoritative over access.',
	},
	{
		component: 'Review UI',
		responsibility: 'Shows the access difference, risk evidence, and approve/reject controls.',
		limit: 'No production operator authentication.',
	},
]

const nonNegotiables = [
	'Match identity with deterministic identifiers and source rules; never guess by name similarity.',
	'Keep role bundles as versioned, reviewable, and testable RBAC policy.',
	'Route separation-of-duties conflicts to a deterministic deny or mandatory extra approval, never to model wording.',
	'Let AI classify free-text manager justification, but only as advisory input to human review.',
	'Require application code and explicit authorization for every connector action; the model never grants access directly.',
	'Block all connector actions until approval is bound to the exact decision set.',
	'Record policy version, approver, decision hash, and connector result for every transition, for audit.',
]

const articleJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Article',
	headline: title,
	description,
	image: 'https://www.brianshimkus.dev/images/employee-access-lifecycle.png',
	url: 'https://www.brianshimkus.dev/case-studies/employee-access-lifecycle',
	author: {
		'@type': 'Person',
		name: 'Brian Shimkus',
		url: 'https://www.brianshimkus.dev',
	},
}

export default function EmployeeAccessLifecyclePage() {
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

				<p className='eyebrow mb-3'>Independent Portfolio Project &middot; Identity &amp; Security Operations</p>
				<h1 className='text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.05] font-display mb-4'>
					Identity &amp; Security Operations
					<br />
					<span className={gradientText}>Employee Access Lifecycle Assistant</span>
				</h1>
				<p className='text-lg text-foreground mb-8 max-w-2xl'>
					A lean, interview-ready case study for a simulated employee role-change engagement
					across HR, IT, security, and application owners: one employee role change, from HR
					signal to verified and auditable access.
				</p>

				<div className='flex flex-wrap items-center gap-2 mb-10'>
					{processSteps.map((step) => (
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
						exercise based on public identity-lifecycle patterns. It does not represent Okta,
						Microsoft, any employer, or any proprietary architecture or security control.
					</p>
				</div>

				<SectionDivider className='mb-10' />
				<h2 className='text-2xl font-semibold tracking-tight font-display mb-4'>The problem</h2>
				<p className='text-muted-foreground leading-relaxed mb-6'>
					<strong className='text-foreground'>AtlasPoint Software</strong> is a fictional,
					900-person B2B software company with a cloud HR system, an identity provider, a service
					desk, and roughly 35 commonly managed SaaS applications. Role changes often add new
					access without consistently removing old access. Application owners use different
					approval paths, and evidence of what happened is scattered across tickets, emails, and
					administrator logs.
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
					The demonstration centers on one employee changing from Sales Development
					Representative to Account Executive: a visible state machine that makes approval,
					partial success, verification, retry, and audit behavior understandable to both
					technical and nontechnical stakeholders.
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
					Say every limitation plainly. The project demonstrates policy design and workflow
					reasoning, not production identity security: no passwords, no production directory, no
					live credentials, and no claim to be an identity provider or governance platform.
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
					Use deterministic policy for access; use AI only where judgment is bounded. A language
					model may help interpret or explain, but it never becomes the authority that grants
					access.
				</p>
				<ul className='grid sm:grid-cols-2 gap-3 mb-6'>
					{nonNegotiables.map((rule) => (
						<li key={rule} className='card p-4 text-sm text-muted-foreground leading-relaxed'>
							{rule}
						</li>
					))}
				</ul>
				<p className='text-sm font-medium text-foreground mb-16'>
					The safest default for a mover is not &ldquo;keep everything and add more.&rdquo; It is
					&ldquo;re-evaluate every entitlement against current justification.&rdquo;
				</p>

				<SectionDivider className='mb-10' />
				<h2 className='text-2xl font-semibold tracking-tight font-display mb-4'>
					How this will be demonstrated
				</h2>
				<p className='text-muted-foreground leading-relaxed mb-6'>
					The finished deliverable pairs a seven-minute customer-facing demo (the buyer&apos;s
					operating problem, one complete mover event, a pressure-tested risky scenario, and a
					proposed next step) with a twelve-minute technical walkthrough (event contracts, state,
					policy, approval, adapters, reliability, audit, the AI boundary, and the production
					path). It ships alongside the presales artifacts that support a real proof-of-value: a
					discovery guide, a stakeholder map, a security readiness brief, and a POV charter with a
					scorecard.
				</p>
				<div className='flex flex-wrap gap-2 mb-16'>
					{[
						'Discovery Guide',
						'Stakeholder Map',
						'Security Readiness',
						'POV Charter',
						'Demo Script',
					].map((tag) => (
						<span key={tag} className={skillPill}>
							{tag}
						</span>
					))}
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
