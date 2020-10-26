import { AuthorType } from "../types/author";
import { deleteReq, getReq, postReq, putReq } from "./api";

export const getAuthorAPI = (authorId: number): Promise<AuthorType> => {
	return getReq(`author/${authorId}`);
};

export const getAuthorsAPI = (): Promise<AuthorType[]> => {
	return getReq("author");
};

export const postAuthorAPI = (data: AuthorType) => {
	return postReq("author", data);
};

export const putAuthorAPI = (authorId: number, data: AuthorType) => {
	return putReq(`author/${authorId}`, data);
};

export const deleteAuthorAPI = (authorId: number) => {
	return deleteReq(`author/${authorId}`);
};
