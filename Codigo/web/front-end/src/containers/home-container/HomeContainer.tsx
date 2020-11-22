import React from "react";
import { Parser } from "json2csv";
import { RouteComponentProps } from "react-router";

import Title from "../../components/title/Title";
import Card from "../../components/card/Card";
import Spacer from "../../layout/spacer/Spacer";

import Grid from "../../layout/grid/Grid";
import { getUsersAPI } from "../../api/user";

const download = (filename: string, text: string) => {
	const element = document.createElement("a");
	element.setAttribute(
		"href",
		"data:text/csv;charset=utf-8," + encodeURIComponent(text)
	);
	element.setAttribute("download", filename);

	element.style.display = "none";
	document.body.appendChild(element);

	element.click();

	document.body.removeChild(element);
};

const HomeContainer = (props: RouteComponentProps) => {
	const redirectToGeneralStats = () => {
		props.history.push("/estatisticas-gerais");
	};
	const redirectToSpecificStats = () => {
		props.history.push("/estatisticas-especificas");
	};
	const redirectToUserStats = () => {
		props.history.push("/estatisticas-usuario");
	};
	const redirectToPosts = () => {
		props.history.push("/post");
	};
	const redirectToAuthors = () => {
		props.history.push("/autor");
	};
	const redirectToSymbols = () => {
		props.history.push("/simbolo");
	};
	const redirectToSymbolCategories = () => {
		props.history.push("/categoria-simbolo");
	};
	const redirectToSymbolSubcategories = () => {
		props.history.push("/subcategoria-simbolo");
	};
	const redirectToVideos = () => {
		props.history.push("/video");
	};
	const redirectToVideoCategories = () => {
		props.history.push("/categoria-video");
	};
	const redirectToVideoSubcategories = () => {
		props.history.push("/subcategoria-video");
	};
	const redirectToForums = () => {
		props.history.push("/forum");
	};
	const redirectToAd = () => {
		props.history.push("/anuncio");
	};
	const downloadUserCSV = async () => {
		try {
			const users = await getUsersAPI();
			const fields = ["email", "name", "phone", "business_name"];
			const opts = { fields };

			const parser = new Parser(opts);
			const csv = parser.parse(users);
			download(`usuários-${new Date().toISOString().split("T")[0]}`, csv);
		} catch (error) {
			alert("Ocorreu um erro ao formatar os dados dos usuários");
		}
	};

	return (
		<>
			<Title>Estatísticas de Uso</Title>
			<Spacer vertical={40} />
			<Grid>
				<Card onClick={redirectToGeneralStats}>
					<strong>Gerais</strong>
				</Card>
				<Card onClick={redirectToSpecificStats}>
					<strong>Especificas</strong>
				</Card>
				<Card onClick={redirectToUserStats}>
					<strong>Por Usuário</strong>
				</Card>
				<Card onClick={downloadUserCSV}>
					<strong>Exportar Usuários</strong>
				</Card>
			</Grid>
			<Spacer vertical={40} />
			<Title>Posts</Title>
			<Spacer vertical={40} />
			<Grid>
				<Card onClick={redirectToPosts}>
					<strong>Posts</strong>
				</Card>
				<Card onClick={redirectToAuthors}>
					<strong>Autores</strong>
				</Card>
			</Grid>
			<Spacer vertical={40} />
			<Title>Símbolos</Title>
			<Spacer vertical={40} />
			<Grid>
				<Card onClick={redirectToSymbols}>
					<strong>Símbolos</strong>
				</Card>
				<Card onClick={redirectToSymbolCategories}>
					<strong>Categorias de Símbolos</strong>
				</Card>
				<Card onClick={redirectToSymbolSubcategories}>
					<strong>Subcategorias de Símbolos</strong>
				</Card>
			</Grid>
			<Spacer vertical={40} />
			<Title>Vídeos</Title>
			<Spacer vertical={40} />
			<Grid>
				<Card onClick={redirectToVideos}>
					<strong>Vídeos</strong>
				</Card>
				<Card onClick={redirectToVideoCategories}>
					<strong>Categorias de Vídeos</strong>
				</Card>
				<Card onClick={redirectToVideoSubcategories}>
					<strong>Subcategorias de Vídeos</strong>
				</Card>
			</Grid>
			<Spacer vertical={40} />
			<Title>Fóruns</Title>
			<Spacer vertical={40} />
			<Grid>
				<Card onClick={redirectToForums}>
					<strong>Fóruns</strong>
				</Card>
			</Grid>
			<Spacer vertical={40} />
			<Title>Anúncios</Title>
			<Spacer vertical={40} />
			<Grid>
				<Card onClick={redirectToAd}>
					<strong>Anúncios</strong>
				</Card>
			</Grid>
			<Spacer vertical={40} />
		</>
	);
};

export default HomeContainer;
