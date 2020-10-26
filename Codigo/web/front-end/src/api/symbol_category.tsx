import { SymbolCategoryType } from "../types/category";
import { deleteReq, getReq, postReq, putReq } from "./api";

export const getSymbolCategoryAPI = (
	symbolCategoryId: number
): Promise<SymbolCategoryType> => {
	return getReq(`symbol_category/${symbolCategoryId}`);
};

export const getSymbolCategoriesAPI = (): Promise<SymbolCategoryType[]> => {
	return getReq("symbol_category");
};

export const postSymbolCategoryAPI = (data: SymbolCategoryType) => {
	return postReq("symbol_category", data);
};

export const putSymbolCategoryAPI = (
	symbolCategoryId: number,
	data: SymbolCategoryType
) => {
	return putReq(`symbol_category/${symbolCategoryId}`, data);
};

export const deleteSymbolCategoryAPI = (symbolCategoryId: number) => {
	return deleteReq(`symbol_category/${symbolCategoryId}`);
};
