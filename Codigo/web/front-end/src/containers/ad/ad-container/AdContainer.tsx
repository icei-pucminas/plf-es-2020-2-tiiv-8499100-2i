import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAd, fetchAd, clearAd } from "../../../store/ad/actions";
import { postAdAPI, putAdAPI } from "../../../api/api";
import AdPage from "../../../pages/ad-page/AdPage";
import { useParams, RouterProps } from "react-router";
import Spinner from "../../../components/spinner/Spinner";

const AdContainer = (props: RouterProps) => {
	const dispatchHook = useDispatch();

	const { adId } = useParams();
	const { ad, status } = useSelector((state: any) => state.ad);

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (adId) {
			dispatchHook(fetchAd(adId));
		}

		return () => {
			dispatchHook(clearAd());
		};
	}, [dispatchHook, adId]);

	const onChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files ? event.target.files[0] : null;

		if (!file) {
			return;
		}

		dispatchHook(
			updateAd({
				[event.target.id]: file,
			})
		);
	};

	const onChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
		dispatchHook(
			updateAd({
				[event.target.id]: event.target.value,
			})
		);
	};

	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setLoading(true);

		try {
			if (!adId) {
				await postAdAPI(ad);
				props.history.push("/anuncio");
				return;
			}

			await putAdAPI(adId, ad);
			props.history.push("/anuncio");
		} catch {
			alert("Ocorreu um erro. Tente novamente mais tarde.");
			setLoading(false);
		}
	};

	const page =
		loading || status === "loading" ? (
			<Spinner />
		) : !status ? (
			<AdPage
				type={"new"}
				onSubmit={onSubmit}
				onChangeImage={onChangeImage}
				onChangeTextArea={onChangeTextArea}
				ad={ad}
			/>
		) : status === "success" ? (
			<AdPage
				type="update"
				onSubmit={onSubmit}
				onChangeImage={onChangeImage}
				onChangeTextArea={onChangeTextArea}
				ad={ad}
			/>
		) : status === "error" ? (
			<>error</>
		) : (
			<></>
		);

	return page;
};

export default AdContainer;
