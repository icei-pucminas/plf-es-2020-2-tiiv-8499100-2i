import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ForumViewsCard from "../../../components/cards-views/forum-views-card/ForumViewsCard";
import Grid from "../../../layout/grid/Grid";
import { fetchForums } from "../../../store/forum/actions";

const ForumStatsPage = () => {
	const dispatchHook = useDispatch();
	const { forums } = useSelector((state: any) => state.forum);

	useEffect(() => {
		dispatchHook(fetchForums());
	}, [dispatchHook]);

	console.log(forums);

	const cards = forums?.map((p) => (
		<ForumViewsCard
			key={p.id}
			name={p.title}
			views="10"
			responses="10"
			id={p.id}
		/>
	));

	return <Grid>{cards}</Grid>;
};

export default ForumStatsPage;
