import { VideoType } from "../types/video";
import { deleteReq, getReq, postReq, putReq } from "./api";

export const getVideoAPI = (videoId: number): Promise<VideoType> => {
	return getReq(`video/${videoId}`);
};

export const getVideosAPI = (): Promise<VideoType[]> => {
	return getReq("video?noads=true");
};

export const postVideoAPI = (data: VideoType) => {
	return postReq("video", data);
};

export const putVideoAPI = (videoId: number, data: VideoType) => {
	return putReq(`video/${videoId}`, data);
};

export const deleteVideoAPI = (videoId: number) => {
	return deleteReq(`video/${videoId}`);
};
