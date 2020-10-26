import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router";

import { fetchPosts } from "../../../store/posts/actions";

import Title from "../../../components/title/Title";
import Spacer from "../../../layout/spacer/Spacer";
import Spinner from "../../../components/spinner/Spinner";
import SymbolCard from "../../../components/cards/symbol-card/SymbolCard";
import { SymbolType } from "../../../types/symbol";
import { fetchSymbols } from "../../../store/symbols/actions";

import * as classes from "./ViewSymbolContainer.module.css";
import NewButton from "../../../components/new-button/NewButton";
import { deleteSymbolAPI } from "../../../api/symbol";

const ViewSymbolContainer = (props: RouteComponentProps) => {
	const dispatchHook = useDispatch();
	const { symbols, status } = useSelector((state: any) => state.symbols);

	const getSymbolHandler = () => {
		dispatchHook(fetchPosts());
	};

	const editSymbolHandler = (symbolId: number) => {
		props.history.push("/simbolo/editar/" + symbolId);
	};

	const deleteSymbolHandler = async (symbolId: number) => {
		await deleteSymbolAPI(symbolId);
		getSymbolHandler();
	};

	const redirectToNew = () => {
		props.history.push("/simbolo/novo");
	};

	const symbolsEls = symbols?.map((symbol: SymbolType) => (
		<div key={symbol.id}>
			<SymbolCard
				symbol={symbol}
				editSymbol={editSymbolHandler}
				deleteSymbol={deleteSymbolHandler}
			/>
		</div>
	));

	useEffect(() => {
		dispatchHook(fetchSymbols());
	}, [dispatchHook]);

	return (
		<>
			<Title accessories={[<NewButton onClick={redirectToNew} />]}>
				Símbolos Cadastrados
			</Title>
			<Spacer vertical={40} />
			{status === "loading" ? (
				<Spinner />
			) : status === "success" ? (
				<div className={classes["symbolCardsContainer"]}>{symbolsEls}</div>
			) : status === "error" ? (
				"error"
			) : null}
		</>
	);
};

export default ViewSymbolContainer;
