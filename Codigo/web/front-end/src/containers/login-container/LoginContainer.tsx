import React from "react";
import { RouteComponentProps } from "react-router";
import { authenticate } from "../../api/auth";

import LoginPage from "../../pages/login-page/LoginPage";
import { saveUser } from "../../utils/session";

export const LoginContainer = (props: RouteComponentProps) => {
	const onSubmit = async (event: any) => {
		event.preventDefault();
		const email = event.target.elements.email.value;
		const password = event.target.elements.password.value;

		try {
			const res = await authenticate(email, password);
			const user = await res.json();

			if (!user.isAdmin) {
				throw new Error();
			}

			saveUser(user);
			props.history.push("/");
		} catch {
			alert("Email ou senha incorreto(s).");
		}
	};

	return <LoginPage onSubmit={onSubmit} />;
};

export default LoginContainer;
