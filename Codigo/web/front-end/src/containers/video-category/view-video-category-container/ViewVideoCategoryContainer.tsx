import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RouteComponentProps } from "react-router";

import Spacer from "../../../layout/spacer/Spacer";
import Title from "../../../components/title/Title";
import Spinner from "../../../components/spinner/Spinner";
import NewButton from "../../../components/new-button/NewButton";
import { fetchVideoCategories } from "../../../store/videoCategories/actions";
import { VideoCategoryType } from "../../../types/category";
import CategoryCard from "../../../components/cards/category-card/CategoryCard";
import { deleteVideoCategoryAPI } from "../../../api/video_category";

const ViewVideoCategoryContainer = (props: RouteComponentProps) => {
	const dispatchHook = useDispatch();
	const { videoCategories, status } = useSelector(
		(state: any) => state.videoCategories
	);

	const getVideoCategoriesHandler = () => {
		dispatchHook(fetchVideoCategories());
	};

	const editVideoCategoriesHandler = (videoCategoryId: number) => {
		props.history.push("/categoria-video/editar/" + videoCategoryId);
	};

	const deleteVideoCategoriesHandler = async (videoCategoryId: number) => {
		await deleteVideoCategoryAPI(videoCategoryId);
		getVideoCategoriesHandler();
	};

	const redirectToNew = () => {
		props.history.push("/categoria-video/novo");
	};

	const videoCategoriesEls = videoCategories?.map(
		(videoCategory: VideoCategoryType) => (
			<div key={videoCategory.id}>
				<CategoryCard
					idSelector="id"
					category={videoCategory}
					editCategory={editVideoCategoriesHandler}
					deleteCategory={deleteVideoCategoriesHandler}
				/>
				<Spacer vertical={40} />
			</div>
		)
	);

	useEffect(() => {
		dispatchHook(fetchVideoCategories());
	}, [dispatchHook]);

	return (
		<div>
			<Title accessories={[<NewButton onClick={redirectToNew} />]}>
				Categorias de Vídeos Cadastrados
			</Title>
			<Spacer vertical={40} />
			{status === "loading" ? (
				<Spinner />
			) : status === "success" ? (
				videoCategoriesEls
			) : status === "error" ? (
				"error"
			) : null}
		</div>
	);
};

export default ViewVideoCategoryContainer;
