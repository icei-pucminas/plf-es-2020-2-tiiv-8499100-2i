import { getVideoSubcategoryAPI } from "../../api/video_subcategory";
import { VideoSubcategoryType } from "../../types/category";

export enum VideoSubcategoryActionsEnum {
	FETCH_VIDEO_SUBCATEGORY_BEGIN = "FETCH_VIDEO_SUBCATEGORY_BEGIN",
	FETCH_VIDEO_SUBCATEGORY_SUCCESS = "FETCH_VIDEO_SUBCATEGORY_SUCCESS",
	FETCH_VIDEO_SUBCATEGORY_FAIL = "FETCH_VIDEO_SUBCATEGORY_FAIL",
	UPDATE_VIDEO_SUBCATEGORY = "UPDATE_VIDEO_SUBCATEGORY",
	CLEAR_VIDEO_SUBCATEGORY = "CLEAR_VIDEO_SUBCATEGORY",
}

export const fetchVideoSubcategoryBegin = () => ({
	type: VideoSubcategoryActionsEnum.FETCH_VIDEO_SUBCATEGORY_BEGIN,
});

export const fetchVideoSubcategorySuccess = (
	videoSubcategory: VideoSubcategoryType
) => ({
	type: VideoSubcategoryActionsEnum.FETCH_VIDEO_SUBCATEGORY_SUCCESS,
	videoSubcategory,
});

export const fetchVideoSubcategoryFailure = () => ({
	type: VideoSubcategoryActionsEnum.FETCH_VIDEO_SUBCATEGORY_FAIL,
});

export const updateVideoSubcategory = (videoSubcategory: any) => ({
	type: VideoSubcategoryActionsEnum.UPDATE_VIDEO_SUBCATEGORY,
	videoSubcategory,
});

export const clearVideoSubcategory = () => ({
	type: VideoSubcategoryActionsEnum.CLEAR_VIDEO_SUBCATEGORY,
});

export const fetchVideoSubcategory = (videoSubcategoryId: number) => {
	return async (dispatch: any) => {
		dispatch(fetchVideoSubcategoryBegin());

		try {
			const data = await getVideoSubcategoryAPI(videoSubcategoryId);
			dispatch(fetchVideoSubcategorySuccess(data));
		} catch (error) {
			dispatch(fetchVideoSubcategoryFailure());
		}
	};
};
