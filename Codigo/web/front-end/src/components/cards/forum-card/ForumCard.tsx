import React from "react";
import Card from "../../card/Card";
import Row from "../../../layout/row/Row";
import Spacer from "../../../layout/spacer/Spacer";

import * as classes from "./ForumCard.module.css";

type PropsType = {
	onClick: () => void;
	forum: any;
};

const ForumCard = (props: PropsType) => {
	const originalPostDate = new Date(props.forum.originalPost.date);
	const lastUpdateString =
		props.forum.forumPosts[props.forum.forumPosts.length - 1]?.date;
	const lastUpdateDate = lastUpdateString
		? new Date(lastUpdateString)
		: originalPostDate;

	return (
		<Card padding={15} onClick={props.onClick}>
			<Row>
				<strong className={classes["forumCard-title"]}>
					{props.forum.title}
				</strong>
			</Row>
			<Spacer vertical={5} />
			<Row>
				<span className={classes["forumCard-info"]}>
					Criado por {props.forum.originalPost.user} ·
					{" " + originalPostDate.toLocaleDateString("pt-br")}
				</span>
			</Row>
			<Spacer vertical={5} />
			<Row>
				<span className={classes["forumCard-info"]}>
					Ultima atualização em
					{" " + lastUpdateDate.toLocaleDateString("pt-br")}
				</span>
			</Row>
			<Spacer vertical={5} />
			<Row>
				<span className={classes["forumCard-info"]}>
					{props.forum.forumPosts.length} respostas
				</span>
			</Row>
		</Card>
	);
};

export default ForumCard;
