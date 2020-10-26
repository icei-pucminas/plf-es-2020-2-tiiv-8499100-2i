import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RouteComponentProps } from "react-router";

import Spacer from "../../../layout/spacer/Spacer";
import Title from "../../../components/title/Title";
import Spinner from "../../../components/spinner/Spinner";
import NewButton from "../../../components/new-button/NewButton";
import CategoryCard from "../../../components/cards/category-card/CategoryCard";
import { VideoSubcategoryType } from "../../../types/category";
import { fetchVideoSubcategories } from "../../../store/videoSubcategories/actions";
import { deleteVideoSubcategoryAPI } from "../../../api/video_subcategory";

const ViewVideoSubcategoryContainer = (props: RouteComponentProps) => {
	const dispatchHook = useDispatch();
	const { videoSubcategories, status } = useSelector(
		(state: any) => state.videoSubcategories
	);

	const getVideoSubcategoriesHandler = () => {
		dispatchHook(fetchVideoSubcategories());
	};

	const editVideoSubcategoriesHandler = (videoSubcategoryId: number) => {
		props.history.push("/subcategoria-video/editar/" + videoSubcategoryId);
	};

	const deleteVideoSubcategoriesHandler = async (
		videoSubcategoryId: number
	) => {
		await deleteVideoSubcategoryAPI(videoSubcategoryId);
		getVideoSubcategoriesHandler();
	};

	const redirectToNew = () => {
		props.history.push("/subcategoria-video/novo");
	};

	const videoSubcategoriesEls = videoSubcategories?.map(
		(videoSubcategory: VideoSubcategoryType) => (
			<div key={videoSubcategory.id}>
				<CategoryCard
					idSelector="id"
					category={videoSubcategory}
					editCategory={editVideoSubcategoriesHandler}
					deleteCategory={deleteVideoSubcategoriesHandler}
				/>
				<Spacer vertical={40} />
			</div>
		)
	);

	useEffect(() => {
		dispatchHook(fetchVideoSubcategories());
	}, [dispatchHook]);

	return (
		<div>
			<Title accessories={[<NewButton onClick={redirectToNew} />]}>
				Subcategorias de Vídeos Cadastrados
			</Title>
			<Spacer vertical={40} />
			{status === "loading" ? (
				<Spinner />
			) : status === "success" ? (
				videoSubcategoriesEls
			) : status === "error" ? (
				"error"
			) : null}
		</div>
	);
};

export default ViewVideoSubcategoryContainer;
