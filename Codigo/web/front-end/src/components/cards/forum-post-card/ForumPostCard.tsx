import React from "react";
import Card from "../../card/Card";
import Row from "../../../layout/row/Row";
import Column from "../../../layout/column/Column";
import Button from "../../button/Button";
import Spacer from "../../../layout/spacer/Spacer";

import * as classes from "./ForumPostCard.module.css";
import { ForumPostType, ForumType } from "../../../types/forum";

type PropsType = {
	forum?: ForumType;
	forumPost: ForumPostType;
	approveForumPost: (forumPostId: number) => void;
	deleteCallback: (forumPostId: number) => void;
};

const ForumPostCard = (props: PropsType) => {
	return (
		<Card padding={15}>
			<Row justify="space-between">
				<Column>
					{props.forum ? (
						<strong className={classes["forumPostCard-title"]}>
							{props.forum.title}
						</strong>
					) : null}
					<Spacer vertical={10} />
					<span className={classes["forumPostCard-author"]}>
						Por: {props.forumPost.user}
					</span>
				</Column>
				<div style={{ display: "flex" }}>
					{props.forumPost.approved ? (
						<Button
							size="small"
							label="Excluir"
							buttonAttrs={{
								onClick: () => props.deleteCallback(props.forumPost.id),
							}}
						/>
					) : (
						<>
							<Button
								size="small"
								label="Aprovar"
								buttonAttrs={{
									onClick: () => props.approveForumPost(props.forumPost.id),
								}}
							/>
							<Spacer horizontal={20} />
						</>
					)}
				</div>
			</Row>
			<Spacer vertical={20} />
			<Row>{props.forumPost.body}</Row>
			<Spacer vertical={20} />
			<Row>
				<span className={classes["forumPostCard-date"]}>
					{/* Postado em {new Date(props.forumPost.date).toLocaleDateString()} */}
				</span>
			</Row>
		</Card>
	);
};

export default ForumPostCard;
