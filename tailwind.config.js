/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				background: '#0D0F14',
				foreground: '#E7E7EA',
				muted: {
					DEFAULT: '#9CA3AF',
					foreground: '#9CA3AF',
				},
				charcoal: '#14171A',
				primary: {
					DEFAULT: '#D946EF',
					foreground: '#FFFFFF',
				},
				brand: {
					DEFAULT: '#8B5CF6',
					light: '#C4B5FD',
					lighter: '#DDD6FE',
					dark: '#7C3AED',
					foreground: '#001015',
				},
				accent: {
					DEFAULT: '#60A5FA',
					foreground: '#0A101F',
				},
				brandBlue: '#5E9EE1',
				brandPink: '#EC4899',
				brandPurple: '#8B5CF6',
				card: {
					DEFAULT: 'rgba(255,255,255,0.05)',
					foreground: '#E7E7EA',
				},
				border: 'rgba(255,255,255,0.08)',
			},
			boxShadow: {
				glow: '0 0 32px rgba(217, 70, 239, 0.38)',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
				grid: 'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
				'neon-aurora':
					'radial-gradient(900px 600px at 20% -10%, rgba(34,211,238,0.20), transparent 55%), radial-gradient(900px 650px at 90% 10%, rgba(96,165,250,0.16), transparent 55%), radial-gradient(800px 600px at 50% 110%, rgba(217,70,239,0.18), transparent 55%)',
			},
			backgroundSize: {
				grid: '48px 48px',
			},
			keyframes: {
				fadeInUp: {
					'0%': { opacity: '0', transform: 'translateY(12px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-6px)' },
				},
			},
			animation: {
				'fade-in-up': 'fadeInUp 0.6s ease-out both',
				float: 'float 5s ease-in-out infinite',
			},
		},
	},
	plugins: [],
}
