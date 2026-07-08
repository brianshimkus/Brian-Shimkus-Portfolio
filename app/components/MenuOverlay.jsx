import NavLink from './NavLink'
import SocialLinks from './SocialLinks'

export default function MenuOverlay({ links }) {
	return (
		<ul className='flex flex-col items-center py-4 bg-charcoal/95 backdrop-blur-xl border-t border-white/10'>
			{links.map((link, index) => (
				<li key={index}>
					<NavLink href={link.path} title={link.title} />
				</li>
			))}
			<SocialLinks styles='h-5 w-5 text-muted-foreground hover:text-brand-light transition-colors' />
		</ul>
	)
}
