import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import VideoViewsCard from "../../../components/cards-views/video-views-card/VideoViewsCard";
import Grid from "../../../layout/grid/Grid";
import { fetchVideos } from "../../../store/videos/actions";

const VideosStatsPage = () => {
	const dispatchHook = useDispatch();
	const { videos } = useSelector((state: any) => state.videos);

	useEffect(() => {
		dispatchHook(fetchVideos());
	}, [dispatchHook]);

	const cards = videos?.map((p) => (
		<VideoViewsCard key={p.id} name={p.title} views="10" id={p.id} />
	));

	return <Grid>{cards}</Grid>;
};

export default VideosStatsPage;
