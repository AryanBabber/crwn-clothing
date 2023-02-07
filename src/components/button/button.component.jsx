import { BaseButton, DisabledButton, GoogleButton, InvertedButton } from "./button.styles.jsx";

export const BUTTON_TYPE_CLASSES = {
	base: "base",
	google: "google-sign-in",
	inverted: "inverted",
	disabled: "disabled",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
	({
		[BUTTON_TYPE_CLASSES.base]: BaseButton,
		[BUTTON_TYPE_CLASSES.google]: GoogleButton,
		[BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
		[BUTTON_TYPE_CLASSES.disabled]: DisabledButton,
	}[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
	const CustomBtn = getButton(buttonType);
	return <CustomBtn {...otherProps}>{children}</CustomBtn>;
};

export default Button;
