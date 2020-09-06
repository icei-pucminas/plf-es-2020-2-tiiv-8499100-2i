import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { postSymbolAPI, putSymbolAPI } from "../../../api/api";
import {
	updateSymbol,
	fetchSymbol,
	clearSymbol,
} from "../../../store/symbol/actions";

import SymbolPage from "../../../pages/symbol-page/SymbolPage";
import { fetchSymbolSubcategories } from "../../../store/symbolSubcategories/actions";
import { RouterProps, useParams } from "react-router";
import Spinner from "../../../components/spinner/Spinner";

const SymbolContainer = (props: RouterProps) => {
	const dispatchHook = useDispatch();

	const { symbolId } = useParams();
	const { symbol, status } = useSelector((state: any) => state.symbol);
	const { symbolSubcategories } = useSelector(
		(state: any) => state.symbolSubcategories
	);

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		dispatchHook(fetchSymbolSubcategories());
		if (symbolId) {
			dispatchHook(fetchSymbol(symbolId));
		}

		return () => {
			dispatchHook(clearSymbol());
		};
	}, [dispatchHook, symbolId]);

	const onChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files ? event.target.files[0] : null;

		if (!file) {
			return;
		}

		dispatchHook(
			updateSymbol({
				[event.target.id]: file,
			})
		);
	};

	const onChangeInput = (
		event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		dispatchHook(
			updateSymbol({
				[event.target.id]: event.target.value,
			})
		);
	};

	const onChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
		dispatchHook(
			updateSymbol({
				[event.target.id]: event.target.value,
			})
		);
	};

	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setLoading(true);

		try {
			if (!symbolId) {
				await postSymbolAPI(symbol);
				props.history.push("/simbolo");
				return;
			}

			await putSymbolAPI(symbolId, symbol);
			props.history.push("/simbolo");
		} catch {
			alert("Ocorreu um erro. Tente novamente mais tarde.");
			setLoading(false);
		}
	};

	const page =
		loading || status === "loading" ? (
			<Spinner />
		) : !status ? (
			<SymbolPage
				type="new"
				onSubmit={onSubmit}
				onChangeImage={onChangeImage}
				onChangeInput={onChangeInput}
				onChangeTextArea={onChangeTextArea}
				symbol={symbol}
				symbolSubcategories={symbolSubcategories}
			/>
		) : status === "success" ? (
			<SymbolPage
				type="update"
				onSubmit={onSubmit}
				onChangeImage={onChangeImage}
				onChangeInput={onChangeInput}
				onChangeTextArea={onChangeTextArea}
				symbol={symbol}
				symbolSubcategories={symbolSubcategories}
			/>
		) : status === "error" ? (
			<>error</>
		) : (
			<></>
		);

	return page;
};

export default SymbolContainer;
