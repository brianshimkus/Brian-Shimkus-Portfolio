'use client'

import { motion } from 'framer-motion'

const container = {
	hidden: {},
	visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const pill = {
	hidden: { opacity: 0, y: 10, scale: 0.92 },
	visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
}

function toneClass(tone) {
	if (tone === 'end') return 'bg-foreground text-background'
	if (tone === 'start') return 'bg-overlay/5 text-foreground/70 border border-overlay/10'
	return 'bg-brand/10 text-brand-text border border-brand/20'
}

export default function ProcessSteps({ steps }) {
	return (
		<motion.div
			className='flex flex-wrap items-center gap-2 mb-10'
			initial='hidden'
			whileInView='visible'
			viewport={{ once: true, margin: '-60px' }}
			variants={container}>
			{steps.map((step, i) => (
				<motion.span
					key={step.label}
					variants={pill}
					className={`${toneClass(
						step.tone
					)} relative rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider`}>
					<motion.span
						aria-hidden
						className='absolute inset-0 rounded-full ring-2 ring-brand-text/60'
						initial={{ opacity: 0 }}
						animate={{ opacity: [0, 1, 0] }}
						transition={{ duration: 0.5, delay: 0.5 + i * 0.15, times: [0, 0.5, 1] }}
					/>
					{step.label}
				</motion.span>
			))}
		</motion.div>
	)
}
