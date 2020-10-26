import { getForumAPI, getForumsAPI } from "../../api/forum";

export enum ForumActionsEnum {
	FETCH_FORUM_BEGIN = "FETCH_FORUM_BEGIN",
	FETCH_FORUM_SUCCESS = "FETCH_FORUM_SUCCESS",
	FETCH_FORUM_FAIL = "FETCH_FORUM_FAIL",
	FETCH_FORUMS_BEGIN = "FETCH_FORUMS_BEGIN",
	FETCH_FORUMS_SUCCESS = "FETCH_FORUMS_SUCCESS",
	FETCH_FORUMS_FAIL = "FETCH_FORUMS_FAIL",
}

export const fetchForumBegin = () => ({
	type: ForumActionsEnum.FETCH_FORUM_BEGIN,
});

export const fetchForumSuccess = (forum: any) => {
	return {
		type: ForumActionsEnum.FETCH_FORUM_SUCCESS,
		forum,
	};
};

export const fetchForumFail = () => ({
	type: ForumActionsEnum.FETCH_FORUM_FAIL,
});

export const fetchForum = (forumId: number) => {
	return async (dispatch: any) => {
		dispatch(fetchForumBegin());

		try {
			const data = await getForumAPI(forumId);
			dispatch(fetchForumSuccess(data));
		} catch (error) {
			dispatch(fetchForumFail());
		}
	};
};

export const fetchForumsBegin = () => ({
	type: ForumActionsEnum.FETCH_FORUMS_BEGIN,
});

export const fetchForumsSuccess = (forums: any[]) => {
	return {
		type: ForumActionsEnum.FETCH_FORUMS_SUCCESS,
		forums,
	};
};

export const fetchForumsFail = () => ({
	type: ForumActionsEnum.FETCH_FORUMS_FAIL,
});

export const fetchForums = () => {
	return async (dispatch: any) => {
		dispatch(fetchForumsBegin());

		try {
			const data = await getForumsAPI();
			dispatch(fetchForumsSuccess(data));
		} catch (error) {
			dispatch(fetchForumsFail());
		}
	};
};
