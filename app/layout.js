import { Analytics } from '@vercel/analytics/react'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Brian Shimkus | Full-Stack Developer',
	description:
		'The portfolio of Brian Shimkus, a full-stack developer with over 10 years of experience based in Chicago, IL.',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				{children}
				<Analytics />
			</body>
		</html>
	)
}
