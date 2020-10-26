import { getSymbolCategoriesAPI } from "../../api/symbol_category";
import { SymbolCategoryType } from "../../types/category";

export enum SymbolCategoriesActionsEnum {
	FETCH_SYMBOL_CATEGORIES_BEGIN = "FETCH_SYMBOL_SUBCATEGORIES_BEGIN",
	FETCH_SYMBOL_CATEGORIES_SUCCESS = "FETCH_SYMBOL_SUBCATEGORIES_SUCCESS",
	FETCH_SYMBOL_CATEGORIES_FAIL = "FETCH_SYMBOL_SUBCATEGORIES_FAIL",
}

export const fetchSymbolCategoriesBegin = () => ({
	type: SymbolCategoriesActionsEnum.FETCH_SYMBOL_CATEGORIES_BEGIN,
});

export const fetchSymbolCategoriesSuccess = (
	symbolCategories: SymbolCategoryType[]
) => {
	return {
		type: SymbolCategoriesActionsEnum.FETCH_SYMBOL_CATEGORIES_SUCCESS,
		symbolCategories,
	};
};

export const fetchSymbolCategoriesFail = () => ({
	type: SymbolCategoriesActionsEnum.FETCH_SYMBOL_CATEGORIES_FAIL,
});

export const fetchSymbolCategories = () => {
	return async (dispatch: any) => {
		dispatch(fetchSymbolCategoriesBegin());

		try {
			const data = await getSymbolCategoriesAPI();
			dispatch(fetchSymbolCategoriesSuccess(data));
		} catch (error) {
			dispatch(fetchSymbolCategoriesFail());
		}
	};
};
