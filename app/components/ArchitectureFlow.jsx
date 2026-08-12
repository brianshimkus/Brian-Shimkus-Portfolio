'use client'

import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

const container = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

const node = {
	hidden: { opacity: 0, y: 8 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
}

export default function ArchitectureFlow({ nodes }) {
	return (
		<motion.div
			className='flex flex-wrap items-center gap-x-2 gap-y-3 mb-6'
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, margin: '-60px' }}
			variants={container}>
			{nodes.map((label, i) => (
				<div key={label} className='flex items-center gap-2'>
					<motion.span
						variants={node}
						className='rounded-lg border border-overlay/15 bg-overlay/5 px-3 py-2 text-xs font-mono font-medium text-foreground whitespace-nowrap'>
						{label}
					</motion.span>
					{i < nodes.length - 1 && (
						<FaArrowRight aria-hidden className='text-muted-foreground/40 text-xs shrink-0' />
					)}
				</div>
			))}
		</motion.div>
	)
}
