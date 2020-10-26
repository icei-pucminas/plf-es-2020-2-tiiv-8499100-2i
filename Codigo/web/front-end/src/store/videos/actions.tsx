import { getVideosAPI } from "../../api/video";
import { VideoType } from "../../types/video";

export enum VideosActionsEnum {
	FETCH_VIDEOS_BEGIN = "FETCH_VIDEOS_BEGIN",
	FETCH_VIDEOS_SUCCESS = "FETCH_VIDEOS_SUCCESS",
	FETCH_VIDEOS_FAIL = "FETCH_VIDEOS_FAIL",
}

export const fetchVideosBegin = () => ({
	type: VideosActionsEnum.FETCH_VIDEOS_BEGIN,
});

export const fetchVideosSuccess = (videos: VideoType[]) => ({
	type: VideosActionsEnum.FETCH_VIDEOS_SUCCESS,
	videos,
});

export const fetchVideosFail = () => ({
	type: VideosActionsEnum.FETCH_VIDEOS_FAIL,
});

export const fetchVideos = () => {
	return async (dispatch: any) => {
		dispatch(fetchVideosBegin());

		try {
			const data = await getVideosAPI();
			dispatch(fetchVideosSuccess(data));
		} catch (error) {
			dispatch(fetchVideosFail());
		}
	};
};
