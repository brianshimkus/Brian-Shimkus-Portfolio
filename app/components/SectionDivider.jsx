export default function SectionDivider({ className = '' }) {
	return (
		<div
			aria-hidden
			className={`mx-auto h-0.5 w-56 bg-[linear-gradient(to_right,transparent,#5E9EE1_40%,#8B5CF6_60%,transparent)] ${className}`}
		/>
	)
}
