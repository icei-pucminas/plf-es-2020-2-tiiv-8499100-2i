import React from "react";
import Spacer from "../../../layout/spacer/Spacer";
import Card from "../../card/Card";

import * as classes from "../../card/Card.module.css";

type PropsType = {
	title: string;
	value: string | number;
};

const InfoViewsCard = (props: PropsType) => {
	return (
		<Card padding={20}>
			<div className={classes["card-title"]}>{props.title}</div>
			<Spacer vertical={15} />
			<div className={classes["card-info"]}>{props.value}</div>
		</Card>
	);
};

export default InfoViewsCard;
