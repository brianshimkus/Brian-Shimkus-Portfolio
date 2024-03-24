import { tealGradient } from '../utils'

export default function SectionTitle({ title }) {
	return (
		<div>
			<h2 className={`${tealGradient} text-4xl mb-4`}>{title}</h2>
			<hr className='border-rose-400 border-2 w-32 mb-8' />
		</div>
	)
}
