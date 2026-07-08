import Link from 'next/link'

export default function NavLink({ href, title, onClick }) {
	return (
		<Link
			href={href}
			onClick={onClick}
			className='block py-3 px-3 md:p-0 text-base md:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300'>
			{title}
		</Link>
	)
}
