import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Inter, Rajdhani } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const rajdhani = Rajdhani({
	subsets: ['latin'],
	weight: ['500', '600', '700'],
	display: 'swap',
	variable: '--font-rajdhani',
})

const siteUrl = 'https://www.brianshimkus.dev'
const siteTitle = 'Brian Shimkus | AI Solutions Engineer'
const siteDescription =
	'AI Solutions Engineer focused on LLM workflows, automation, and integrations. Based in Chicago, IL, open to remote and contract work.'

export const metadata = {
	metadataBase: new URL(siteUrl),
	title: {
		default: siteTitle,
		template: '%s | Brian Shimkus',
	},
	description: siteDescription,
	keywords: [
		'Brian Shimkus',
		'AI Solutions Engineer',
		'AI Automation Engineer',
		'Forward Deployed Engineer',
		'LLM workflows',
		'AI consultant Chicago',
		'Insolla',
		'Solutions Engineer Chicago',
	],
	authors: [{ name: 'Brian Shimkus', url: siteUrl }],
	creator: 'Brian Shimkus',
	alternates: {
		canonical: siteUrl,
	},
	openGraph: {
		title: siteTitle,
		description: siteDescription,
		url: siteUrl,
		siteName: 'Brian Shimkus',
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: siteTitle,
		description: siteDescription,
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-image-preview': 'large',
		},
	},
}

const personJsonLd = {
	'@context': 'https://schema.org',
	'@type': 'Person',
	name: 'Brian Shimkus',
	url: siteUrl,
	image: `${siteUrl}/images/hero-image.jpg`,
	jobTitle: 'AI Solutions Engineer',
	worksFor: {
		'@type': 'Organization',
		name: 'Insolla',
		url: 'https://insolla.ai/',
	},
	address: {
		'@type': 'PostalAddress',
		addressLocality: 'Chicago',
		addressRegion: 'IL',
		addressCountry: 'US',
	},
	sameAs: [
		'https://github.com/brianshimkus',
		'https://www.linkedin.com/in/brianshimkus1',
	],
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`${inter.className} ${rajdhani.variable}`}>
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
				/>
				{children}
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	)
}
