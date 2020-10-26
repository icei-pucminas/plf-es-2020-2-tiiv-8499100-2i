import { getSymbolSubcategoryAPI } from "../../api/symbol_subcategory";
import { SymbolSubcategoryType } from "../../types/category";

export enum SymbolSubcategoryActionsEnum {
	FETCH_SYMBOL_SUBCATEGORY_BEGIN = "FETCH_SYMBOL_SUBCATEGORY_BEGIN",
	FETCH_SYMBOL_SUBCATEGORY_SUCCESS = "FETCH_SYMBOL_SUBCATEGORY_SUCCESS",
	FETCH_SYMBOL_SUBCATEGORY_FAIL = "FETCH_SYMBOL_SUBCATEGORY_FAIL",
	UPDATE_SYMBOL_SUBCATEGORY = "UPDATE_SYMBOL_SUBCATEGORY",
	CLEAR_SYMBOL_SUBCATEGORY = "CLEAR_SYMBOL_SUBCATEGORY",
}

export const fetchSymbolSubcategoryBegin = () => ({
	type: SymbolSubcategoryActionsEnum.FETCH_SYMBOL_SUBCATEGORY_BEGIN,
});

export const fetchSymbolSubcategorySuccess = (
	symbolSubcategory: SymbolSubcategoryType
) => ({
	type: SymbolSubcategoryActionsEnum.FETCH_SYMBOL_SUBCATEGORY_SUCCESS,
	symbolSubcategory,
});

export const fetchSymbolSubcategoryFail = () => ({
	type: SymbolSubcategoryActionsEnum.FETCH_SYMBOL_SUBCATEGORY_FAIL,
});

export const updateSymbolSubcategory = (symbolSubcategory: any) => ({
	type: SymbolSubcategoryActionsEnum.UPDATE_SYMBOL_SUBCATEGORY,
	symbolSubcategory,
});

export const clearSymbolSubcategory = () => ({
	type: SymbolSubcategoryActionsEnum.CLEAR_SYMBOL_SUBCATEGORY,
});

export const fetchSymbolSubcategory = (symbolSubcategoryId: number) => {
	return async (dispatch: any) => {
		dispatch(fetchSymbolSubcategoryBegin());

		try {
			const data = await getSymbolSubcategoryAPI(symbolSubcategoryId);
			dispatch(fetchSymbolSubcategorySuccess(data));
		} catch (error) {
			dispatch(fetchSymbolSubcategoryFail());
		}
	};
};
