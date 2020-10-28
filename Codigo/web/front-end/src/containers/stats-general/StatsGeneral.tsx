import React, { ChangeEvent, useState } from "react";
import { Redirect } from "react-router";
import Dropdown from "../../components/dropdown/Dropdown";
import Title from "../../components/title/Title";
import Row from "../../layout/row/Row";
import Spacer from "../../layout/spacer/Spacer";
import ForumStatsPage from "../stats-pages/forum/ForumStatsPage";
import PostStatsPage from "../stats-pages/post/PostStatsPage";
import SymbolStatsPage from "../stats-pages/symbol/SymbolStatsPage";
import VideosStatsPage from "../stats-pages/video/VideoStatsPage";

const statistics = [
	{
		label: "Posts",
		value: "posts",
	},
	{
		label: "Símbolos",
		value: "simbolos",
	},
	{
		label: "Vídeos",
		value: "videos",
	},
	{
		label: "Fóruns",
		value: "foruns",
	},
	{
		label: "Calculadoras",
		value: "calculadoras",
	},
];

const SpecificStats = () => {
	const [page, setPage] = useState("");

	const statisticOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
		setPage(event.target.value);
	};

	const pageComponent =
		page === "posts" ? (
			<PostStatsPage />
		) : page === "simbolos" ? (
			<SymbolStatsPage />
		) : page === "videos" ? (
			<VideosStatsPage />
		) : page === "foruns" ? (
			<ForumStatsPage />
		) : page === "calculadoras" ? (
			<Redirect to="/estatisticas-especificas/calculadora" />
		) : null;

	return (
		<div>
			<Title>Estatísticas de uso</Title>
			<Spacer vertical={20} />
			<Row>
				<Dropdown
					label="Selecione uma métrica..."
					options={statistics}
					inputAttrs={{
						onChange: statisticOnChange,
					}}
				/>
			</Row>
			<Spacer vertical={40} />
			{pageComponent}
		</div>
	);
};

export default SpecificStats;
