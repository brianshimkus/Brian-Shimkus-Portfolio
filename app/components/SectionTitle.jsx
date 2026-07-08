export default function SectionTitle({ eyebrow, title }) {
	return (
		<div className='mt-24 mb-8 md:mb-12'>
			{eyebrow && <p className='eyebrow mb-3'>{eyebrow}</p>}
			<h2 className='text-3xl md:text-4xl font-semibold tracking-tight font-display'>
				{title}
			</h2>
		</div>
	)
}
