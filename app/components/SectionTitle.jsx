import { tealGradient } from '../utils'

export default function SectionTitle({ title }) {
	return (
		<div>
			<h2
				className={`${tealGradient} text-3xl md:text-4xl mt-12 mb-4 font-extrabold`}>
				{title}
			</h2>
			<hr className='border-rose-400 border-2 w-32 mb-8' />
		</div>
	)
}
