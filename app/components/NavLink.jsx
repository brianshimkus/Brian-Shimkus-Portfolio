import Link from 'next/link'

export default function NavLink({ href, title }) {
	return (
		<Link
			href={href}
			className='block py-4 pl-3 pr-4 font-semibold tracking-wider text-xl uppercase sm:text-xl rounded md:p-0 text-transparent bg-clip-text bg-gradient-to-br from-pink-400 via-rose-400 to-rose-500 hover:from-teal-500 hover:via-cyan-400 hover:to-sky-500 transition ease-in-out duration-300 opacity-100'>
			{title}
		</Link>
	)
}
