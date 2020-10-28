import React from "react";
import { useHistory } from "react-router";
import Card from "../../card/Card";

import * as classes from "../../card/Card.module.css";

type PropsType = {
	name: string;
	views: string;
	responses: string;
	id: number;
};

const ForumViewsCard = (props: PropsType) => {
	const history = useHistory();

	return (
		<Card
			padding={20}
			onClick={() =>
				history.push(`/estatisticas-especificas/forum/${props.id}`)
			}
		>
			<div className={classes["card-title"]}>{props.name}</div>
			<div className={classes["card-subtitle"]}>
				Visualizações: {props.views}
			</div>
			<div className={classes["card-subtitle"]}>
				Respostas: {props.responses}
			</div>
		</Card>
	);
};

export default ForumViewsCard;
