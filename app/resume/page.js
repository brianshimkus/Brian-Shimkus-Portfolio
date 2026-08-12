import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'
import { btnCta } from '../utils'
import ResumeDownloadButton from '../components/ResumeDownloadButton'

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
					<Link href='/#about' className='inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors'>
						<FaArrowLeft className='text-xs' /> Back
					</Link>
				</div>
			</nav>

			<div className='container mx-auto px-6 sm:px-12 py-12 max-w-4xl flex-1'>
				<div className='card p-8 mb-8 text-center'>
					<h1 className='text-4xl font-bold tracking-tight font-display mb-2'>Brian Shimkus</h1>
					<p className='text-lg text-brand-text font-semibold mb-4'>Solutions Engineer • AI Integration • Pre-Sales Technical Discovery</p>
					<p className='text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed'>
						12+ years building customer-facing solutions in regulated financial organizations. Currently running the technical sales motion at Insolla: discovery calls, solution scoping, tailored demos, and proof-of-concept builds with AI, automation, and enterprise integrations.
					</p>
					<div className='flex flex-wrap justify-center gap-3'>
						<ResumeDownloadButton />
						<a
							href='mailto:brian@brianshimkus.com'
							className={btnCta}>
							Contact Me
						</a>
					</div>
				</div>

				<div className='grid md:grid-cols-2 gap-8 mb-12'>
					<div className='card p-6'>
						<h2 className='text-xl font-semibold font-display mb-4'>Skills</h2>
						<div className='space-y-4 text-sm'>
							<div>
								<p className='font-semibold text-foreground mb-2'>Pre-Sales</p>
								<p className='text-muted-foreground'>Technical discovery, tailored demos, proof-of-concept scoping, solution design, objection handling, executive presentations</p>
							</div>
							<div>
								<p className='font-semibold text-foreground mb-2'>AI & LLM</p>
								<p className='text-muted-foreground'>OpenAI, LangChain, Pinecone, RAG architecture, embeddings, prompt engineering, structured outputs</p>
							</div>
							<div>
								<p className='font-semibold text-foreground mb-2'>Integration</p>
								<p className='text-muted-foreground'>REST APIs, FastAPI, Salesforce (OAuth 2.0 JWT), DocuSign, webhooks, enterprise systems</p>
							</div>
						</div>
					</div>

					<div className='card p-6'>
						<h2 className='text-xl font-semibold font-display mb-4'>Highlights</h2>
						<ul className='space-y-3 text-sm text-muted-foreground'>
							<li className='flex gap-3'>
								<span className='text-brand-text font-bold shrink-0'>→</span>
								<span>Cut a small business&apos;s social media workflow from 8 hours/week to 10 minutes with automation</span>
							</li>
							<li className='flex gap-3'>
								<span className='text-brand-text font-bold shrink-0'>→</span>
								<span>Built RAG assistant over live Salesforce CRM data with source grounding and audit trails</span>
							</li>
							<li className='flex gap-3'>
								<span className='text-brand-text font-bold shrink-0'>→</span>
								<span>Designed policy engine for employee access lifecycle with security review routing</span>
							</li>
							<li className='flex gap-3'>
								<span className='text-brand-text font-bold shrink-0'>→</span>
								<span>12 years at OCC, TransUnion, Marex: stakeholder discovery, enterprise API integration, compliance</span>
							</li>
						</ul>
					</div>
				</div>

				<div className='text-center text-muted-foreground text-sm'>
					<p>Open to Solutions Engineer, Forward Deployed Engineer, and AI/Automation Engineer roles</p>
					<p>Based in Chicago, IL • Available for remote and contract work</p>
				</div>
			</div>
		</main>
	)
}
