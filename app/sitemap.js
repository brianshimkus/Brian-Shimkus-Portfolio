export default function sitemap() {
	const lastModified = new Date()

	return [
		{
			url: 'https://www.brianshimkus.com',
			lastModified,
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: 'https://www.brianshimkus.com/case-studies/pod-recovery-assistant',
			lastModified,
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: 'https://www.brianshimkus.com/case-studies/salesforce-intelligence',
			lastModified,
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: 'https://www.brianshimkus.com/case-studies/employee-access-lifecycle',
			lastModified,
			changeFrequency: 'monthly',
			priority: 0.8,
		},
	]
}
