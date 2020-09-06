import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { updatePost, fetchPost, clearPost } from "../../../store/post/actions";
import { fetchAuthors } from "../../../store/authors/actions";
import { postPostAPI, putPostAPI } from "../../../api/api";

import PostPage from "../../../pages/post-page/PostPage";
import { RouterProps, useParams } from "react-router";
import Spinner from "../../../components/spinner/Spinner";

const PostContainer = (props: RouterProps) => {
	const dispatchHook = useDispatch();

	const { postId } = useParams();
	const { post, status } = useSelector((state: any) => state.post);
	const { authors } = useSelector((state: any) => state.authors);

	const [loading, setLoading] = useState(false);

	useEffect(() => {
		dispatchHook(fetchAuthors());
		if (postId) {
			dispatchHook(fetchPost(postId));
		}

		return () => {
			dispatchHook(clearPost());
		};
	}, [dispatchHook, postId]);

	const onChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files ? event.target.files[0] : null;

		if (!file) {
			return;
		}

		dispatchHook(
			updatePost({
				[event.target.id]: file,
			})
		);
	};

	const onChangeInput = (
		event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		dispatchHook(
			updatePost({
				[event.target.id]: event.target.value,
			})
		);
	};

	const onChangeTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
		dispatchHook(
			updatePost({
				[event.target.id]: event.target.value,
			})
		);
	};

	const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setLoading(true);

		try {
			if (!postId) {
				await postPostAPI(post);
				props.history.push("/post");
				return;
			}

			await putPostAPI(postId, post);
			props.history.push("/post");
		} catch {
			alert("Ocorreu um erro. Tente novamente mais tarde.");
			setLoading(false);
		}
	};

	const page =
		loading || status === "loading" ? (
			<Spinner />
		) : !status ? (
			<PostPage
				type={"new"}
				onSubmit={onSubmit}
				onChangeImage={onChangeImage}
				onChangeInput={onChangeInput}
				onChangeTextArea={onChangeTextArea}
				post={post}
				authors={authors}
			/>
		) : status === "success" ? (
			<PostPage
				type="update"
				onSubmit={onSubmit}
				onChangeImage={onChangeImage}
				onChangeInput={onChangeInput}
				onChangeTextArea={onChangeTextArea}
				post={post}
				authors={authors}
			/>
		) : status === "error" ? (
			<>error</>
		) : (
			<></>
		);

	return page;
};

export default PostContainer;
