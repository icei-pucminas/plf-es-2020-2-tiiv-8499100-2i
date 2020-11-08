import React from "react";
import { useHistory } from "react-router";
import Card from "../../card/Card";

import * as classes from "../../card/Card.module.css";

type PropsType = {
	name: string;
	views: string;
	id: number;
};

const VideoViewsCard = (props: PropsType) => {
	const history = useHistory();

	return (
		<Card
			padding={20}
			onClick={() =>
				history.push(`/estatisticas-especificas/video/${props.id}`)
			}
		>
			<div className={classes["card-title"]}>{props.name}</div>
		</Card>
	);
};

export default VideoViewsCard;
