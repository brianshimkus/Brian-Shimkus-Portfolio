import NavLink from './NavLink'
import SocialLinks from './SocialLinks'

export default function MenuOverlay({ links, activeSection, onNavigate, open }) {
	return (
		<div
			className={`md:hidden overflow-hidden border-t border-white/10 bg-white/[0.06] backdrop-blur-xl backdrop-saturate-150 transition-[max-height,opacity] duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
				open
					? 'max-h-[80vh] opacity-100 pointer-events-auto'
					: 'max-h-0 opacity-0 pointer-events-none'
			}`}>
			<ul className='flex flex-col items-center py-4'>
				{links.map((link, index) => (
					<li key={index}>
						<NavLink
							href={link.path}
							title={link.title}
							active={activeSection === link.path.slice(1)}
							onClick={onNavigate}
						/>
					</li>
				))}
				<SocialLinks styles='h-5 w-5 text-muted-foreground hover:text-brand-light transition-colors duration-300' />
			</ul>
		</div>
	)
}
