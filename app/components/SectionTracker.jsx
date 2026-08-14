'use client'

import useIntersectionTracking from '../hooks/useIntersectionTracking'

const sections = [
	{ id: 'skills', name: 'Skills' },
	{ id: 'experience', name: 'Experience' },
	{ id: 'portfolio', name: 'Portfolio' },
	{ id: 'testimonials', name: 'Testimonials' },
	{ id: 'about', name: 'About' },
]

export default function SectionTracker() {
	sections.forEach(({ id, name }) => {
		// eslint-disable-next-line react-hooks/rules-of-hooks
		useIntersectionTracking(id, name)
	})

	return null
}
