import React, { ChangeEvent, FormEvent, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	updateVideoCategory,
	fetchVideoCategory,
	clearVideoCategory,
} from "../../../store/videoCategory/actions";
import VideoCategoryPage from "../../../pages/video-category-page/VideoCategoryPage";
import { postVideoCategoryAPI, putVideoCategoryAPI } from "../../../api/api";
import { RouterProps, useParams } from "react-router";
import Spinner from "../../../components/spinner/Spinner";

const VideoCategoryContainer = (props: RouterProps) => {
	const dispatchHook = useDispatch();

	const { videoCategoryId } = useParams();
	const { videoCategory, status } = useSelector(
		(state: any) => state.videoCategory
	);

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (videoCategoryId) {
			dispatchHook(fetchVideoCategory(videoCategoryId));
		}

		return () => {
			dispatchHook(clearVideoCategory());
		};
	}, [dispatchHook, videoCategoryId]);

	const onChangeInput = (
		event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		dispatchHook(
			updateVideoCategory({
				[event.target.id]: event.target.value,
			})
		);
	};

	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setLoading(true);

		try {
			if (!videoCategoryId) {
				await postVideoCategoryAPI(videoCategory);
				props.history.push("/categoria-video");
				return;
			}

			await putVideoCategoryAPI(videoCategoryId, videoCategory);
			props.history.push("/categoria-video");
		} catch {
			alert("Ocorreu um erro. Tente novamente mais tarde.");
			setLoading(false);
		}
	};

	const page =
		loading || status === "loading" ? (
			<Spinner />
		) : !status ? (
			<VideoCategoryPage
				type={"new"}
				onSubmit={onSubmit}
				onChangeInput={onChangeInput}
				videoCategory={videoCategory}
			/>
		) : status === "success" ? (
			<VideoCategoryPage
				type={"update"}
				onSubmit={onSubmit}
				onChangeInput={onChangeInput}
				videoCategory={videoCategory}
			/>
		) : status === "error" ? (
			<>error</>
		) : (
			<></>
		);

	return page;
};

export default VideoCategoryContainer;
