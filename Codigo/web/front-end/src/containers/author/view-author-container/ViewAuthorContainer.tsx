import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RouteComponentProps } from "react-router";

import { AuthorType } from "../../../types/author";
import { fetchAuthors } from "../../../store/authors/actions";

import Spacer from "../../../layout/spacer/Spacer";
import Title from "../../../components/title/Title";
import Spinner from "../../../components/spinner/Spinner";
import AuthorCard from "../../../components/cards/author-card/AuthorCard";
import NewButton from "../../../components/new-button/NewButton";
import { deleteAuthorAPI } from "../../../api/author";

const ViewAuthorContainer = (props: RouteComponentProps) => {
	const dispatchHook = useDispatch();
	const { authors, status } = useSelector((state: any) => state.authors);

	const getAuthorsHandler = () => {
		dispatchHook(fetchAuthors());
	};

	const editAuthorHandler = (authorId: number) => {
		props.history.push("/autor/editar/" + authorId);
	};

	const deleteAuthorHandler = async (authorId: number) => {
		await deleteAuthorAPI(authorId);
		getAuthorsHandler();
	};

	const redirectToNew = () => {
		props.history.push("/autor/novo");
	};

	const authorsEls = authors?.map((author: AuthorType) => (
		<div key={author.id}>
			<AuthorCard
				author={author}
				editAuthor={editAuthorHandler}
				deleteAuthor={deleteAuthorHandler}
			/>
			<Spacer vertical={40} />
		</div>
	));

	useEffect(() => {
		dispatchHook(fetchAuthors());
	}, [dispatchHook]);

	return (
		<div>
			<Title accessories={[<NewButton onClick={redirectToNew} />]}>
				Autores Cadastrados
			</Title>
			<Spacer vertical={40} />
			{status === "loading" ? (
				<Spinner />
			) : status === "success" ? (
				authorsEls
			) : status === "error" ? (
				"error"
			) : null}
		</div>
	);
};

export default ViewAuthorContainer;
