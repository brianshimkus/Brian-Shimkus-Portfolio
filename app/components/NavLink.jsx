import Link from 'next/link'

export default function NavLink({ href, title, active }) {
	return (
		<Link
			href={href}
			className={`block py-3 px-3 md:p-0 text-base md:text-sm font-medium transition-colors duration-300 ${
				active
					? 'text-foreground'
					: 'text-muted-foreground hover:text-foreground'
			}`}>
			{title}
		</Link>
	)
}
