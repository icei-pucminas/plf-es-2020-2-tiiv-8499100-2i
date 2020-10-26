import { getSymbolSubcategoriesAPI } from "../../api/symbol_subcategory";
import { SymbolSubcategoryType } from "../../types/category";

export enum SymbolSubcategoriesActionsEnum {
	FETCH_SYMBOL_SUBCATEGORIES_BEGIN = "FETCH_SYMBOL_SUBCATEGORIES_BEGIN",
	FETCH_SYMBOL_SUBCATEGORIES_SUCCESS = "FETCH_SYMBOL_SUBCATEGORIES_SUCCESS",
	FETCH_SYMBOL_SUBCATEGORIES_FAIL = "FETCH_SYMBOL_SUBCATEGORIES_FAIL",
}

export const fetchSymbolSubcategoriesBegin = () => ({
	type: SymbolSubcategoriesActionsEnum.FETCH_SYMBOL_SUBCATEGORIES_BEGIN,
});

export const fetchSymbolSubcategoriesSuccess = (
	symbolSubcategories: SymbolSubcategoryType[]
) => {
	return {
		type: SymbolSubcategoriesActionsEnum.FETCH_SYMBOL_SUBCATEGORIES_SUCCESS,
		symbolSubcategories,
	};
};

export const fetchSymbolSubcategoriesFail = () => ({
	type: SymbolSubcategoriesActionsEnum.FETCH_SYMBOL_SUBCATEGORIES_FAIL,
});

export const fetchSymbolSubcategories = () => {
	return async (dispatch: any) => {
		dispatch(fetchSymbolSubcategoriesBegin());

		try {
			const data = await getSymbolSubcategoriesAPI();
			dispatch(fetchSymbolSubcategoriesSuccess(data));
		} catch (error) {
			dispatch(fetchSymbolSubcategoriesFail());
		}
	};
};
