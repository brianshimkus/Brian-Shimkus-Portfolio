import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const iconStyle = `h-6 w-6 text-rose-400 hover:text-teal-400 cursor-pointer`

export default function SocialLinks() {
	return (
		<ul className='flex space-x-8 md:space-x-3 my-8 md:my-2'>
			<li>
				<a
					href='mailto:Brian@BrianShimkus.com'
					target='_blank'
					rel='noopener noreferrer'
					alt='Email'>
					<FaEnvelope className={iconStyle} />
				</a>
			</li>
			<li>
				<a
					href='https://github.com/brianshimkus'
					target='_blank'
					rel='noopener noreferrer'
					alt='GitHub'>
					<FaGithub className={iconStyle} />
				</a>
			</li>
			<li>
				<a
					href='https://www.linkedin.com/in/brianshimkus1'
					target='_blank'
					rel='noopener noreferrer'
					alt='LinkedIn'>
					<FaLinkedin className={iconStyle} />
				</a>
			</li>
			<li>
				<a
					href='https://www.instagram.com/brianshimkus.me'
					target='_blank'
					rel='noopener noreferrer'
					alt='Instagram'>
					<FaInstagram className={iconStyle} />
				</a>
			</li>
			<li>
				<a
					href='https://twitter.com/BrianShimkus'
					target='_blank'
					rel='noopener noreferrer'
					alt='Twitter'>
					<FaXTwitter className={iconStyle} />
				</a>
			</li>
		</ul>
	)
}
