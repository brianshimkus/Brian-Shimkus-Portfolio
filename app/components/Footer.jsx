import { tealGradientBackground } from '../utils'
import SocialLinks from './SocialLinks'

export default function Footer() {
	const year = new Date().getFullYear()

	return (
		<footer className={`${tealGradientBackground} py-4`}>
			<div className='container mx-auto text-black text-sm font-bold uppercase tracking-widest grid grid-cols-1 place-content-center py-0 md:py-2'>
				<div className='mx-4'>
					<SocialLinks />
					<p>{`Brian Shimkus © ${year}`}</p>
				</div>
			</div>
		</footer>
	)
}
