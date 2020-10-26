import { getSymbolAPI } from "../../api/symbol";
import { SymbolType } from "../../types/symbol";

export enum SymbolActionsEnum {
	FETCH_SYMBOL_BEGIN = "FETCH_SYMBOL_BEGIN",
	FETCH_SYMBOL_SUCCESS = "FETCH_SYMBOL_SUCCESS",
	FETCH_SYMBOL_FAIL = "FETCH_SYMBOL_FAIL",
	UPDATE_SYMBOL = "UPDATE_SYMBOL",
	CLEAR_SYMBOL = "CLEAR_SYMBOL",
}

export const fetchSymbolBegin = () => ({
	type: SymbolActionsEnum.FETCH_SYMBOL_BEGIN,
});

export const fetchSymbolSuccess = (symbol: SymbolType) => ({
	type: SymbolActionsEnum.FETCH_SYMBOL_SUCCESS,
	symbol,
});

export const fetchSymbolFailure = () => ({
	type: SymbolActionsEnum.FETCH_SYMBOL_FAIL,
});

export const updateSymbol = (symbol: any) => ({
	type: SymbolActionsEnum.UPDATE_SYMBOL,
	symbol,
});

export const clearSymbol = () => ({
	type: SymbolActionsEnum.CLEAR_SYMBOL,
});

export const fetchSymbol = (symbolId: number) => {
	return async (dispatch: any) => {
		dispatch(fetchSymbolBegin());

		try {
			const data = await getSymbolAPI(symbolId);
			dispatch(fetchSymbolSuccess(data));
		} catch (error) {
			dispatch(fetchSymbolFailure());
		}
	};
};
