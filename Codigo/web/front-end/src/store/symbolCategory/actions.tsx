import { getSymbolCategoryAPI } from "../../api/symbol_category";
import { SymbolCategoryType } from "../../types/category";

export enum SymbolCategoryEnum {
	FETCH_SYMBOL_CATEGORY_BEGIN = "FETCH_SYMBOL_CATEGORY_BEGIN",
	FETCH_SYMBOL_CATEGORY_SUCCESS = "FETCH_SYMBOL_CATEGORY_SUCCESS",
	FETCH_SYMBOL_CATEGORY_FAIL = "FETCH_SYMBOL_CATEGORY_FAIL",
	UPDATE_SYMBOL_CATEGORY = "UPDATE_SYMBOL_CATEGORY",
	CLEAR_SYMBOL_CATEGORY = "CLEAR_SYMBOL_CATEGORY",
}

export const fetchSymbolCategoryBegin = () => ({
	type: SymbolCategoryEnum.FETCH_SYMBOL_CATEGORY_BEGIN,
});

export const fetchSymbolCategorySuccess = (
	symbolCategory: SymbolCategoryType
) => ({
	type: SymbolCategoryEnum.FETCH_SYMBOL_CATEGORY_SUCCESS,
	symbolCategory,
});

export const fetchSymbolCategoryFail = () => ({
	type: SymbolCategoryEnum.FETCH_SYMBOL_CATEGORY_FAIL,
});

export const updateSymbolCategory = (symbolCategory: any) => ({
	type: SymbolCategoryEnum.UPDATE_SYMBOL_CATEGORY,
	symbolCategory,
});

export const clearSymbolCategory = () => ({
	type: SymbolCategoryEnum.CLEAR_SYMBOL_CATEGORY,
});

export const fetchSymbolCategory = (symbolCategoryId: number) => {
	return async (dispatch: any) => {
		dispatch(fetchSymbolCategoryBegin());

		try {
			const data = await getSymbolCategoryAPI(symbolCategoryId);
			dispatch(fetchSymbolCategorySuccess(data));
		} catch (error) {
			dispatch(fetchSymbolCategoryFail());
		}
	};
};
