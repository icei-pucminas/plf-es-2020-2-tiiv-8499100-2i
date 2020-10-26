import React, { useEffect, ChangeEvent, FormEvent, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	updateVideo,
	fetchVideo,
	clearVideo,
} from "../../../store/video/actions";
import VideoPage from "../../../pages/video-page/VideoPage";
import { fetchVideoSubcategories } from "../../../store/videoSubcategories/actions";
import { RouterProps, useParams } from "react-router";
import Spinner from "../../../components/spinner/Spinner";
import { postVideoAPI, putVideoAPI } from "../../../api/video";

const VideoContainer = (props: RouterProps) => {
	const dispatchHook = useDispatch();

	const { videoId } = useParams<any>();
	const { video, status } = useSelector((state: any) => state.video);
	const { videoSubcategories } = useSelector(
		(state: any) => state.videoSubcategories
	);

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (videoId) {
			dispatchHook(fetchVideo(+videoId));
		}

		dispatchHook(fetchVideoSubcategories());
		return () => {
			dispatchHook(clearVideo());
		};
	}, [dispatchHook, videoId]);

	const onChangeInput = async (
		event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		dispatchHook(
			updateVideo({
				[event.target.id]: event.target.value,
			})
		);
	};

	const onUpdateInfo = (data: { key: string; value: string }) => {
		dispatchHook(
			updateVideo({
				[data.key]: data.value,
			})
		);
	};

	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setLoading(true);

		try {
			if (!videoId) {
				await postVideoAPI(video);
				props.history.push("/video");
				return;
			}

			await putVideoAPI(+videoId, video);
			props.history.push("/video");
		} catch {
			alert("Ocorreu um erro. Tente novamente mais tarde.");
			setLoading(false);
		}
	};

	const page =
		loading || status === "loading" ? (
			<Spinner />
		) : !status ? (
			<VideoPage
				type="new"
				onSubmit={onSubmit}
				onChangeInput={onChangeInput}
				onUpdateInfo={onUpdateInfo}
				video={video}
				videoSubcategories={videoSubcategories}
			/>
		) : status === "success" ? (
			<VideoPage
				type="update"
				onSubmit={onSubmit}
				onChangeInput={onChangeInput}
				onUpdateInfo={onUpdateInfo}
				video={video}
				videoSubcategories={videoSubcategories}
			/>
		) : status === "error" ? (
			<>error</>
		) : (
			<></>
		);

	return page;
};

export default VideoContainer;
