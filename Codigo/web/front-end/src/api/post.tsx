import { PostType } from "../types/post";
import { deleteReq, getReq, postReq, putReq } from "./api";

export const getPostAPI = (postId: number): Promise<PostType> => {
	return getReq(`post/${postId}`);
};

export const getPostsAPI = (): Promise<PostType[]> => {
	return getReq("post?noads=true");
};

export const postPostAPI = (data: PostType) => {
	return postReq("post", data);
};

export const putPostAPI = (postId: number, data: PostType) => {
	return putReq(`post/${postId}`, data);
};

export const deletePostAPI = (postId: number) => {
	return deleteReq(`post/${postId}`);
};
