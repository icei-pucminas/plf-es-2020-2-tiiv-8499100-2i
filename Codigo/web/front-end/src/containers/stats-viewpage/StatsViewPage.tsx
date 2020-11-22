import React, { ChangeEvent, useEffect, useState } from "react";
import Title from "../../components/title/Title";
import Grid from "../../layout/grid/Grid";
import Row from "../../layout/row/Row";
import { baseURL } from "../../api/api";
import InfoViewsCard from "../../components/cards-views/info-views-card/InfoViewsCard";
import Spacer from "../../layout/spacer/Spacer";
import TextField from "../../components/text-field/TextField";
import Button from "../../components/button/Button";
import { Line } from "react-chartjs-2";
import { useParams } from "react-router";

const generateIdLabel = (stat: string) => {
	switch (stat) {
		case "post":
			return "postId";
		case "simbolo":
			return "symbolId";
		case "video":
			return "videoId";
		case "forum":
			return "forumId";
		case "calculadora":
			return "calculator";
		default:
			return "";
	}
};

const generateViewURL = ({
	stat,
	startDate,
	endDate,
}: {
	stat: string;
	startDate: string;
	endDate: string;
}) => {
	switch (stat) {
		case "post":
			return `${baseURL}/post_view/filter?start_date=${startDate}&end_date=${endDate}`;
		case "simbolo":
			return `${baseURL}/symbol_view/filter?start_date=${startDate}&end_date=${endDate}`;
		case "video":
			return `${baseURL}/video_view/filter?start_date=${startDate}&end_date=${endDate}`;
		case "forum":
			return `${baseURL}/forum_view/filter?start_date=${startDate}&end_date=${endDate}`;
		case "calculadora":
			return `${baseURL}/calculator_view/filter?start_date=${startDate}&end_date=${endDate}`;
		default:
			return "";
	}
};

const countViews = (views: any[], idLabel: string, id: number) => {
	let count = 0;

	views.forEach((view) => {
		if (idLabel !== "calculator" && view[idLabel] === id) {
			count++;
		}
	});
	return count;
};

const countViewsByCalculatorType = (views: any[], type: string) => {
	let count = 0;

	views.forEach((v) => {
		if (v.calculatorType === type) {
			count++;
		}
	});

	return count;
};

const generateChartLabels = function (startDate: string, endDate: string) {
	const arr: Date[] = [];
	const start = new Date(startDate);
	const end = new Date(endDate);

	for (let dt = new Date(start); dt <= end; dt.setDate(dt.getDate() + 1)) {
		arr.push(new Date(dt));
	}

	const strArr = arr.map((d) => d.toISOString().split("T")[0]);

	return strArr;
};

const generateChartValues = (
	views: any[],
	startDate: string,
	endDate: string,
	idLabel: string,
	id: number
) => {
	const labels = generateChartLabels(startDate, endDate);
	const values = new Array(labels.length).fill(0);

	views.forEach((view) => {
		const labelIndex = labels.findIndex(
			(value) => value === view.date.split("T")[0]
		);

		if (idLabel === "calculator") {
			values[labelIndex]++;
			return;
		}

		if (labelIndex && view[idLabel] === id) {
			values[labelIndex]++;
		}
	});

	return values;
};

const StatsViewPage = () => {
	const stat = window.location.pathname.split("/")[2];
	const idLabel = generateIdLabel(stat);
	const currentDate = new Date().toISOString().split("T")[0];
	const date30DaysAgo = new Date(new Date().setDate(new Date().getDate() - 30))
		.toISOString()
		.split("T")[0];

	const { id } = useParams<any>();

	const [startDate, setStartDate] = useState(date30DaysAgo);
	const [endDate, setEndDate] = useState(currentDate);
	const [views, setViews] = useState<any>([]);

	const onChangeStartDate = (event: ChangeEvent<HTMLInputElement>) => {
		setStartDate(event.target.value);
	};

	const onChangeEndDate = (event: ChangeEvent<HTMLInputElement>) => {
		setEndDate(event.target.value);
	};

	const fetchViews = () => {
		fetch(generateViewURL({ stat, startDate, endDate }))
			.then((v) => v.json())
			.then((v) => {
				setViews(v);
			});
	};

	const clearDates = () => {
		setStartDate(date30DaysAgo);
		setEndDate(currentDate);
	};

	useEffect(() => {
		if (startDate) fetchViews();
	}, [startDate, endDate, stat]);

	const cards =
		stat === "post"
			? [
					<InfoViewsCard
						key="1"
						title="Visualizações"
						value={countViews(views, idLabel, +id)}
					/>,
			  ]
			: stat === "simbolo"
			? [
					<InfoViewsCard
						key="1"
						title="Visualizações"
						value={countViews(views, idLabel, +id)}
					/>,
			  ]
			: stat === "video"
			? [
					<InfoViewsCard
						key="1"
						title="Visualizações"
						value={countViews(views, idLabel, +id)}
					/>,
			  ]
			: stat === "forum"
			? [
					<InfoViewsCard
						key="1"
						title="Visualizações"
						value={countViews(views, idLabel, +id)}
					/>,
			  ]
			: stat === "calculadora"
			? [
					<InfoViewsCard
						key="1"
						title="ASME"
						value={countViewsByCalculatorType(views, "ASME")}
					/>,
					<InfoViewsCard
						key="2"
						title="ISO"
						value={countViewsByCalculatorType(views, "ISO")}
					/>,
			  ]
			: null;

	const chartData = {
		labels: generateChartLabels(startDate, endDate),
		datasets: [
			{
				label: "Visualizações",
				data: generateChartValues(views, startDate, endDate, idLabel, +id),
				fill: false,
				backgroundColor: "#0962ea",
				borderColor: "rgba(9, 98, 234, 0.2)",
			},
		],
	};

	return (
		<div>
			<Title>Estatísticas Específicas</Title>
			<Spacer vertical={30} />
			<Row>
				<TextField
					label="Data Inicial"
					inputAttrs={{
						type: "date",
						value: startDate,
						onChange: onChangeStartDate,
					}}
				/>
				<Spacer horizontal={50} />
				<TextField
					label="Data Final"
					inputAttrs={{
						type: "date",
						value: endDate,
						onChange: onChangeEndDate,
					}}
				/>
			</Row>
			<Spacer vertical={20} />
			<Row justify="flex-end">
				<Button
					label="Limpar Data"
					buttonAttrs={{ onClick: clearDates }}
					size="small"
				/>
			</Row>
			<Spacer vertical={30} />
			<Grid>{cards}</Grid>
			<Spacer vertical={50} />
			<Title>Linha do tempo</Title>
			<Line data={chartData} />
		</div>
	);
};

export default StatsViewPage;
