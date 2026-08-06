'use client'

import { track } from '@vercel/analytics'

export default function TrackedLink({ href, event, eventData, className, children, ...props }) {
	return (
		<a
			href={href}
			className={className}
			onClick={() => track(event, eventData)}
			{...props}>
			{children}
		</a>
	)
}
