'use client'

import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'

export default function CountUp({ value }) {
	const match = value.match(/^([\d,]+\.?\d*)(.*)$/)
	const numStr = match ? match[1] : value
	const suffix = match ? match[2] : ''
	const target = parseFloat(numStr.replace(/,/g, '')) || 0
	const hasComma = numStr.includes(',')
	const decimals = numStr.includes('.') ? numStr.split('.')[1].length : 0

	const ref = useRef(null)
	const inView = useInView(ref, { once: true, margin: '-60px' })
	const [display, setDisplay] = useState(decimals ? (0).toFixed(decimals) : '0')

	useEffect(() => {
		if (!inView) return
		const controls = animate(0, target, {
			duration: 1.2,
			ease: 'easeOut',
			onUpdate: (v) => {
				const formatted = decimals ? v.toFixed(decimals) : Math.round(v).toString()
				setDisplay(hasComma ? Number(formatted).toLocaleString() : formatted)
			},
		})
		return () => controls.stop()
	}, [inView, target, decimals, hasComma])

	return (
		<span ref={ref}>
			{display}
			{suffix}
		</span>
	)
}
