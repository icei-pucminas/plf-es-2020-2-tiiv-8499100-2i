import React from "react";
import { useHistory } from "react-router";
import Spacer from "../../../layout/spacer/Spacer";
import Card from "../../card/Card";

import * as classes from "../../card/Card.module.css";

type PropsType = {
	name: string;
	views: string;
	viewability: string;
	id: number;
};

const PostViewsCard = (props: PropsType) => {
	const history = useHistory();

	return (
		<Card
			padding={20}
			onClick={() => history.push(`/estatisticas-especificas/post/${props.id}`)}
		>
			<div className={classes["card-title"]}>{props.name}</div>
			<Spacer vertical={10} />
			<div className={classes["card-subtitle"]}>
				Visualizações: {props.views}
			</div>
			<Spacer vertical={10} />
			<div className={classes["card-subtitle"]}>
				Viewability média: {props.viewability}
			</div>
		</Card>
	);
};

export default PostViewsCard;
