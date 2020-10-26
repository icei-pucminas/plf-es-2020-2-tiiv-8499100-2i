import { getAuthorAPI } from "../../api/author";
import { AuthorType } from "../../types/author";

export enum AuthorActionsEnum {
	FETCH_AUTHOR_BEGIN = "FETCH_AUTHOR_BEGIN",
	FETCH_AUTHOR_SUCCESS = "FETCH_AUTHOR_SUCCESS",
	FETCH_AUTHOR_FAIL = "FETCH_AUTHOR_FAIL",
	UPDATE_AUTHOR = "UPDATE_AUTHOR",
	CLEAR_AUTHOR = "CLEAR_AUTHOR",
}

export const fetchAuthorBegin = () => ({
	type: AuthorActionsEnum.FETCH_AUTHOR_BEGIN,
});

export const fetchAuthorSuccess = (author: AuthorType) => ({
	type: AuthorActionsEnum.FETCH_AUTHOR_SUCCESS,
	author,
});

export const fetchAuthorFail = () => ({
	type: AuthorActionsEnum.FETCH_AUTHOR_FAIL,
});

export const updateAuthor = (author: any) => ({
	type: AuthorActionsEnum.UPDATE_AUTHOR,
	author,
});

export const clearAuthor = () => ({
	type: AuthorActionsEnum.CLEAR_AUTHOR,
});

export const fetchAuthor = (authorId: number) => {
	return async (dispatch: any) => {
		dispatch(fetchAuthorBegin());

		try {
			const data = await getAuthorAPI(authorId);
			dispatch(fetchAuthorSuccess(data));
		} catch (error) {
			dispatch(fetchAuthorFail());
		}
	};
};
