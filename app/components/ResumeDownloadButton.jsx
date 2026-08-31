'use client'

import { track } from '@vercel/analytics'
import { FaDownload } from 'react-icons/fa'
import { btnCta } from '../utils'

export default function ResumeDownloadButton() {
	return (
		<a
			href='/Resume-BrianShimkus-Forward-Deployed-Applied-AI-Engineer.pdf'
			target='_blank'
			rel='noopener noreferrer'
			onClick={() => track('Resume Download', { source: 'resume_page' })}
			className={`${btnCta} inline-flex items-center gap-2`}>
			<FaDownload className='text-sm' />
			Download Resume
		</a>
	)
}
