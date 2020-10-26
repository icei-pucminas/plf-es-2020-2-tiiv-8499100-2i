import { getAuthorsAPI } from "../../api/author";
import { AuthorType } from "../../types/author";

export enum AuthorsActionsEnum {
	FETCH_AUTHORS_BEGIN = "FETCH_AUTHORS_BEGIN",
	FETCH_AUTHORS_SUCCESS = "FETCH_AUTHORS_SUCCESS",
	FETCH_AUTHORS_FAIL = "FETCH_AUTHORS_FAIL",
}

export const fetchAuthorsBegin = () => ({
	type: AuthorsActionsEnum.FETCH_AUTHORS_BEGIN,
});

export const fetchAuthorsSuccess = (authors: AuthorType[]) => {
	return {
		type: AuthorsActionsEnum.FETCH_AUTHORS_SUCCESS,
		authors,
	};
};

export const fetchAuthorsFail = () => ({
	type: AuthorsActionsEnum.FETCH_AUTHORS_FAIL,
});

export const fetchAuthors = () => {
	return async (dispatch: any) => {
		dispatch(fetchAuthorsBegin());

		try {
			const data = await getAuthorsAPI();
			dispatch(fetchAuthorsSuccess(data));
		} catch (error) {
			dispatch(fetchAuthorsFail());
		}
	};
};
