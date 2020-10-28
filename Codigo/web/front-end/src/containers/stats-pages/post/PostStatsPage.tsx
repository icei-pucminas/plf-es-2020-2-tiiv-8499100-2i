import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostViewsCard from "../../../components/cards-views/post_views-card/PostViewsCard";
import Grid from "../../../layout/grid/Grid";
import { fetchPosts } from "../../../store/posts/actions";

const PostStatsPage = () => {
	const dispatchHook = useDispatch();
	const { posts } = useSelector((state: any) => state.posts);

	useEffect(() => {
		dispatchHook(fetchPosts());
	}, [dispatchHook]);

	const cards = posts?.map((p) => (
		<PostViewsCard
			key={p.id}
			name={p.title}
			views="10"
			viewability="10"
			id={p.id}
		/>
	));

	return <Grid>{cards}</Grid>;
};

export default PostStatsPage;
