import Link from 'next/link'
import { FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import SectionDivider from '../../components/SectionDivider'
import TrackedLink from '../../components/TrackedLink'
import ProcessSteps from '../../components/ProcessSteps'
import Reveal from '../../components/Reveal'
import { gradientText, portfolioLink, skillPill, btnCta, btnOutline } from '../../utils'

const title = 'Salesforce Intelligence Case Study'
const description =
	'A retrieval-augmented chat assistant built on live Salesforce data, answering natural-language questions about accounts, cases, and opportunities with sourced, grounded answers.'

export const metadata = {
	title,
	description,
	alternates: {
		canonical: '/case-studies/salesforce-intelligence',
	},
	openGraph: {
		title,
		description,
		type: 'article',
		images: [
			{
				url: '/images/salesforce-rag.png',
				width: 1448,
				height: 1086,
				alt: 'Salesforce Intelligence',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title,
		description,
		images: ['/images/salesforce-rag.png'],
	},
}

const processSteps = [
	{ label: 'CRM Data', tone: 'start' },
	{ label: 'Document Transformation', tone: 'mid' },
	{ label: 'Embeddings', tone: 'mid' },
	{ label: 'Vector Retrieval', tone: 'mid' },
	{ label: 'Grounded Answer', tone: 'end' },
]

const pipelineSteps = [
	'Pull Cases, Accounts, and Opportunities from Salesforce via SOQL.',
	'Convert each structured record into a plain-English paragraph, since embedding models work on natural language, not raw JSON, plus a matching metadata dict (type, amount, is_closed) for structured filtering later.',
	'Embed every document and store the vectors, with metadata, in a Pinecone index. The index is cleared first so re-running the pipeline is idempotent instead of duplicating data.',
	'At question time, embed the question, retrieve the nearest document vectors, and hand them to the LLM as context with an explicit instruction not to answer beyond it. Retrieval also accepts an optional metadata filter for exact criteria like "open deals over $100k," since semantic similarity alone only captures topical relevance.',
	'Serve it through a chat UI with clickable sample prompts, showing the retrieved source records alongside every answer.',
]

const architecture = [
	{
		component: 'extract.py',
		responsibility: 'Pulls Cases, Accounts, and Opportunities from Salesforce via SOQL.',
		detail: 'Authenticates via OAuth 2.0 JWT Bearer flow.',
	},
	{
		component: 'documents.py',
		responsibility: 'Converts structured records into plain-English documents plus metadata.',
		detail: 'Metadata enables filtering beyond semantic similarity.',
	},
	{
		component: 'ingest.py',
		responsibility: 'Embeds every document and stores vectors and metadata in Pinecone.',
		detail: 'Clears the index first, so re-runs are idempotent.',
	},
	{
		component: 'rag.py',
		responsibility: 'Embeds the question, retrieves top-k matches, and prompts the LLM with that context.',
		detail: 'gpt-4o-mini, temperature 0, instructed not to answer beyond the supplied context.',
	},
	{
		component: 'app.py',
		responsibility: 'Streamlit chat UI over rag.py.',
		detail: 'Shows retrieved source records alongside every answer.',
	},
]

const productionWork = [
	{
		title: 'Incremental sync',
		body: 'Pull only records modified since the last run and upsert into Pinecone, instead of a full re-embed every time.',
	},
	{
		title: 'Retrieval evaluation',
		body: 'A labeled set of question and expected-answer pairs to catch retrieval regressions. Not hypothetical: adding Opportunities to the corpus silently broke a previously reliable question, because deals started crowding out that same account’s support cases in the top-k results. A query classifier that picks a metadata filter based on question intent would fix this generally instead of per-query.',
	},
	{
		title: 'Cost monitoring',
		body: 'Track embedding and completion token usage per query, since k directly trades off recall against noise and cost.',
	},
	{
		title: 'Conversational memory',
		body: 'Multi-turn chat that remembers prior context. Today every question is answered independently.',
	},
	{
		title: 'Broader auth',
		body: 'The JWT Bearer flow here authenticates as a single pre-authorized user; a multi-user production app would need full OAuth authorization-code flow with per-user consent.',
	},
]

const articleJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Article',
	headline: title,
	description,
	image: 'https://www.brianshimkus.dev/images/salesforce-rag.png',
	url: 'https://www.brianshimkus.dev/case-studies/salesforce-intelligence',
	author: {
		'@type': 'Person',
		name: 'Brian Shimkus',
		url: 'https://www.brianshimkus.dev',
	},
}

export default function SalesforceIntelligencePage() {
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

				<p className='eyebrow mb-3'>Independent Project &middot; AI Solutions Engineering</p>
				<h1 className='text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.05] font-display mb-4'>
					Salesforce Intelligence
					<br />
					<span className={gradientText}>Grounded CRM Answers</span>
				</h1>
				<p className='text-lg text-foreground mb-8 max-w-2xl'>
					A retrieval-augmented chat assistant that answers natural-language questions about
					Salesforce accounts, cases, and opportunities, grounded in the actual data, with
					sources shown for every answer.
				</p>

				<ProcessSteps steps={processSteps} />

				<div className='flex flex-wrap gap-3 mb-10'>
					<TrackedLink
						href='https://rag.insolla.ai'
						target='_blank'
						rel='noopener noreferrer'
						event='Salesforce Intelligence - App'
						eventData={{ project: 'Salesforce Intelligence', type: 'app', location: 'case_study_top' }}
						className={btnCta}>
						Try the Live Demo
					</TrackedLink>
					<TrackedLink
						href='https://github.com/brianshimkus/Insolla-Salesforce-RAG'
						target='_blank'
						rel='noopener noreferrer'
						event='Salesforce Intelligence - Code'
						eventData={{ project: 'Salesforce Intelligence', type: 'code', location: 'case_study_top' }}
						className={btnOutline}>
						View the Code
					</TrackedLink>
				</div>

				<div className='card p-6 mb-16'>
					<p className='text-xs font-semibold uppercase tracking-wider text-brand-text mb-2'>
						Status: Live
					</p>
					<p className='text-sm text-muted-foreground leading-relaxed'>
						This is an independent project built against a Salesforce developer org, not a real
						customer environment. It does not represent any employer&apos;s product, data, or
						internal methods.
					</p>
				</div>

				<SectionDivider className='mb-10' />
				<h2 className='text-2xl font-semibold tracking-tight font-display mb-4'>The problem</h2>
				<p className='text-muted-foreground leading-relaxed mb-16'>
					Support and sales context lives scattered across Cases, Accounts, and Opportunities.
					Finding the answer to a simple question, like a customer&apos;s open cases or a deal&apos;s
					status, means digging through multiple records by hand. A chat interface only helps if
					its answers are actually grounded in the CRM data rather than guessed, and if every
					answer shows its sources so it can be trusted.
				</p>

				<SectionDivider className='mb-10' />
				<h2 className='text-2xl font-semibold tracking-tight font-display mb-4'>How it works</h2>
				<p className='text-muted-foreground leading-relaxed mb-6'>
					Salesforce data flows through embeddings into Pinecone once; every question then
					retrieves the most relevant records and hands them to the model as its only source of
					truth.
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
					Python, OpenAI for embeddings and chat, LangChain, Pinecone, Streamlit, and the
					Salesforce API via <code className='text-xs'>simple-salesforce</code>.
				</p>
				<div className='card divide-y divide-overlay/10 mb-16'>
					{architecture.map((row, i) => (
						<Reveal
							as='div'
							key={row.component}
							delay={Math.min(i, 6) * 0.06}
							y={8}
							className='p-5 grid sm:grid-cols-3 gap-2 sm:gap-4'>
							<p className='text-sm font-semibold text-foreground font-display font-mono'>
								{row.component}
							</p>
							<p className='text-sm text-muted-foreground sm:col-span-1'>{row.responsibility}</p>
							<p className='text-xs text-muted-foreground/80 italic sm:col-span-1'>{row.detail}</p>
						</Reveal>
					))}
				</div>

				<SectionDivider className='mb-10' />
				<h2 className='text-2xl font-semibold tracking-tight font-display mb-4'>
					Why JWT Bearer auth
				</h2>
				<p className='text-muted-foreground leading-relaxed mb-6'>
					Salesforce has been retiring credential-based SOAP login org-wide, and new orgs block
					the OAuth 2.0 username-password flow by default; both are being phased out in favor of
					provable-identity flows. This app authenticates via the OAuth 2.0 JWT Bearer flow
					instead: a self-signed certificate proves the app&apos;s identity, and no password is
					ever transmitted. It&apos;s also the standard pattern for real server-to-server
					Salesforce integrations, not just a workaround.
				</p>
				<p className='text-sm font-medium text-foreground mb-16'>
					Retrieval also needed to go beyond pure semantic search: a metadata filter handles exact
					criteria, like deal size or case status, that similarity search alone can only
					approximate.
				</p>

				<SectionDivider className='mb-10' />
				<h2 className='text-2xl font-semibold tracking-tight font-display mb-4'>
					What I&apos;d do for production
				</h2>
				<p className='text-muted-foreground leading-relaxed mb-6'>
					Say every limitation plainly. This project demonstrates retrieval design and
					engineering judgment, not a production-hardened deployment.
				</p>
				<div className='grid sm:grid-cols-2 gap-4 mb-6'>
					{productionWork.map((item) => (
						<div key={item.title} className='card p-5'>
							<p className='text-sm font-semibold text-foreground font-display mb-2'>
								{item.title}
							</p>
							<p className='text-xs text-muted-foreground leading-relaxed'>{item.body}</p>
						</div>
					))}
				</div>
				<p className='text-sm font-medium text-foreground mb-16'>
					The retrieval-evaluation gap isn&apos;t hypothetical: adding Opportunities to the corpus
					silently broke a previously reliable answer, because deals started crowding out that
					same account&apos;s support cases in the top-k results. A production system needs a way
					to catch that automatically, not by eyeballing answers.
				</p>

				<SectionDivider className='mb-10' />
				<h2 className='text-2xl font-semibold tracking-tight font-display mb-4'>Stack</h2>
				<div className='flex flex-wrap gap-2 mb-16'>
					{[
						'Python',
						'OpenAI',
						'LangChain',
						'Pinecone',
						'Streamlit',
						'Salesforce API (OAuth 2.0 JWT)',
					].map((tag) => (
						<span key={tag} className={skillPill}>
							{tag}
						</span>
					))}
				</div>

				<div className='card p-8 text-center'>
					<h3 className='text-xl font-semibold tracking-tight font-display mb-2'>
						See it in action
					</h3>
					<p className='text-sm text-muted-foreground mb-6 max-w-md mx-auto'>
						Ask it about accounts, cases, or opportunities and see the sourced records behind
						every answer, or read the code to see how the pipeline fits together.
					</p>
					<div className='flex flex-wrap justify-center gap-3'>
						<TrackedLink
							href='https://rag.insolla.ai'
							target='_blank'
							rel='noopener noreferrer'
							event='Salesforce Intelligence - App'
							eventData={{ project: 'Salesforce Intelligence', type: 'app', location: 'case_study_bottom' }}
							className={portfolioLink}>
							Live Demo <FaExternalLinkAlt className='text-[10px]' />
						</TrackedLink>
						<TrackedLink
							href='https://github.com/brianshimkus/Insolla-Salesforce-RAG'
							target='_blank'
							rel='noopener noreferrer'
							event='Salesforce Intelligence - Code'
							eventData={{ project: 'Salesforce Intelligence', type: 'code', location: 'case_study_bottom' }}
							className={portfolioLink}>
							Code <FaExternalLinkAlt className='text-[10px]' />
						</TrackedLink>
					</div>
				</div>
			</div>
			<Footer />
		</main>
	)
}
