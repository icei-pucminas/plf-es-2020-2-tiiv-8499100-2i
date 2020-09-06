import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RouteComponentProps } from "react-router";

import { fetchSymbolCategories } from "../../../store/symbolCategories/actions";

import Spacer from "../../../layout/spacer/Spacer";
import Title from "../../../components/title/Title";
import Spinner from "../../../components/spinner/Spinner";
import NewButton from "../../../components/new-button/NewButton";
import { deleteSymbolCategoryAPI } from "../../../api/api";
import { SymbolCategoryType } from "../../../types/category";
import CategoryCard from "../../../components/cards/category-card/CategoryCard";

const ViewSymbolCategoryContainer = (props: RouteComponentProps) => {
	const dispatchHook = useDispatch();
	const { symbolCategories, status } = useSelector(
		(state: any) => state.symbolCategories
	);

	const getSymbolCategoriesHandler = () => {
		dispatchHook(fetchSymbolCategories());
	};

	const editSymbolSubcategoryHandler = (symbolCategoryId: string) => {
		props.history.push("/categoria-simbolo/editar/" + symbolCategoryId);
	};

	const deleteSymbolSubcategoryHandler = async (symbolCategoryId: string) => {
		await deleteSymbolCategoryAPI(symbolCategoryId);
		getSymbolCategoriesHandler();
	};

	const redirectToNew = () => {
		props.history.push("/categoria-simbolo/novo");
	};

	const symbolCategoriesEls = symbolCategories?.map(
		(symbolCategory: SymbolCategoryType) => (
			<div key={symbolCategory.symbol_category_id}>
				<CategoryCard
					idSelector="symbol_category_id"
					category={symbolCategory}
					editCategory={editSymbolSubcategoryHandler}
					deleteCategory={deleteSymbolSubcategoryHandler}
				/>
				<Spacer vertical={40} />
			</div>
		)
	);

	useEffect(() => {
		dispatchHook(fetchSymbolCategories());
	}, [dispatchHook]);

	return (
		<div>
			<Title accessories={[<NewButton onClick={redirectToNew} />]}>
				Categorias de Símbolos Cadastradas
			</Title>
			<Spacer vertical={40} />
			{status === "loading" ? (
				<Spinner />
			) : status === "success" ? (
				symbolCategoriesEls
			) : status === "error" ? (
				"error"
			) : null}
		</div>
	);
};

export default ViewSymbolCategoryContainer;
