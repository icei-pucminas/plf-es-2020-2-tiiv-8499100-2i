import { VideoSubcategoryType } from "../types/category";
import { deleteReq, getReq, postReq, putReq } from "./api";

export const getVideoSubcategoryAPI = (
	videoSubcategoryId: number
): Promise<VideoSubcategoryType> => {
	return getReq(`video_subcategory/${videoSubcategoryId}`);
};

export const getVideoSubcategoriesAPI = (): Promise<VideoSubcategoryType[]> => {
	return getReq("video_subcategory");
};

export const postVideoSubcategoryAPI = (data: VideoSubcategoryType) => {
	return postReq("video_subcategory", data);
};

export const putVideoSubcategoryAPI = (
	videoSubcategoryId: number,
	data: VideoSubcategoryType
) => {
	return putReq(`video_subcategory/${videoSubcategoryId}`, data);
};

export const deleteVideoSubcategoryAPI = (videoSubcategoryId: number) => {
	return deleteReq(`video_subcategory/${videoSubcategoryId}`);
};
