import { getSymbolsAPI } from "../../api/symbol";
import { SymbolType } from "../../types/symbol";

export enum SymbolsActionsEnum {
	FETCH_SYMBOLS_BEGIN = "FETCH_SYMBOLS_BEGIN",
	FETCH_SYMBOLS_SUCCESS = "FETCH_SYMBOLS_SUCCESS",
	FETCH_SYMBOLS_FAIL = "FETCH_SYMBOLS_FAIL",
}

export const fetchSymbolsBegin = () => ({
	type: SymbolsActionsEnum.FETCH_SYMBOLS_BEGIN,
});

export const fetchSymbolsSuccess = (symbols: SymbolType[]) => ({
	type: SymbolsActionsEnum.FETCH_SYMBOLS_SUCCESS,
	symbols,
});

export const fetchSymbolsFail = () => ({
	type: SymbolsActionsEnum.FETCH_SYMBOLS_FAIL,
});

export const fetchSymbols = () => {
	return async (dispatch: any) => {
		dispatch(fetchSymbolsBegin());

		try {
			const data = await getSymbolsAPI();
			dispatch(fetchSymbolsSuccess(data));
		} catch (error) {
			dispatch(fetchSymbolsFail());
		}
	};
};
