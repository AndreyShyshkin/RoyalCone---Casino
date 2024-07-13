import React from "react";

export const Button = ({
	onClick: handleClick,
	children: buttonText,
	className: additionalClassNames,
}: {
	onClick: () => void
	children: React.ReactNode
	className?: string
}) => (
	<button
		onClick={handleClick}
		className={`px-2 py-2 text-2xl bg-green-500 text-white font-bold rounded ${additionalClassNames}`}
	>
		{buttonText}
	</button>
)
