import { AdType } from "../types/ad";
import { deleteReq, getReq, postReq, putReq } from "./api";

export const getAdAPI = (adId: number): Promise<AdType> => {
	return getReq(`ad/${adId}`);
};

export const getAdsAPI = (): Promise<AdType[]> => {
	return getReq("ad");
};

export const postAdAPI = (data: AdType) => {
	return postReq("ad", data);
};

export const putAdAPI = (adId: number, data: AdType) => {
	return putReq(`ad/${adId}`, data);
};

export const deleteAdAPI = (adId: number) => {
	return deleteReq(`ad/${adId}`);
};
