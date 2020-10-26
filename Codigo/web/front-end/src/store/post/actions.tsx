import { getPostAPI } from "../../api/post";
import { PostType } from "../../types/post";

export enum PostActionsEnum {
	FETCH_POST_BEGIN = "FETCH_POST_BEGIN",
	FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS",
	FETCH_POST_FAIL = "FETCH_POST_FAIL",
	UPDATE_POST = "UPDATE_POST",
	CLEAR_POST = "CLEAR_POST",
}

export const fetchPostBegin = () => ({
	type: PostActionsEnum.FETCH_POST_BEGIN,
});

export const fetchPostSuccess = (post: PostType) => ({
	type: PostActionsEnum.FETCH_POST_SUCCESS,
	post,
});

export const fetchPostFailure = () => ({
	type: PostActionsEnum.FETCH_POST_FAIL,
});

export const updatePost = (post: any) => ({
	type: PostActionsEnum.UPDATE_POST,
	post,
});

export const clearPost = () => ({
	type: PostActionsEnum.CLEAR_POST,
});

export const fetchPost = (postId: number) => {
	return async (dispatch: any) => {
		dispatch(fetchPostBegin());

		try {
			const data = await getPostAPI(postId);
			dispatch(fetchPostSuccess(data));
		} catch (error) {
			dispatch(fetchPostFailure());
		}
	};
};
