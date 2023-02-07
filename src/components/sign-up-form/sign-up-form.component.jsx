import { useState } from "react";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import {SignUp, Heading} from "./sign-up-form.styles";

const defaultFormFields = {
	displayName: "",
	email: "",
	password: "",
	confirmPassword: "",
};

const SignUpForm = () => {
	const [formField, setFormField] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formField;

	const resetFormFields = () => {
		setFormField(defaultFormFields);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert("Passwords do not match!");
			return;
		}

		try {
			const { user } = await createAuthUserWithEmailAndPassword(email, password);
			await createUserDocumentFromAuth(user, { displayName });
			resetFormFields();
		} catch (error) {
			error.code === "auth/email-already-in-use" ? alert("Email already in use.") : console.log("user creation encountered an error", error);
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormField({ ...formField, [name]: value });
	};
	return (
		<SignUp>
			<Heading>Don't have an account?</Heading>
			<span>Sign up with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Display Name"
					type="text"
					required
					onChange={handleChange}
					name="displayName"
					value={displayName}
				/>

				<FormInput
					label="Email"
					type="email"
					required
					onChange={handleChange}
					name="email"
					value={email}
				/>

				<FormInput
					label="Password"
					type="password"
					required
					onChange={handleChange}
					name="password"
					value={password}
				/>

				<FormInput
					label="Confirm Password"
					type="password"
					required
					onChange={handleChange}
					name="confirmPassword"
					value={confirmPassword}
				/>

				<Button
					children="Sign Up"
					type="submit"
				/>
			</form>
		</SignUp>
	);
};

export default SignUpForm;
