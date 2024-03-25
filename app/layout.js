import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Inter } from 'next/font/google'
import './globals.css'
import { bodyTextColor } from './utils'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Brian Shimkus | Full-Stack Developer',
	description:
		'The portfolio of Brian Shimkus, a full-stack developer with over 10 years of experience based in Chicago, IL.',
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
