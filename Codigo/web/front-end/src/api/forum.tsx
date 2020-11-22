import { ForumType } from "../types/forum";
import { deleteReq, getReq, putReq } from "./api";

export const getForumsAPI = (): Promise<ForumType[]> => {
	return getReq("forum");
};

export const getForumAPI = (forumId: number): Promise<ForumType[]> => {
	return getReq(`forum/${forumId}`);
};

export const deleteForumAPI = (forumId: number) => {
	return deleteReq(`forum/${forumId}`);
};

export const approveForumPostAPI = (forumPostId: number) => {
	return putReq(`forum/${forumPostId}/approve_post`, {});
};

export const deleteForumPostAPI = (forumPostId: number) => {
	return deleteReq(`forum/${forumPostId}/delete_post`);
};
