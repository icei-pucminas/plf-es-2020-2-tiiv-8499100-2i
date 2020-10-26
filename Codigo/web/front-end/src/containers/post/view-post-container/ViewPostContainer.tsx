import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps } from "react-router";

import { PostType } from "../../../types/post";
import { fetchPosts } from "../../../store/posts/actions";

import PostCard from "../../../components/cards/post-card/PostCard";
import Title from "../../../components/title/Title";
import Spacer from "../../../layout/spacer/Spacer";
import Spinner from "../../../components/spinner/Spinner";

import * as classes from "./ViewPostContainer.module.css";
import NewButton from "../../../components/new-button/NewButton";
import { deletePostAPI } from "../../../api/post";

const ViewPostContainer = (props: RouteComponentProps) => {
	const dispatchHook = useDispatch();
	const { posts, status } = useSelector((state: any) => state.posts);

	const getPostsHandler = () => {
		dispatchHook(fetchPosts());
	};

	const editPostHandler = (postId: number) => {
		props.history.push("/post/editar/" + postId);
	};

	const deletePostHandler = async (postId: number) => {
		await deletePostAPI(postId);
		getPostsHandler();
	};

	const redirectToNew = () => {
		props.history.push("/post/novo");
	};

	const postsEls = posts?.map((post: PostType) => (
		<div key={post.id}>
			<PostCard
				post={post}
				editPost={editPostHandler}
				deletePost={deletePostHandler}
			/>
		</div>
	));

	useEffect(() => {
		dispatchHook(fetchPosts());
	}, [dispatchHook]);

	return (
		<>
			<Title accessories={[<NewButton onClick={redirectToNew} />]}>
				Posts Cadastrados
			</Title>
			<Spacer vertical={40} />
			{status === "loading" ? (
				<Spinner />
			) : status === "success" ? (
				<div className={classes["postCardsContainer"]}>{postsEls}</div>
			) : status === "error" ? (
				"error"
			) : null}
		</>
	);
};

export default ViewPostContainer;
