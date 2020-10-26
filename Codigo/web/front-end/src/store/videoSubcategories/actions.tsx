import { getVideoSubcategoriesAPI } from "../../api/video_subcategory";
import { VideoCategoryType } from "../../types/category";

export enum VideoSubcategoriesActionsEnum {
	FETCH_VIDEO_SUBCATEGORIES_BEGIN = "FETCH_VIDEO_SUBCATEGORIES_BEGIN",
	FETCH_VIDEO_SUBCATEGORIES_SUCCESS = "FETCH_VIDEO_SUBCATEGORIES_SUCCESS",
	FETCH_VIDEO_SUBCATEGORIES_FAIL = "FETCH_VIDEO_SUBCATEGORIES_FAIL",
}

export const fetchVideoSubcategoriesBegin = () => ({
	type: VideoSubcategoriesActionsEnum.FETCH_VIDEO_SUBCATEGORIES_BEGIN,
});

export const fetchVideoSubcategoriesSuccess = (
	videoSubcategories: VideoCategoryType[]
) => {
	return {
		type: VideoSubcategoriesActionsEnum.FETCH_VIDEO_SUBCATEGORIES_SUCCESS,
		videoSubcategories,
	};
};

export const fetchVideoSubcategoriesFail = () => ({
	type: VideoSubcategoriesActionsEnum.FETCH_VIDEO_SUBCATEGORIES_FAIL,
});

export const fetchVideoSubcategories = () => {
	return async (dispatch: any) => {
		dispatch(fetchVideoSubcategoriesBegin());

		try {
			const data = await getVideoSubcategoriesAPI();
			dispatch(fetchVideoSubcategoriesSuccess(data));
		} catch (error) {
			dispatch(fetchVideoSubcategoriesFail());
		}
	};
};
