import { getAdsAPI } from "../../api/ad";
import { AdType } from "../../types/ad";

export enum AdsActionsEnum {
	FETCH_ADS_BEGIN = "FETCH_ADS_BEGIN",
	FETCH_ADS_SUCCESS = "FETCH_ADS_SUCCESS",
	FETCH_ADS_FAIL = "FETCH_ADS_FAIL",
}

export const fetchAdsBegin = () => ({
	type: AdsActionsEnum.FETCH_ADS_BEGIN,
});

export const fetchAdsSuccess = (ads: AdType[]) => {
	return {
		type: AdsActionsEnum.FETCH_ADS_SUCCESS,
		ads,
	};
};

export const fetchAdsFail = () => ({
	type: AdsActionsEnum.FETCH_ADS_FAIL,
});

export const fetchAds = () => {
	return async (dispatch: any) => {
		dispatch(fetchAdsBegin());

		try {
			const data = await getAdsAPI();
			dispatch(fetchAdsSuccess(data));
		} catch (error) {
			dispatch(fetchAdsFail());
		}
	};
};
