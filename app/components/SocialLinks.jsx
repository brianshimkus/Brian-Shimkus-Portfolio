import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export default function SocialLinks({ styles, boxed = false }) {
	const boxStyles = boxed
		? 'inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 transition-colors'
		: ''

	return (
		<ul className='flex space-x-4 md:space-x-3 my-4 md:my-2'>
			<li>
				<a
					href='mailto:Brian@BrianShimkus.com'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='Email'
					className={boxStyles}>
					<FaEnvelope className={styles} />
				</a>
			</li>
			<li>
				<a
					href='https://github.com/brianshimkus'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='GitHub'
					className={boxStyles}>
					<FaGithub className={styles} />
				</a>
			</li>
			<li>
				<a
					href='https://www.linkedin.com/in/brianshimkus1'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='LinkedIn'
					className={boxStyles}>
					<FaLinkedin className={styles} />
				</a>
			</li>
		</ul>
	)
}
