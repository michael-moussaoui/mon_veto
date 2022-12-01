import React from "react";

function Button({
	children,
	version,
	style,
	isDisabled,
	width,
	height,
	fontSize,
	marginLeft,
	marginRight,
	borderRadius,
}) {
	return (
		<button
			type="type"
			disabled="isDisabled"
			className={`btn-${version}`}
			style={{
				width: "9rem",
				height: "2.5rem",
				fontSize: "1.5rem",
				marginRight: "2.5rem",
				borderRadius: "40px",
			}}
		>
			{children}
		</button>
	);
}

Button.defautlProps = {
	version: "primary",
	type: "button",
	isDisabled: false,
};

export default Button;
