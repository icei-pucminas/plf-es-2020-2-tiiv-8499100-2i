import { getVideoCategoryAPI } from "../../api/video_category";
import { VideoCategoryType } from "../../types/category";

export enum VideoCategoryActionsEnum {
	FETCH_VIDEO_CATEGORY_BEGIN = "FETCH_VIDEO_CATEGORY_BEGIN",
	FETCH_VIDEO_CATEGORY_SUCCESS = "FETCH_VIDEO_CATEGORY_SUCCESS",
	FETCH_VIDEO_CATEGORY_FAIL = "FETCH_VIDEO_CATEGORY_FAIL",
	UPDATE_VIDEO_CATEGORY = "UPDATE_VIDEO_CATEGORY",
	CLEAR_VIDEO_CATEGORY = "CLEAR_VIDEO_CATEGORY",
}

export const fetchVideoCategoryBegin = () => ({
	type: VideoCategoryActionsEnum.FETCH_VIDEO_CATEGORY_BEGIN,
});

export const fetchVideoCategorySuccess = (
	videoCategory: VideoCategoryType
) => ({
	type: VideoCategoryActionsEnum.FETCH_VIDEO_CATEGORY_SUCCESS,
	videoCategory,
});

export const fetchVideoCategoryFail = () => ({
	type: VideoCategoryActionsEnum.FETCH_VIDEO_CATEGORY_FAIL,
});

export const updateVideoCategory = (videoCategory: any) => ({
	type: VideoCategoryActionsEnum.UPDATE_VIDEO_CATEGORY,
	videoCategory,
});

export const clearVideoCategory = () => ({
	type: VideoCategoryActionsEnum.CLEAR_VIDEO_CATEGORY,
});

export const fetchVideoCategory = (videoCategoryId: number) => {
	return async (dispatch: any) => {
		dispatch(fetchVideoCategoryBegin());

		try {
			const data = await getVideoCategoryAPI(videoCategoryId);
			dispatch(fetchVideoCategorySuccess(data));
		} catch (error) {
			dispatch(fetchVideoCategoryFail());
		}
	};
};
