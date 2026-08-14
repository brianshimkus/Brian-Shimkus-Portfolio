'use client'

import { useEffect } from 'react'
import { track } from '@vercel/analytics'

export default function useIntersectionTracking(elementId, eventName) {
	useEffect(() => {
		const element = document.getElementById(elementId)
		if (!element) return

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					track(`Section Viewed`, { section: eventName })
					// Unobserve after first intersection to track only once per session
					observer.unobserve(element)
				}
			},
			{ threshold: 0.3 }
		)

		observer.observe(element)

		return () => observer.disconnect()
	}, [elementId, eventName])
}
