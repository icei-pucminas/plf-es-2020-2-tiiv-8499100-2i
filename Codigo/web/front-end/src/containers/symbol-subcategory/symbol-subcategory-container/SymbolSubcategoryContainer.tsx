import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SymbolSubcategoryPage from "../../../pages/symbol-subcategory-page/SymbolSubcategoryPage";
import {
	updateSymbolSubcategory,
	fetchSymbolSubcategory,
	clearSymbolSubcategory,
} from "../../../store/symbolSubcategory/actions";
import { RouterProps, useParams } from "react-router";
import Spinner from "../../../components/spinner/Spinner";
import { fetchSymbolCategories } from "../../../store/symbolCategories/actions";
import {
	postSymbolSubcategoryAPI,
	putSymbolSubcategoryAPI,
} from "../../../api/symbol_subcategory";

const SymbolSubcategoryContainer = (props: RouterProps) => {
	const dispatchHook = useDispatch();

	const { symbolSubcategoryId } = useParams<any>();
	const { symbolSubcategory, status } = useSelector(
		(state: any) => state.symbolSubcategory
	);
	const { symbolCategories } = useSelector(
		(state: any) => state.symbolCategories
	);

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		dispatchHook(fetchSymbolCategories());
		if (symbolSubcategoryId) {
			dispatchHook(fetchSymbolSubcategory(+symbolSubcategoryId));
		}

		return () => {
			dispatchHook(clearSymbolSubcategory());
		};
	}, [dispatchHook, symbolSubcategoryId]);

	const onChangeInput = (
		event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		dispatchHook(
			updateSymbolSubcategory({
				[event.target.id]: event.target.value,
			})
		);
	};

	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setLoading(true);

		try {
			if (!symbolSubcategoryId) {
				await postSymbolSubcategoryAPI(symbolSubcategory);
				props.history.push("/subcategoria-simbolo");
				return;
			}

			await putSymbolSubcategoryAPI(+symbolSubcategoryId, symbolSubcategory);
			props.history.push("/subcategoria-simbolo");
		} catch {
			alert("Ocorreu um erro. Tente novamente mais tarde.");
			setLoading(false);
		}
	};

	const page =
		loading || status === "loading" ? (
			<Spinner />
		) : !status ? (
			<SymbolSubcategoryPage
				type="new"
				onSubmit={onSubmit}
				onChangeInput={onChangeInput}
				symbolSubcategory={symbolSubcategory}
				symbolCategories={symbolCategories}
			/>
		) : status === "success" ? (
			<SymbolSubcategoryPage
				type="new"
				onSubmit={onSubmit}
				onChangeInput={onChangeInput}
				symbolSubcategory={symbolSubcategory}
				symbolCategories={symbolCategories}
			/>
		) : status === "error" ? (
			<>error</>
		) : (
			<></>
		);

	return page;
};

export default SymbolSubcategoryContainer;
