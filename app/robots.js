export default function robots() {
	const isProduction = process.env.VERCEL_ENV === 'production'

	if (!isProduction) {
		return {
			rules: {
				userAgent: '*',
				disallow: '/',
			},
		}
	}

	return {
		rules: {
			userAgent: '*',
			allow: '/',
		},
		sitemap: 'https://www.brianshimkus.com/sitemap.xml',
	}
}
