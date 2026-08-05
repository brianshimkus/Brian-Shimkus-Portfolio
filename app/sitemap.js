export default function sitemap() {
	const lastModified = new Date()

	return [
		{
			url: 'https://www.brianshimkus.dev',
			lastModified,
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: 'https://www.brianshimkus.dev/case-studies/pod-recovery-assistant',
			lastModified,
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: 'https://www.brianshimkus.dev/case-studies/salesforce-intelligence',
			lastModified,
			changeFrequency: 'monthly',
			priority: 0.8,
		},
	]
}
