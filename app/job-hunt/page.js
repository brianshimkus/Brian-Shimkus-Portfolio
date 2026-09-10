export const metadata = {
	title: 'Brian Shimkus - Job Search Pipeline',
	description: 'Real-time job search tracking dashboard. Interviewing, applied, leads, and closed opportunities.',
	alternates: {
		canonical: '/job-hunt',
	},
}

export default function JobHuntPage() {
	return (
		<div style={{ width: '100%', height: '100vh', border: 'none', margin: 0, padding: 0 }}>
			<iframe
				src="https://claude.ai/code/artifact/8c98785a-5ad5-4a4b-aca7-ab4d9cd36aab?embed=true"
				style={{
					width: '100%',
					height: '100%',
					border: 'none',
					borderRadius: '0',
					display: 'block'
				}}
				title="Job Search Pipeline"
				allow="same-origin"
			/>
		</div>
	)
}
