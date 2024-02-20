import { Input as NextInput, InputProps } from "@nextui-org/react";
import { FC, forwardRef } from "react";

const Input: FC<InputProps> = forwardRef(function Input(
	{
		variant = "bordered",
		labelPlacement = "outside",
		color = "primary",
		size = "sm",
		classNames = {
			label: " text-black font-medium",
			inputWrapper: "px-0",
			input: "rounded-md px-3",
		},
		...otherProps
	},
	ref,
) {
	return (
		<NextInput
			ref={ref}
			variant={variant}
			size={size}
			color={color}
			classNames={classNames}
			labelPlacement={labelPlacement}
			{...otherProps}
		/>
	);
});

export default Input;
