import { ForumType } from "../types/forum";
import { deleteReq, getReq } from "./api";

export const getForumsAPI = (): Promise<ForumType[]> => {
	return getReq("forum");
};

export const getForumAPI = (forumId: number): Promise<ForumType[]> => {
	return getReq(`forum/${forumId}`);
};

export const deleteForumAPI = (forumId: number) => {
	return deleteReq(`forum/${forumId}`);
};

export const deleteForumPostAPI = (forumPostId: number) => {
	return deleteReq(`forum/${forumPostId}/delete_post`);
};
