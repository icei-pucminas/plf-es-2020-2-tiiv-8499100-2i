import { SymbolType } from "../types/symbol";
import { deleteReq, getReq, postReq, putReq } from "./api";

export const getSymbolAPI = (symbolId: number): Promise<SymbolType> => {
	return getReq(`symbol/${symbolId}`);
};

export const getSymbolsAPI = (): Promise<SymbolType[]> => {
	return getReq("symbol");
};

export const postSymbolAPI = (data: SymbolType) => {
	return postReq("symbol", data);
};

export const putSymbolAPI = (symbolId: number, data: SymbolType) => {
	return putReq(`symbol/${symbolId}`, data);
};

export const deleteSymbolAPI = (symbolId: number) => {
	return deleteReq(`symbol/${symbolId}`);
};
