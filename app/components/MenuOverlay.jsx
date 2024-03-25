import NavLink from './NavLink'
import SocialLinks from './SocialLinks'

export default function MenuOverlay({ links }) {
	return (
		<ul className='flex flex-col py-4 items-center bg-zinc-900 opacity-90'>
			{links.map((link, index) => (
				<li key={index}>
					<NavLink href={link.path} title={link.title} />
				</li>
			))}
			<SocialLinks />
		</ul>
	)
}
