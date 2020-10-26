import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	updateSymbolCategory,
	fetchSymbolCategory,
	clearSymbolCategory,
} from "../../../store/symbolCategory/actions";
import SymbolCategoryPage from "../../../pages/symbol-category-page/SymbolCategoryPage";
import { RouterProps, useParams } from "react-router";
import Spinner from "../../../components/spinner/Spinner";
import {
	postSymbolCategoryAPI,
	putSymbolCategoryAPI,
} from "../../../api/symbol_category";

const SymbolCategoryContainer = (props: RouterProps) => {
	const dispatchHook = useDispatch();

	const { symbolCategoryId } = useParams<any>();
	const { symbolCategory, status } = useSelector(
		(state: any) => state.symbolCategory
	);

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (symbolCategoryId) {
			dispatchHook(fetchSymbolCategory(+symbolCategoryId));
		}

		return () => {
			dispatchHook(clearSymbolCategory());
		};
	}, [dispatchHook, symbolCategoryId]);

	const onChangeInput = (
		event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		dispatchHook(
			updateSymbolCategory({
				[event.target.id]: event.target.value,
			})
		);
	};

	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setLoading(true);

		try {
			if (!symbolCategoryId) {
				await postSymbolCategoryAPI(symbolCategory);
				props.history.push("/categoria-simbolo");
				return;
			}

			await putSymbolCategoryAPI(+symbolCategoryId, symbolCategory);
			props.history.push("/categoria-simbolo");
		} catch {
			alert("Ocorreu um erro. Tente novamente mais tarde.");
			setLoading(false);
		}
	};

	const page =
		loading || status === "loading" ? (
			<Spinner />
		) : !status ? (
			<SymbolCategoryPage
				type="new"
				onSubmit={onSubmit}
				onChangeInput={onChangeInput}
				symbolCategory={symbolCategory}
			/>
		) : status === "success" ? (
			<SymbolCategoryPage
				type="update"
				onSubmit={onSubmit}
				onChangeInput={onChangeInput}
				symbolCategory={symbolCategory}
			/>
		) : status === "error" ? (
			<>error</>
		) : (
			<></>
		);

	return page;
};

export default SymbolCategoryContainer;
