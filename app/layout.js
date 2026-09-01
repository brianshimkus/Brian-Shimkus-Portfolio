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

const siteUrl = 'https://www.brianshimkus.com'
const siteTitle = 'Brian Shimkus | Applied AI Engineer'
const siteDescription =
	'Applied AI and integration engineer with 12+ years delivering customer-facing software and enterprise integrations. Combines hands-on engineering with discovery, workflow mapping, POV delivery, and stakeholder alignment. Building production AI systems with Python, FastAPI, Salesforce APIs, and OAuth. Based in Chicago, IL.'
const isProduction = process.env.VERCEL_ENV === 'production'

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
		'Applied AI Engineer',
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
		index: isProduction,
		follow: isProduction,
		googleBot: {
			index: isProduction,
			follow: isProduction,
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

const themeInitScript = `(function() {
	try {
		var stored = localStorage.getItem('theme');
		var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
		document.documentElement.dataset.theme = stored || (systemDark ? 'dark' : 'light');
	} catch (e) {
		document.documentElement.dataset.theme = 'light';
	}
})();`

export default function RootLayout({ children }) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${inter.className} ${rajdhani.variable}`} suppressHydrationWarning>
				<script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
				/>
				{children}
				{process.env.VERCEL_ENV === 'production' && (
					<>
						<Analytics />
						<SpeedInsights />
					</>
				)}
			</body>
		</html>
	)
}
