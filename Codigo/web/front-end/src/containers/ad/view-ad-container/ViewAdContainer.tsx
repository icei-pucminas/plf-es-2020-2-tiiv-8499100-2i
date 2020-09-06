import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RouteComponentProps } from "react-router";

import Spacer from "../../../layout/spacer/Spacer";
import Title from "../../../components/title/Title";
import Spinner from "../../../components/spinner/Spinner";
import NewButton from "../../../components/new-button/NewButton";
import { fetchAds } from "../../../store/ads/actions";
import { deleteAdAPI } from "../../../api/api";
import { AdType } from "../../../types/ad";
import AdCard from "../../../components/cards/ad-card/AdCard";

const ViewAdContainer = (props: RouteComponentProps) => {
	const dispatchHook = useDispatch();
	const { ads, status } = useSelector((state: any) => state.ads);

	const getAdsHandler = () => {
		dispatchHook(fetchAds());
	};

	const editAdsHandler = (adId: string) => {
		props.history.push("/anuncio/editar/" + adId);
	};

	const deleteAdHandler = async (adId: string) => {
		await deleteAdAPI(adId);
		getAdsHandler();
	};

	const redirectToNew = () => {
		props.history.push("/anuncio/novo");
	};

	const adsEls = ads?.map((ad: AdType) => (
		<div key={ad.ad_id}>
			<AdCard ad={ad} editAd={editAdsHandler} deleteAd={deleteAdHandler} />
			<Spacer vertical={40} />
		</div>
	));

	useEffect(() => {
		dispatchHook(fetchAds());
	}, [dispatchHook]);

	return (
		<div>
			<Title accessories={[<NewButton onClick={redirectToNew} />]}>
				Anúncios Cadastrados
			</Title>
			<Spacer vertical={40} />
			{status === "loading" ? (
				<Spinner />
			) : status === "success" ? (
				adsEls
			) : status === "error" ? (
				"error"
			) : null}
		</div>
	);
};

export default ViewAdContainer;
