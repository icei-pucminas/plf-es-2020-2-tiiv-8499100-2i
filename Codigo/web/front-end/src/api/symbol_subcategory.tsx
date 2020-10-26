import { SymbolSubcategoryType } from "../types/category";
import { deleteReq, getReq, postReq, putReq } from "./api";

export const getSymbolSubcategoryAPI = (
	symbolSubcategoryId: number
): Promise<SymbolSubcategoryType> => {
	return getReq(`symbol_subcategory/${symbolSubcategoryId}`);
};

export const getSymbolSubcategoriesAPI = (): Promise<
	SymbolSubcategoryType[]
> => {
	return getReq("symbol_subcategory");
};

export const postSymbolSubcategoryAPI = (data: SymbolSubcategoryType) => {
	return postReq("symbol_subcategory", data);
};

export const putSymbolSubcategoryAPI = (
	symbolSubcategoryId: number,
	data: SymbolSubcategoryType
) => {
	return putReq(`symbol_subcategory/${symbolSubcategoryId}`, data);
};

export const deleteSymbolSubcategoryAPI = (symbolSubcategoryId: number) => {
	return deleteReq(`symbol_subcategory/${symbolSubcategoryId}`);
};
