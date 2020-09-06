import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import VideoSubcategoryPage from "../../../pages/video-subcategory-page/VideoSubcategoryPage";
import {
	postVideoSubcategoryAPI,
	putVideoSubcategoryAPI,
} from "../../../api/api";
import {
	updateVideoSubcategory,
	fetchVideoSubcategory,
	clearVideoSubcategory,
} from "../../../store/videoSubcategory/actions";
import { fetchVideoCategories } from "../../../store/videoCategories/actions";
import { RouterProps, useParams } from "react-router";
import Spinner from "../../../components/spinner/Spinner";

const VideoSubcategoryContainer = (props: RouterProps) => {
	const dispatchHook = useDispatch();

	const { videoSubcategoryId } = useParams();
	const { videoSubcategory, status } = useSelector(
		(state: any) => state.videoSubcategory
	);
	const { videoCategories } = useSelector(
		(state: any) => state.videoCategories
	);

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (videoSubcategoryId) {
			dispatchHook(fetchVideoSubcategory(videoSubcategoryId));
		}

		dispatchHook(fetchVideoCategories());
		return () => {
			dispatchHook(clearVideoSubcategory());
		};
	}, [dispatchHook, videoSubcategoryId]);

	const onChangeInput = (
		event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		dispatchHook(
			updateVideoSubcategory({
				[event.target.id]: event.target.value,
			})
		);
	};

	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setLoading(true);

		try {
			if (!videoSubcategoryId) {
				await postVideoSubcategoryAPI(videoSubcategory);
				props.history.push("/subcategoria-video");
				return;
			}

			await putVideoSubcategoryAPI(videoSubcategoryId, videoSubcategory);
			props.history.push("/subcategoria-video");
		} catch {
			alert("Ocorreu um erro. Tente novamente mais tarde.");
			setLoading(false);
		}
	};

	const page =
		loading || status === "loading" ? (
			<Spinner />
		) : !status ? (
			<VideoSubcategoryPage
				type="new"
				onSubmit={onSubmit}
				onChangeInput={onChangeInput}
				videoSubcategory={videoSubcategory}
				videoCategories={videoCategories}
			/>
		) : status === "success" ? (
			<VideoSubcategoryPage
				type="update"
				onSubmit={onSubmit}
				onChangeInput={onChangeInput}
				videoSubcategory={videoSubcategory}
				videoCategories={videoCategories}
			/>
		) : status === "error" ? (
			<>error</>
		) : (
			<></>
		);

	return page;
};

export default VideoSubcategoryContainer;
