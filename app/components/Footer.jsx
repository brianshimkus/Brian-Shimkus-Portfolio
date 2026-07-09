import SocialLinks from './SocialLinks'

export default function Footer() {
	const year = new Date().getFullYear()

	return (
		<footer className='mt-8 border-t border-overlay/10 py-8 md:py-10 footer-ambient'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-4 text-center'>
				<SocialLinks
					styles='h-5 w-5 text-foreground/70 hover:text-foreground transition-colors duration-300'
					boxed
				/>
				<p className='text-xs text-muted-foreground'>
					Brian Shimkus &copy; {year}
				</p>
			</div>
		</footer>
	)
}
