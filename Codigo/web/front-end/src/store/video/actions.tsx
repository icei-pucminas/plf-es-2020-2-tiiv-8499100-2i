import { getVideoAPI } from "../../api/video";
import { VideoType } from "../../types/video";

export enum VideoActionsEnum {
	FETCH_VIDEO_BEGIN = "FETCH_VIDEO_BEGIN",
	FETCH_VIDEO_SUCCESS = "FETCH_VIDEO_SUCCESS",
	FETCH_VIDEO_FAIL = "FETCH_VIDEO_FAIL",
	UPDATE_VIDEO = "UPDATE_VIDEO",
	CLEAR_VIDEO = "CLEAR_VIDEO",
}

export const fetchVideoBegin = () => ({
	type: VideoActionsEnum.FETCH_VIDEO_BEGIN,
});

export const fetchVideoSuccess = (video: VideoType) => ({
	type: VideoActionsEnum.FETCH_VIDEO_SUCCESS,
	video,
});

export const fetchVideoFailure = () => ({
	type: VideoActionsEnum.FETCH_VIDEO_FAIL,
});

export const updateVideo = (video: any) => ({
	type: VideoActionsEnum.UPDATE_VIDEO,
	video,
});

export const clearVideo = () => ({
	type: VideoActionsEnum.CLEAR_VIDEO,
});

export const fetchVideo = (videoId: number) => {
	return async (dispatch: any) => {
		dispatch(fetchVideoBegin());

		try {
			const data = await getVideoAPI(videoId);
			dispatch(fetchVideoSuccess(data));
		} catch (error) {
			dispatch(fetchVideoFailure());
		}
	};
};
