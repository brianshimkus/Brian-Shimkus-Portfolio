import { tealGradient } from '../utils'

export default function SectionTitle({ title }) {
	return (
		<div className='mt-32 mb-12'>
			<h2
				className={`${tealGradient} text-3xl md:text-4xl mb-4 font-extrabold`}>
				{title}
			</h2>
			<hr className='border-rose-400 border-2 w-32' />
		</div>
	)
}
