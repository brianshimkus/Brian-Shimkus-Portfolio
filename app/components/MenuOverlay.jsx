import NavLink from './NavLink'

export default function MenuOverlay({ links }) {
	return (
		<ul className='flex flex-col py-4 items-center bg-gray-900 opacity-70'>
			{links.map((link, index) => (
				<li key={index}>
					<NavLink href={link.path} title={link.title} />
				</li>
			))}
		</ul>
	)
}
