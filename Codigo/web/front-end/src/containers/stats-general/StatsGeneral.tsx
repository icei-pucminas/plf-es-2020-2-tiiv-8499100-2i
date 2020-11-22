import React, { ChangeEvent, useEffect, useState } from "react";
import Title from "../../components/title/Title";
import Grid from "../../layout/grid/Grid";
import Row from "../../layout/row/Row";
import { authKey, baseURL } from "../../api/api";
import InfoViewsCard from "../../components/cards-views/info-views-card/InfoViewsCard";
import Spacer from "../../layout/spacer/Spacer";
import TextField from "../../components/text-field/TextField";
import Button from "../../components/button/Button";
import { Line } from "react-chartjs-2";
import Dropdown from "../../components/dropdown/Dropdown";
import Spinner from "../../components/spinner/Spinner";
import { useParams } from "react-router";

const generateViewURL = ({
	stat,
	startDate,
	endDate,
	uid,
}: {
	stat: string;
	startDate: string;
	endDate: string;
	uid?: string;
}) => {
	switch (stat) {
		case "post":
			return `${baseURL}/post_view/filter?start_date=${startDate}&end_date=${endDate}${
				uid ? `&uid=${uid}` : ""
			}`;
		case "simbolo":
			return `${baseURL}/symbol_view/filter?start_date=${startDate}&end_date=${endDate}${
				uid ? `&uid=${uid}` : ""
			}`;
		case "video":
			return `${baseURL}/video_view/filter?start_date=${startDate}&end_date=${endDate}${
				uid ? `&uid=${uid}` : ""
			}`;
		case "forum":
			return `${baseURL}/forum_view/filter?start_date=${startDate}&end_date=${endDate}${
				uid ? `&uid=${uid}` : ""
			}`;
		case "calculadora":
			return `${baseURL}/calculator_view/filter?start_date=${startDate}&end_date=${endDate}${
				uid ? `&uid=${uid}` : ""
			}`;
		default:
			return "";
	}
};

const countViews = (views: any[]) => {
	return views.length;
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
	endDate: string
) => {
	const labels = generateChartLabels(startDate, endDate);
	const values = new Array(labels.length).fill(0);

	views.forEach((view) => {
		const labelIndex = labels.findIndex(
			(value) => value === view.date.split("T")[0]
		);

		values[labelIndex]++;
	});

	return values;
};

const statistics = [
	{
		label: "Posts",
		value: "post",
	},
	{
		label: "Símbolos",
		value: "simbolo",
	},
	{
		label: "Vídeos",
		value: "video",
	},
	{
		label: "Fóruns",
		value: "forum",
	},
	{
		label: "Calculadoras",
		value: "calculadora",
	},
];

const StatsGeneral = () => {
	const [loading, setLoading] = useState(false);
	const [stat, setStat] = useState<string>("post");
	const { uid } = useParams<any>();
	console.log(uid);

	const currentDate = new Date().toISOString().split("T")[0];
	const date30DaysAgo = new Date(new Date().setDate(new Date().getDate() - 30))
		.toISOString()
		.split("T")[0];

	const [startDate, setStartDate] = useState(date30DaysAgo);
	const [endDate, setEndDate] = useState(currentDate);
	const [views, setViews] = useState<any>([]);

	const onChangeStat = (event: ChangeEvent<HTMLSelectElement>) => {
		setStat(event.target.value);
	};

	const onChangeStartDate = (event: ChangeEvent<HTMLInputElement>) => {
		setStartDate(event.target.value);
	};

	const onChangeEndDate = (event: ChangeEvent<HTMLInputElement>) => {
		setEndDate(event.target.value);
	};

	const fetchViews = () => {
		setLoading(true);
		fetch(generateViewURL({ stat, startDate, endDate, uid }), {
			headers: { "Content-Type": "application/json", Authorization: authKey },
		})
			.then((v) => v.json())
			.then((v) => {
				setViews(v);
				setLoading(false);
			})
			.catch(() => {
				alert("Ocorreu um erro ao consultar os dados.");
				setLoading(false);
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
						value={countViews(views)}
					/>,
			  ]
			: stat === "simbolo"
			? [
					<InfoViewsCard
						key="1"
						title="Visualizações"
						value={countViews(views)}
					/>,
			  ]
			: stat === "video"
			? [
					<InfoViewsCard
						key="1"
						title="Visualizações"
						value={countViews(views)}
					/>,
			  ]
			: stat === "forum"
			? [
					<InfoViewsCard
						key="1"
						title="Visualizações"
						value={countViews(views)}
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
				data: generateChartValues(views, startDate, endDate),
				fill: false,
				backgroundColor: "#0962ea",
				borderColor: "rgba(9, 98, 234, 0.2)",
			},
		],
	};

	return (
		<div>
			<Title>{uid ? "Estatísticas do Usuário" : "Estatísticas Gerais"}</Title>
			<Spacer vertical={30} />
			<Row>
				<Dropdown
					label="Selecione uma métrica..."
					options={statistics}
					inputAttrs={{
						onChange: onChangeStat,
						value: stat,
					}}
				/>
			</Row>
			<Spacer vertical={40} />
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
			{loading ? (
				<Spinner />
			) : (
				<>
					<Grid>{cards}</Grid>
					<Spacer vertical={50} />
					<Title>Linha do tempo</Title>
					<Line data={chartData} />
				</>
			)}
		</div>
	);
};

export default StatsGeneral;
