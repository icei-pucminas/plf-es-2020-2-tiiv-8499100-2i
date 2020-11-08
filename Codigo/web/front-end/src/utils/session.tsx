import { UserType } from "../types/user";

export const saveUser = (user: UserType) => {
	localStorage.setItem("user", JSON.stringify(user));
};

export const retrieveUser = () => {
	try {
		const data = localStorage.getItem("user")!;
		const user = JSON.parse(data) as UserType;

		return user;
	} catch {
		return;
	}
};

export const cleanUser = () => {
	localStorage.removeItem("user");
};
