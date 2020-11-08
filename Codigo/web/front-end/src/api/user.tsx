import { UserType } from "../types/user";
import { getReq } from "./api";

export const getUsersAPI = (): Promise<UserType[]> => {
	return getReq("user");
};
