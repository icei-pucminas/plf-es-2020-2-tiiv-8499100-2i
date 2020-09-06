import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RouteComponentProps } from "react-router";

import Spacer from "../../../layout/spacer/Spacer";
import Title from "../../../components/title/Title";
import Spinner from "../../../components/spinner/Spinner";
import NewButton from "../../../components/new-button/NewButton";
import { fetchSymbolSubcategories } from "../../../store/symbolSubcategories/actions";
import CategoryCard from "../../../components/cards/category-card/CategoryCard";
import { SymbolSubcategoryType } from "../../../types/category";
import { deleteSymbolSubcategoryAPI } from "../../../api/api";

const ViewSymbolSubcategoryContainer = (props: RouteComponentProps) => {
	const dispatchHook = useDispatch();
	const { symbolSubcategories, status } = useSelector(
		(state: any) => state.symbolSubcategories
	);

	const getSymbolSubcategoriesHandler = () => {
		dispatchHook(fetchSymbolSubcategories());
	};

	const editSymbolSubcategoriesHandler = (symbolSubcategoryId: string) => {
		props.history.push("/subcategoria-simbolo/editar/" + symbolSubcategoryId);
	};

	const deleteSymbolSubcategoriesHandler = async (
		symbolSubcategoryId: string
	) => {
		await deleteSymbolSubcategoryAPI(symbolSubcategoryId);
		getSymbolSubcategoriesHandler();
	};

	const redirectToNew = () => {
		props.history.push("/subcategoria-simbolo/novo");
	};

	const symbolSubcategoriesEls = symbolSubcategories?.map(
		(symbolSubcategory: SymbolSubcategoryType) => (
			<div key={symbolSubcategory.symbol_sub_category_id}>
				<CategoryCard
					idSelector="symbol_sub_category_id"
					category={symbolSubcategory}
					editCategory={editSymbolSubcategoriesHandler}
					deleteCategory={deleteSymbolSubcategoriesHandler}
				/>
				<Spacer vertical={40} />
			</div>
		)
	);

	useEffect(() => {
		dispatchHook(fetchSymbolSubcategories());
	}, [dispatchHook]);

	return (
		<div>
			<Title accessories={[<NewButton onClick={redirectToNew} />]}>
				Subcategorias de Símbolos Cadastrados
			</Title>
			<Spacer vertical={40} />
			{status === "loading" ? (
				<Spinner />
			) : status === "success" ? (
				symbolSubcategoriesEls
			) : status === "error" ? (
				"error"
			) : null}
		</div>
	);
};

export default ViewSymbolSubcategoryContainer;
