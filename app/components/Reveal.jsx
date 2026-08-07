'use client'

import { motion } from 'framer-motion'

export default function Reveal({ children, delay = 0, className = '', y = 16, as = 'div' }) {
	const Component = motion[as] || motion.div
	return (
		<Component
			initial={{ opacity: 0, y }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-80px' }}
			transition={{ duration: 0.5, delay, ease: 'easeOut' }}
			className={className}>
			{children}
		</Component>
	)
}
