'use client'

import { track } from '@vercel/analytics'
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export default function SocialLinks({ styles, boxed = false, hideGithub = false }) {
	const boxStyles = boxed
		? 'inline-flex h-10 w-10 items-center justify-center rounded-lg bg-overlay/10 hover:bg-overlay/20 transition-colors duration-300'
		: ''

	return (
		<ul className='flex space-x-4 md:space-x-3 my-4 md:my-2'>
			<li>
				<a
					href='mailto:Brian@BrianShimkus.com'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='Email'
					onClick={() => track('Social Click', { platform: 'email' })}
					className={boxStyles}>
					<FaEnvelope className={styles} />
				</a>
			</li>
			{!hideGithub && (
				<li>
					<a
						href='https://github.com/brianshimkus'
						target='_blank'
						rel='noopener noreferrer'
						aria-label='GitHub'
						onClick={() => track('Social Click', { platform: 'github' })}
						className={boxStyles}>
						<FaGithub className={styles} />
					</a>
				</li>
			)}
			<li>
				<a
					href='https://www.linkedin.com/in/brianshimkus1'
					target='_blank'
					rel='noopener noreferrer'
					aria-label='LinkedIn'
					onClick={() => track('Social Click', { platform: 'linkedin' })}
					className={boxStyles}>
					<FaLinkedin className={styles} />
				</a>
			</li>
		</ul>
	)
}
