import { getAdAPI } from "../../api/ad";
import { AdType } from "../../types/ad";

export enum AdActionsEnum {
	FETCH_AD_BEGIN = "FETCH_AD_BEGIN",
	FETCH_AD_SUCCESS = "FETCH_AD_SUCCESS",
	FETCH_AD_FAIL = "FETCH_AD_FAIL",
	UPDATE_AD = "UPDATE_AD",
	CLEAR_AD = "CLEAR_AD",
}

export const fetchAdBegin = () => ({
	type: AdActionsEnum.FETCH_AD_BEGIN,
});

export const fetchAdSuccess = (ad: AdType) => ({
	type: AdActionsEnum.FETCH_AD_SUCCESS,
	ad,
});

export const fetchAdFail = () => ({
	type: AdActionsEnum.FETCH_AD_FAIL,
});

export const updateAd = (ad: any) => ({
	type: AdActionsEnum.UPDATE_AD,
	ad,
});

export const clearAd = () => ({
	type: AdActionsEnum.CLEAR_AD,
});

export const fetchAd = (adId: number) => {
	return async (dispatch: any) => {
		dispatch(fetchAdBegin());

		try {
			const data = await getAdAPI(adId);
			dispatch(fetchAdSuccess(data));
		} catch (error) {
			dispatch(fetchAdFail());
		}
	};
};
