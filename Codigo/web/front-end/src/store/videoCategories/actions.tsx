import { getVideoCategoriesAPI } from "../../api/video_category";
import { VideoCategoryType } from "../../types/category";

export enum VideoCategoriesActionsEnum {
	FETCH_VIDEO_CATEGORIES_BEGIN = "FETCH_VIDEO_CATEGORIES_BEGIN",
	FETCH_VIDEO_CATEGORIES_SUCCESS = "FETCH_VIDEO_CATEGORIES_SUCCESS",
	FETCH_VIDEO_CATEGORIES_FAIL = "FETCH_VIDEO_CATEGORIES_FAIL",
}

export const fetchVideoCategoriesBegin = () => ({
	type: VideoCategoriesActionsEnum.FETCH_VIDEO_CATEGORIES_BEGIN,
});

export const fetchVideoCategoriesSuccess = (
	videoCategories: VideoCategoryType[]
) => {
	return {
		type: VideoCategoriesActionsEnum.FETCH_VIDEO_CATEGORIES_SUCCESS,
		videoCategories,
	};
};

export const fetchVideoCategoriesFail = () => ({
	type: VideoCategoriesActionsEnum.FETCH_VIDEO_CATEGORIES_FAIL,
});

export const fetchVideoCategories = () => {
	return async (dispatch: any) => {
		dispatch(fetchVideoCategoriesBegin());

		try {
			const data = await getVideoCategoriesAPI();
			dispatch(fetchVideoCategoriesSuccess(data));
		} catch (error) {
			dispatch(fetchVideoCategoriesFail());
		}
	};
};
