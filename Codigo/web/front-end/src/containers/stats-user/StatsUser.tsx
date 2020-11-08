import React, { ChangeEvent, useEffect, useState } from "react";
import { RouterProps } from "react-router";
import { getUsersAPI } from "../../api/user";
import Card from "../../components/card/Card";
import Dropdown from "../../components/dropdown/Dropdown";
import Title from "../../components/title/Title";
import Grid from "../../layout/grid/Grid";
import Row from "../../layout/row/Row";
import Spacer from "../../layout/spacer/Spacer";

import { UserType } from "../../types/user";

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

const StatsUser = (props: RouterProps) => {
	const [users, setUsers] = useState<UserType[]>();

	const redirectToPage = (uid: string) => {
		props.history.push(`/estatisticas-usuario/${uid}/`);
	};

	useEffect(() => {
		getUsersAPI().then((data) => {
			setUsers(data);
		});
	});

	const userCards =
		users?.map((user) => {
			return (
				<Card
					key={user.uid}
					padding={20}
					onClick={() => redirectToPage(user.uid)}
				>
					Nome: <strong>{user.name}</strong>
					<br />
					<br />
					Empresa: <strong>{user.businessName}</strong>
				</Card>
			);
		}) || null;

	return (
		<div>
			<Title>Estatísticas por Usuário</Title>
			<Spacer vertical={40} />
			<Grid>{userCards}</Grid>
		</div>
	);
};

export default StatsUser;
