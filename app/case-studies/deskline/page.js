import Link from 'next/link'
import { FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SectionDivider from '../../components/SectionDivider'
import ProcessSteps from '../../components/ProcessSteps'
import Reveal from '../../components/Reveal'
import { gradientText, portfolioLink, skillPill, btnOutline } from '../../utils'

const title = 'Deskline Case Study'
const description =
	'A programmable voice IVR system handling inbound calls with DTMF menus and voice commands. Built end-to-end with Python FastAPI, Telnyx Voice API, SQLite state management, webhook verification, and deterministic call testing.'

export const metadata = {
	title,
	description,
	alternates: {
		canonical: '/case-studies/deskline',
	},
	openGraph: {
		title,
		description,
		type: 'article',
		images: [
			{
				url: '/images/deskline.png',
				width: 1448,
				height: 1086,
				alt: 'Deskline Programmable Voice IVR System',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title,
		description,
		images: ['/images/deskline.png'],
	},
}

const processSteps = [
	{ label: 'Project Setup', tone: 'start' },
	{ label: 'FastAPI Server', tone: 'mid' },
	{ label: 'Webhook Verification', tone: 'mid' },
	{ label: 'SQLite State Machine', tone: 'mid' },
	{ label: 'Voice Commands', tone: 'mid' },
	{ label: 'Call Controller Logic', tone: 'mid' },
	{ label: 'Live Acceptance Testing', tone: 'end' },
]

const gates = [
	{
		number: '0',
		name: 'Environment Setup',
		criteria: 'Python 3.12, UV, Telnyx SDK, Cloudflare tunneling configured and tested',
	},
	{
		number: '1',
		name: 'Health Endpoint',
		criteria: 'FastAPI server returns HTTP 200 with product status from localhost:8788',
	},
	{
		number: '2',
		name: 'Configuration & Secrets',
		criteria: 'Telnyx API credentials loaded from .env, webhook URL updated, tunnel stable',
	},
	{
		number: '3',
		name: 'Webhook Verification',
		criteria: 'Telnyx signature validated using public key, call.initiated events logged and verified',
	},
	{
		number: '4',
		name: 'Call Initialization',
		criteria: 'Incoming call persisted to SQLite with phase, state, token and event tracking',
	},
	{
		number: '5',
		name: 'Voice Playback',
		criteria: 'Greeting audio plays, gather command returns DTMF digits to webhook',
	},
	{
		number: '6',
		name: 'Menu State Machine',
		criteria: 'Menu prompts gather keypad input, call controller routes to service offerings',
	},
	{
		number: '7',
		name: 'Call Completion',
		criteria: 'Closing prompt plays, hangup command received, call marked ended with full audit trail',
	},
]

const architecture = [
	{
		component: 'FastAPI Server',
		responsibility: 'HTTP webhook handler, health endpoint, settings validation, and request routing.',
		detail: 'Receives inbound webhooks from Telnyx with signature verification.',
	},
	{
		component: 'Telnyx Voice API',
		responsibility: 'Manages phone connection, audio playback, DTMF detection, and call lifecycle.',
		detail: 'Webhook v2 API, bidirectional HTTP control with deduplication window.',
	},
	{
		component: 'SQLite Database',
		responsibility: 'Persists call state, events, commands, and activity audit log across requests.',
		detail: 'Four tables: calls (state machine), events (verified), commands (idempotent), activity (readable).',
	},
	{
		component: 'Settings & Configuration',
		responsibility: 'Loads Telnyx credentials, webhook URL, voice settings, and business policies from .env.',
		detail: 'Dataclass with validation, from_env() factory for safe secret handling.',
	},
	{
		component: 'Webhook Reader',
		responsibility: 'Parses Telnyx payloads, verifies signatures, handles event deduplication.',
		detail: 'Pydantic models for Payload and Event, SDK signature verification.',
	},
	{
		component: 'Call Engine',
		responsibility: 'State machine: processes events through phone phases (new, answer, menu, closing, ended).',
		detail: 'One worker loop, explicit phase transitions, recovery for interrupted commands.',
	},
	{
		component: 'Telnyx Command Layer',
		responsibility: 'Async HTTP client for voice commands: speak, gather, answer, hangup.',
		detail: 'Retry logic, timeout handling, command ID tracking for deduplication.',
	},
	{
		component: 'Business Logic',
		responsibility: 'Knowledge base: shop hours, diagnostic fee, service offerings. No LLM or RAG.',
		detail: 'Lookup tables only; decisions are rule-based policy answers.',
	},
]

const productionWork = [
	{
		title: 'Bidirectional phone control',
		body: 'FastAPI receives call events from Telnyx, sends commands back via HTTP. Telnyx handles the actual call connection, audio, and DTMF detection. Your Python code decides the workflow.',
	},
	{
		title: 'Stateful call tracking',
		body: 'SQLite stores call phase, current menu token, DTMF input, and full activity log. Each webhook updates a persisted call record, not local variables. Restart at any point.',
	},
	{
		title: 'Webhook signature verification',
		body: 'Every webhook from Telnyx is cryptographically signed. Verify the signature using the account public key before trusting event data.',
	},
	{
		title: 'Command idempotency',
		body: 'Telnyx has a 60-second deduplication window. Use unique command IDs and track command status in SQLite. Retry is safe; no double-charging or double-speaking.',
	},
	{
		title: 'Deterministic testing without calls',
		body: 'Rehearsal mode: press DTMF locally, engine processes events to completion without touching Telnyx. Full workflow test without call credit.',
	},
]

const articleJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Article',
	headline: title,
	description,
	image: 'https://www.brianshimkus.com/images/deskline.png',
	url: 'https://www.brianshimkus.com/case-studies/deskline',
	author: {
		'@type': 'Person',
		name: 'Brian Shimkus',
		url: 'https://www.brianshimkus.com',
	},
}

export default function DesklinePage() {
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

				<p className='eyebrow mb-3'>Complete Build Tutorial · Incoming Call to Menu Response</p>
				<h1 className='text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.05] font-display mb-4'>
					Deskline
					<br />
					<span className={gradientText}>Programmable Voice IVR</span>
				</h1>
				<p className='text-lg text-foreground mb-8 max-w-2xl'>
					An inbound phone menu system handling real Telnyx voice calls. Route customers through DTMF keypad
					prompts, speak business facts, and collect menu decisions. Built end-to-end from setup to live call
					with webhook verification, SQLite state management, deterministic testing, and eight quality gates.
				</p>

				<ProcessSteps steps={processSteps} />

				<div className='flex flex-wrap gap-3 mb-10'>
					<a
						href='https://github.com/brianshimkus/Deskline'
						target='_blank'
						rel='noopener noreferrer'
						className={btnOutline}>
						View Code <FaExternalLinkAlt className='text-xs' />
					</a>
				</div>

				<div className='card p-6 mb-16'>
					<p className='text-xs font-semibold uppercase tracking-wider text-brand-text mb-2'>Status: Complete Build</p>
					<p className='text-sm text-muted-foreground leading-relaxed'>
						A 1-week step-by-step tutorial covering setup, webhook verification, state management, voice commands,
						and call testing. Uses a fictional Brightside Device Repair shop; all data is synthetic and testing happens
						in rehearsal mode before first live call.
					</p>
				</div>

				<SectionDivider className='mb-10' />
				<h2 className='text-2xl font-semibold tracking-tight font-display mb-4'>The problem</h2>
				<p className='text-muted-foreground leading-relaxed mb-4'>
					Inbound phone queues and menu systems are painful to build:
				</p>
				<ul className='space-y-2 text-muted-foreground mb-16'>
					<li className='flex gap-3'>
						<span className='text-brand-text shrink-0'>•</span>
						<span>Phone state spans multiple webhook events; no single request holds context</span>
					</li>
					<li className='flex gap-3'>
						<span className='text-brand-text shrink-0'>•</span>
						<span>Webhook order is not guaranteed; events may arrive out of sequence</span>
					</li>
					<li className='flex gap-3'>
						<span className='text-brand-text shrink-0'>•</span>
						<span>Testing requires real phone calls; unit tests are not enough</span>
					</li>
					<li className='flex gap-3'>
						<span className='text-brand-text shrink-0'>•</span>
						<span>Billing per call; mistakes are expensive to debug live</span>
					</li>
				</ul>

				<SectionDivider className='mb-10' />
				<h2 className='text-2xl font-semibold tracking-tight font-display mb-4'>How it works</h2>
				<p className='text-muted-foreground leading-relaxed mb-6'>
					Deskline runs a FastAPI server that listens for Telnyx webhooks. When a call comes in, it verifies the
					signature, persists the call to SQLite, and runs a state machine through discrete phases: new call,
					answer, gather menu input, process answer, speak closing, hangup. Each phase waits for confirmation
					before moving forward. Commands are tracked for idempotency; the same command ID never runs twice.
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
					FastAPI server receiving signed webhooks from Telnyx Voice API, persisting call state to SQLite,
					managing a state machine for call phases, sending voice commands (answer, gather, speak) back to
					Telnyx, and tracking all activity in an audit log. Cloudflare Tunnels expose the local server to
					Telnyx webhook delivery.
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
				<h2 className='text-2xl font-semibold tracking-tight font-display mb-4'>Why state machines for phone</h2>
				<p className='text-muted-foreground leading-relaxed mb-6'>
					Phone calls are inherently stateful. A call arrives, you answer it, play a prompt, gather DTMF, respond
					to input, then hang up. Without an explicit state machine and persisted call record, you end up with
					callback soup: nested async handlers, race conditions on incoming events, and no way to resume if the
					server restarts.
				</p>
				<p className='text-sm font-medium text-foreground mb-16'>
					Deskline uses discrete call phases stored in SQLite. Every webhook reads the current phase, updates
					call state, and queues the next command. If a webhook arrives out of order or Telnyx times out, the
					call record already exists; restart or retry safely.
				</p>

				<SectionDivider className='mb-10' />
				<h2 className='text-2xl font-semibold tracking-tight font-display mb-4'>What it teaches</h2>

				<div className='card divide-y divide-overlay/10 mb-16'>
					{productionWork.map((item, i) => (
						<Reveal
							as='div'
							key={item.title}
							delay={Math.min(i, 8) * 0.06}
							y={8}
							className='p-5 grid sm:grid-cols-3 gap-2 sm:gap-4'>
							<p className='text-sm font-semibold text-foreground font-display sm:col-span-1'>{item.title}</p>
							<p className='text-sm text-muted-foreground sm:col-span-2'>{item.body}</p>
						</Reveal>
					))}
				</div>

				<SectionDivider className='mb-10' />
				<h2 className='text-2xl font-semibold tracking-tight font-display mb-4'>Skills in focus</h2>
				<div className='flex flex-wrap gap-3 mb-16'>
					{[
						'Python',
						'FastAPI',
						'Async/Await',
						'SQLite',
						'Pydantic Validation',
						'Webhooks',
						'State Machines',
						'Telnyx Voice API',
						'Signature Verification',
						'Idempotency Keys',
						'Deterministic Testing',
						'Error Recovery',
					].map(skill => (
						<span key={skill} className={skillPill}>
							{skill}
						</span>
					))}
				</div>
			</div>
			<Footer />
		</main>
	)
}
