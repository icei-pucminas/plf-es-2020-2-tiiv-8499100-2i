import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SymbolViewsCard from "../../../components/cards-views/symbol-views-card/SymbolViewsCard";
import Grid from "../../../layout/grid/Grid";
import { fetchSymbols } from "../../../store/symbols/actions";

const SymbolStatsPage = () => {
	const dispatchHook = useDispatch();
	const { symbols } = useSelector((state: any) => state.symbols);

	useEffect(() => {
		dispatchHook(fetchSymbols());
	}, [dispatchHook]);

	const cards = symbols?.map((p) => (
		<SymbolViewsCard
			key={p.id}
			name={p.title}
			views="10"
			viewability="10"
			id={p.id}
		/>
	));

	return <Grid>{cards}</Grid>;
};

export default SymbolStatsPage;
