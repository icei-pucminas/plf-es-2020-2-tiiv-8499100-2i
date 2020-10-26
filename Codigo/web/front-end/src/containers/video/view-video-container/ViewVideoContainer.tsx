import React from "react";
import { useDispatch } from "react-redux";
import { RouteComponentProps } from "react-router";
import { useSelector } from "react-redux";

import { VideoType } from "../../../types/video";
import { fetchVideos } from "../../../store/videos/actions";
import VideoCard from "../../../components/cards/video-card/VideoCard";
import Title from "../../../components/title/Title";
import Spacer from "../../../layout/spacer/Spacer";
import Spinner from "../../../components/spinner/Spinner";

import * as classes from "./ViewVideoContainer.module.css";
import NewButton from "../../../components/new-button/NewButton";
import { useEffect } from "react";
import { deleteVideoAPI } from "../../../api/video";

const ViewVideoContainer = (props: RouteComponentProps) => {
	const dispatchHook = useDispatch();
	const { videos, status } = useSelector((state: any) => state.videos);

	const getVideosHandler = () => {
		dispatchHook(fetchVideos());
	};

	const editVideoHandler = (videoId: number) => {
		props.history.push("/video/editar/" + videoId);
	};

	const deleteVideoHandler = async (videoId: number) => {
		await deleteVideoAPI(videoId);
		getVideosHandler();
	};

	const redirectToNew = () => {
		props.history.push("/video/novo");
	};

	useEffect(() => {
		dispatchHook(fetchVideos());
	}, [dispatchHook]);

	const videosEls = videos?.map((video: VideoType) => (
		<div key={video.id}>
			<VideoCard
				video={video}
				editVideo={editVideoHandler}
				deleteVideo={deleteVideoHandler}
			/>
		</div>
	));

	return (
		<>
			<Title accessories={[<NewButton onClick={redirectToNew} />]}>
				Vídeos Cadastrados
			</Title>
			<Spacer vertical={40} />
			{status === "loading" ? (
				<Spinner />
			) : status === "success" ? (
				<div className={classes["videoCardsContainer"]}>{videosEls}</div>
			) : status === "error" ? (
				"error"
			) : null}
		</>
	);
};

export default ViewVideoContainer;
