'use client'

import { useRouter } from 'next/navigation'
import { FaArrowLeft } from 'react-icons/fa'

export default function BackButton() {
	const router = useRouter()

	const handleBack = () => {
		// Try to go back, but if there's no history, go home
		if (window.history.length > 1) {
			router.back()
		} else {
			router.push('/')
		}
	}

	return (
		<button
			onClick={handleBack}
			className='inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors'>
			<FaArrowLeft className='text-xs' /> Back
		</button>
	)
}
