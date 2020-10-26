import { getPostsAPI } from "../../api/post";
import { PostType } from "../../types/post";

export enum PostsActionsEnum {
	FETCH_POSTS_BEGIN = "FETCH_POSTS_BEGIN",
	FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS",
	FETCH_POSTS_FAIL = "FETCH_POSTS_FAIL",
}

export const fetchPostsBegin = () => ({
	type: PostsActionsEnum.FETCH_POSTS_BEGIN,
});

export const fetchPostsSuccess = (posts: PostType[]) => ({
	type: PostsActionsEnum.FETCH_POSTS_SUCCESS,
	posts,
});

export const fetchPostsFail = () => ({
	type: PostsActionsEnum.FETCH_POSTS_FAIL,
});

export const fetchPosts = () => {
	return async (dispatch) => {
		dispatch(fetchPostsBegin());

		try {
			const data = await getPostsAPI();
			dispatch(fetchPostsSuccess(data));
		} catch (error) {
			dispatch(fetchPostsFail());
		}
	};
};
