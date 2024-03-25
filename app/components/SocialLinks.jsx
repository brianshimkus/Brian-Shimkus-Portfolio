import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

export default function SocialLinks({ styles }) {
	return (
		<ul className='flex space-x-4 md:space-x-3 my-4 md:my-2'>
			<li>
				<a
					href='mailto:Brian@BrianShimkus.com'
					target='_blank'
					rel='noopener noreferrer'
					alt='Email'>
					<FaEnvelope className={styles} />
				</a>
			</li>
			<li>
				<a
					href='https://github.com/brianshimkus'
					target='_blank'
					rel='noopener noreferrer'
					alt='GitHub'>
					<FaGithub className={styles} />
				</a>
			</li>
			<li>
				<a
					href='https://www.linkedin.com/in/brianshimkus1'
					target='_blank'
					rel='noopener noreferrer'
					alt='LinkedIn'>
					<FaLinkedin className={styles} />
				</a>
			</li>
		</ul>
	)
}
