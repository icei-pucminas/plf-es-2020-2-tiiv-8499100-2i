import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	updateAuthor,
	fetchAuthor,
	clearAuthor,
} from "../../../store/author/actions";
import { useParams, RouterProps } from "react-router";
import Spinner from "../../../components/spinner/Spinner";
import AuthorPage from "../../../pages/author-page/AuthorPage";
import { postAuthorAPI, putAuthorAPI } from "../../../api/author";

const AuthorContainer = (props: RouterProps) => {
	const dispatchHook = useDispatch();

	const { authorId } = useParams<any>();
	const { author, status } = useSelector((state: any) => state.author);

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (authorId) {
			dispatchHook(fetchAuthor(+authorId));
		}

		return () => {
			dispatchHook(clearAuthor());
		};
	}, [dispatchHook, authorId]);

	const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
		dispatchHook(
			updateAuthor({
				[event.target.id]: event.target.value,
			})
		);
	};

	const onChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
		dispatchHook(
			updateAuthor({
				[event.target.id]: event.target.value,
			})
		);
	};

	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setLoading(true);

		try {
			if (!authorId) {
				await postAuthorAPI(author);
				props.history.push("/autor");
				return;
			}

			await putAuthorAPI(+authorId, author);
			props.history.push("/autor");
		} catch {
			alert("Ocorreu um erro. Tente novamente mais tarde.");
			setLoading(false);
		}
	};

	const page =
		loading || status === "loading" ? (
			<Spinner />
		) : !status ? (
			<AuthorPage
				type="new"
				onSubmit={onSubmit}
				onChangeInput={onChangeInput}
				onChangeTextArea={onChangeTextArea}
				author={author}
			/>
		) : status === "success" ? (
			<AuthorPage
				type="update"
				onSubmit={onSubmit}
				onChangeInput={onChangeInput}
				onChangeTextArea={onChangeTextArea}
				author={author}
			/>
		) : status === "error" ? (
			<>error</>
		) : (
			<></>
		);

	return page;
};

export default AuthorContainer;
