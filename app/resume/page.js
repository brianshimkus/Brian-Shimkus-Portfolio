import { btnCta } from '../utils'
import ResumeDownloadButton from '../components/ResumeDownloadButton'
import BackButton from '../components/BackButton'

const title = 'Brian Shimkus - Solutions Engineer Resume'
const description =
	'Solutions Engineer specializing in AI integration, pre-sales technical discovery, and proof-of-concept builds. 12+ years delivering customer-facing solutions.'

export const metadata = {
	title,
	description,
	alternates: {
		canonical: '/resume',
	},
	openGraph: {
		title,
		description,
		type: 'website',
		images: [
			{
				url: '/resume-og-image.png',
				width: 1200,
				height: 630,
				alt: 'Brian Shimkus - Solutions Engineer Resume',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title,
		description,
		images: ['/resume-og-image.png'],
	},
}

export default function ResumePage() {
	return (
		<main className='app-bg min-h-screen flex flex-col'>
			<nav className='sticky top-0 z-50 border-b border-overlay/10 bg-overlay/[0.06] backdrop-blur-xl'>
				<div className='container mx-auto px-6 sm:px-12 h-16 flex items-center'>
					<BackButton />
				</div>
			</nav>

			<div className='container mx-auto px-6 sm:px-12 py-12 max-w-4xl flex-1'>
				{/* Header */}
				<div className='card p-8 mb-8'>
					<div className='mb-8'>
						<h1 className='text-4xl font-bold tracking-tight font-display mb-2'>Brian Shimkus</h1>
						<p className='text-lg text-brand-text font-semibold mb-4'>Solutions Engineer • AI Integration • Pre-Sales Technical Discovery</p>
						<p className='text-muted-foreground max-w-3xl mb-8 leading-relaxed'>
							12+ years building customer-facing solutions in regulated financial organizations. Currently running the technical sales motion at Insolla: discovery calls, solution scoping, tailored demos, and proof-of-concept builds with AI, automation, and enterprise integrations.
						</p>
						<div className='flex flex-wrap gap-3'>
							<ResumeDownloadButton />
							<a href='mailto:brian@brianshimkus.com' className={btnCta}>
								Contact Me
							</a>
						</div>
					</div>

					{/* Quick Stats */}
					<div className='grid grid-cols-3 gap-4 pt-8 border-t border-overlay/10'>
						<div>
							<p className='text-2xl font-bold text-brand-text font-display'>12+</p>
							<p className='text-xs text-muted-foreground'>Years Experience</p>
						</div>
						<div>
							<p className='text-2xl font-bold text-brand-text font-display'>3</p>
							<p className='text-xs text-muted-foreground'>AI Systems Built</p>
						</div>
						<div>
							<p className='text-2xl font-bold text-brand-text font-display'>∞</p>
							<p className='text-xs text-muted-foreground'>Hours Saved</p>
						</div>
					</div>
				</div>

				{/* Current Role */}
				<div className='card p-6 mb-8'>
					<h2 className='text-lg font-semibold font-display mb-3'>Applied AI Engineering</h2>
					<p className='text-sm text-muted-foreground mb-4'>Insolla (Self-Directed AI Practice) • Dec 2025 – Present</p>
					<ul className='space-y-2 text-sm text-muted-foreground'>
						<li className='flex gap-3'>
							<span className='text-brand-text shrink-0'>•</span>
							<span>Run complete pre-sales motion: discovery calls, solution scoping, tailored demos, proof-of-concept delivery</span>
						</li>
						<li className='flex gap-3'>
							<span className='text-brand-text shrink-0'>•</span>
							<span>Build production-grade AI systems: RAG over live CRM data, identity policy automation, document workflows</span>
						</li>
						<li className='flex gap-3'>
							<span className='text-brand-text shrink-0'>•</span>
							<span>Deliver full pre-sales artifacts: discovery brief, stakeholder map, technical walkthrough, security brief, POV plan</span>
						</li>
						<li className='flex gap-3'>
							<span className='text-brand-text shrink-0'>•</span>
							<span>Cut a small business&apos;s social media workflow from 8 hours/week to 10 minutes with automated pipeline</span>
						</li>
					</ul>
				</div>

				{/* Skills Grid */}
				<div className='grid md:grid-cols-2 gap-6 mb-8'>
					<div className='card p-6'>
						<h3 className='font-semibold font-display mb-4 text-foreground'>Pre-Sales & Discovery</h3>
						<ul className='space-y-2 text-sm text-muted-foreground'>
							<li>• Technical discovery & stakeholder interviews</li>
							<li>• Tailored demos & proof-of-concept scoping</li>
							<li>• Solution architecture & design</li>
							<li>• Executive presentations & objection handling</li>
							<li>• Customer enablement & handoff</li>
						</ul>
					</div>

					<div className='card p-6'>
						<h3 className='font-semibold font-display mb-4 text-foreground'>AI & LLM</h3>
						<ul className='space-y-2 text-sm text-muted-foreground'>
							<li>• OpenAI API & GPT models</li>
							<li>• RAG architecture & retrieval</li>
							<li>• Embeddings & vector databases</li>
							<li>• LangChain & prompt engineering</li>
							<li>• Source grounding & structured outputs</li>
						</ul>
					</div>

					<div className='card p-6'>
						<h3 className='font-semibold font-display mb-4 text-foreground'>Integration & Backend</h3>
						<ul className='space-y-2 text-sm text-muted-foreground'>
							<li>• REST APIs & webhooks</li>
							<li>• Salesforce API (OAuth 2.0 JWT)</li>
							<li>• FastAPI & Python</li>
							<li>• Database design & SQL</li>
							<li>• Enterprise systems & compliance</li>
						</ul>
					</div>

					<div className='card p-6'>
						<h3 className='font-semibold font-display mb-4 text-foreground'>Frontend & Tools</h3>
						<ul className='space-y-2 text-sm text-muted-foreground'>
							<li>• React & Next.js</li>
							<li>• TypeScript & JavaScript</li>
							<li>• Tailwind CSS</li>
							<li>• Automation: Make.com, n8n</li>
							<li>• Design tools & prototyping</li>
						</ul>
					</div>
				</div>

				{/* Key Achievements */}
				<div className='card p-6 mb-8'>
					<h3 className='font-semibold font-display mb-4 text-foreground'>Key Achievements</h3>
					<div className='space-y-3 text-sm text-muted-foreground'>
						<div className='flex gap-3'>
							<span className='text-brand-text font-bold shrink-0'>✓</span>
							<div>
								<p className='font-semibold text-foreground'>Automation Impact</p>
								<p>Cut social media workflow from 8 hours/week to 10 minutes via AI pipeline—measured results with client</p>
							</div>
						</div>
						<div className='flex gap-3'>
							<span className='text-brand-text font-bold shrink-0'>✓</span>
							<div>
								<p className='font-semibold text-foreground'>CRM Intelligence</p>
								<p>Built RAG assistant over live Salesforce with source grounding—supports natural language queries with audit trails</p>
							</div>
						</div>
						<div className='flex gap-3'>
							<span className='text-brand-text font-bold shrink-0'>✓</span>
							<div>
								<p className='font-semibold text-foreground'>Identity Systems</p>
								<p>Designed policy engine for employee access with security review routing—models 7 access decisions per event</p>
							</div>
						</div>
						<div className='flex gap-3'>
							<span className='text-brand-text font-bold shrink-0'>✓</span>
							<div>
								<p className='font-semibold text-foreground'>Enterprise Background</p>
								<p>12 years at OCC, TransUnion, Marex: stakeholder discovery, API integration, and compliance in regulated environments</p>
							</div>
						</div>
					</div>
				</div>

				{/* Footer */}
				<div className='text-muted-foreground text-sm border-t border-overlay/10 pt-8'>
					<p className='font-semibold mb-2'>Open to Solutions Engineer, Forward Deployed Engineer, and AI/Automation Engineer roles</p>
					<p>Based in Chicago, IL • Available for remote and contract work</p>
					<p className='text-xs mt-4'>brian@brianshimkus.com • linkedin.com/in/brianshimkus1 • github.com/brianshimkus</p>
				</div>
			</div>
		</main>
	)
}
