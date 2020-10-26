import { VideoCategoryType } from "../types/category";
import { deleteReq, getReq, postReq, putReq } from "./api";

export const getVideoCategoryAPI = (
	videoCategoryId: number
): Promise<VideoCategoryType> => {
	return getReq(`video_category/${videoCategoryId}`);
};

export const getVideoCategoriesAPI = (): Promise<VideoCategoryType[]> => {
	return getReq("video_category");
};

export const postVideoCategoryAPI = (data: VideoCategoryType) => {
	return postReq("video_category", data);
};

export const putVideoCategoryAPI = (
	videoCategoryId: number,
	data: VideoCategoryType
) => {
	return putReq(`video_category/${videoCategoryId}`, data);
};

export const deleteVideoCategoryAPI = (videoCategoryId: number) => {
	return deleteReq(`video_category/${videoCategoryId}`);
};
