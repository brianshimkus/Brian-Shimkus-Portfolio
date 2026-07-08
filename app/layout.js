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

export const metadata = {
	title: 'Brian Shimkus | AI Solutions Engineer',
	description:
		'The portfolio of Brian Shimkus, an AI Solutions Engineer focused on LLM workflows, automation, and integrations, based in Chicago, IL.',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`${inter.className} ${rajdhani.variable}`}>
				{children}
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	)
}
