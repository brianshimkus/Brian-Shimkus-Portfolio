import SectionDivider from './SectionDivider'

export default function SectionTitle({ eyebrow, title, divider = true }) {
	return (
		<div className='mt-16 md:mt-20 lg:mt-24'>
			{divider && <SectionDivider className='mb-8 md:mb-10' />}
			<div className='mb-8 md:mb-12'>
				{eyebrow && <p className='eyebrow mb-3'>{eyebrow}</p>}
				<h2 className='text-3xl md:text-4xl font-semibold tracking-tight font-display'>
					{title}
				</h2>
			</div>
		</div>
	)
}
