import React, { useEffect } from "react";
import Title from "../../components/title/Title";
import Spacer from "../../layout/spacer/Spacer";
import Spinner from "../../components/spinner/Spinner";
import ForumPostCard from "../../components/cards/forum-post-card/ForumPostCard";
import { useDispatch, useSelector } from "react-redux";
import { RouterProps, useParams } from "react-router";
import { fetchForum } from "../../store/forum/actions";
import DeleteButton from "../../components/delete-button/DeleteButton";
import { deleteForumAPI, deleteForumPostAPI } from "../../api/forum";

const ViewForumPostsContainer = (props: RouterProps) => {
	const dispatchHook = useDispatch();
	const { forumId } = useParams<any>();
	const { forum, status } = useSelector((state: any) => state.forum);

	useEffect(() => {
		if (typeof forumId === "string") {
			getForum();
		}
	}, [dispatchHook, forumId]);

	const getForum = () => {
		dispatchHook(fetchForum(+forumId));
	};

	const deleteForum = async () => {
		try {
			await deleteForumAPI(+forumId);
			alert("Fórum deletado com sucesso");
			props.history.push("/forum");
		} catch (error) {
			alert("Ocorreu um erro ao deletar o fórum. Tente novamente mais tarde.");
		}
	};

	const deleteForumPost = async (forumPostId: number) => {
		try {
			await deleteForumPostAPI(forumPostId);
			alert("Post deletado com sucesso");
			getForum();
		} catch (error) {
			alert("Ocorreu um erro ao deletar o fórum. Tente novamente mais tarde.");
		}
	};

	const firstEl = forum ? (
		<>
			<ForumPostCard
				forumPost={forum.originalPost}
				forum={forum}
				deleteCallback={deleteForumPost}
			/>
			<Spacer vertical={30} />
		</>
	) : null;

	const forumEls = forum?.forumPosts.map((fp) => (
		<React.Fragment key={fp.id}>
			<ForumPostCard forumPost={fp} deleteCallback={deleteForumPost} />
			<Spacer vertical={30} />
		</React.Fragment>
	));

	return (
		<div>
			<Title accessories={[<DeleteButton onClick={deleteForum} />]}>
				{forum?.title ?? "Carregando..."}
			</Title>
			<Spacer vertical={40} />
			{status === "loading" ? (
				<Spinner />
			) : status === "success" ? (
				[firstEl, forumEls]
			) : status === "error" ? (
				"error"
			) : null}
		</div>
	);
};

export default ViewForumPostsContainer;
