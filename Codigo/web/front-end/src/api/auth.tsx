import { postReq } from "./api";

export const authenticate = (email: string, password: string) => {
	return postReq("user/login", { email, password });
};
