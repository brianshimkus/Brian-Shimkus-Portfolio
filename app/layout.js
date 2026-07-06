import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Inter } from 'next/font/google'
import './globals.css'
import { bodyTextColor } from './utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Brian Shimkus | AI Solutions Engineer',
	description:
		'The portfolio of Brian Shimkus, an AI Solutions Engineer focused on LLM workflows, automation, and integrations, based in Chicago, IL.',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`${inter.className} ${bodyTextColor}`}>
				{children}
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	)
}
