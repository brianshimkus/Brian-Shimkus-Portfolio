'use client'

import { useEffect, useState } from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

export default function ThemeToggle({ className = '' }) {
	const [theme, setTheme] = useState(null)

	useEffect(() => {
		setTheme(document.documentElement.dataset.theme || 'light')
	}, [])

	function toggleTheme() {
		const next = theme === 'light' ? 'dark' : 'light'
		document.documentElement.dataset.theme = next
		localStorage.setItem('theme', next)
		setTheme(next)
	}

	if (!theme) {
		return <div className={`h-9 w-9 ${className}`} aria-hidden />
	}

	return (
		<button
			type='button'
			onClick={toggleTheme}
			aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
			className={`flex items-center justify-center h-9 w-9 rounded-full border border-overlay/15 text-muted-foreground hover:text-foreground hover:border-overlay/25 transition-colors duration-300 ${className}`}>
			{theme === 'light' ? (
				<MoonIcon className='h-4 w-4' />
			) : (
				<SunIcon className='h-4 w-4' />
			)}
		</button>
	)
}
