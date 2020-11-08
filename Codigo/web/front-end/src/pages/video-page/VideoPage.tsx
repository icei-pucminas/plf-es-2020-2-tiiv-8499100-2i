import React, { ChangeEvent, useState, useEffect } from "react";
import { FormEvent } from "react";
import { Link } from "react-router-dom";

import { VideoType } from "../../types/video";
import Column from "../../layout/column/Column";
import Row from "../../layout/row/Row";
import TextField from "../../components/text-field/TextField";
import Spacer from "../../layout/spacer/Spacer";
import Button from "../../components/button/Button";
import { VideoSubcategoryType } from "../../types/category";
import Dropdown from "../../components/dropdown/Dropdown";
import Video from "../../components/video/Video";
import { youtubeAPI } from "../../api/api";

type PropsType = {
	onSubmit: (event: FormEvent<HTMLFormElement>) => void;
	onChangeInput: (
		event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => void;
	onUpdateInfo: (data: { key: string; value: string }) => void;
	type: "new" | "update";
	video: VideoType;
	videoSubcategories: VideoSubcategoryType[];
};

const VideoPage = (props: PropsType) => {
	const [title, setTitle] = useState("");
	const [date, setDate] = useState("");
	const [ytId, setYtId] = useState("");

	useEffect(() => {
		if (props.video.youtubeUrl) {
			fetchYoutubeInfo(props.video.youtubeUrl);

			return;
		}
	}, [props.video]);

	const fetchYoutubeInfo = async (urlString: string) => {
		try {
			const url = new URL(urlString);

			const ytId = url.searchParams.get("v")!;
			const ytSearch = (await youtubeAPI.searchVideo(ytId)) as any;

			const title = ytSearch.items[0].snippet.title ?? "";
			const date = ytSearch.items[0].snippet.publishedAt.split("T")[0] ?? "";

			props.onUpdateInfo({ key: "title", value: title });
			props.onUpdateInfo({ key: "date", value: date });
			setYtId(ytId);
		} catch {
			setTitle("");
			setDate("");
			setYtId("");
		}
	};

	const onChangeInputHandler = (
		event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		props.onChangeInput(event);
		fetchYoutubeInfo(event.target.value);
	};

	return (
		<form onSubmit={props.onSubmit}>
			<Column align="center">
				<Row>
					<Video videoID={ytId} />
				</Row>
				<Row>
					<TextField
						label="URL do vídeo"
						inputAttrs={{
							id: "youtube_url",
							placeholder:
								"Exemplo: https://www.youtube.com/watch?v=dQw4w9WgXcQ",
							onChange: onChangeInputHandler,
							value: props.video.youtubeUrl,
						}}
					/>
				</Row>
				<Spacer vertical={40} />
				<Row>
					<TextField
						label="Título do vídeo"
						inputAttrs={{
							id: "title",
							placeholder: "Exemplo: Dicas sobre GD&T",
							onChange: onChangeInputHandler,
							value: props.video.title,
						}}
					/>
				</Row>
				<Spacer vertical={40} />
				<Row>
					<TextField
						label="URL do vídeo"
						inputAttrs={{
							id: "date",
							type: "date",
							placeholder: "Exemplo: 22/03/2013",
							onChange: onChangeInputHandler,
							value: props.video.date,
						}}
					/>
				</Row>
				<Spacer vertical={40} />
				<Row>
					<Dropdown
						label="Selecione uma subcategoria..."
						options={props.videoSubcategories?.map((c) => ({
							label: c.name,
							value: c.id,
						}))}
						inputAttrs={{
							id: "subcategory_id",
							onChange: props.onChangeInput,
							defaultValue: props.video.categoryId ?? "",
						}}
					/>
				</Row>
				<Spacer vertical={40} />
				<Link to="/subcategoria-video">Gerenciar subcategorias de vídeos</Link>
				<Spacer vertical={40} />
				<Button
					label={
						props.type === "new"
							? "Cadastrar Vídeo"
							: props.type === "update"
							? "Atualizar Vídeo"
							: ""
					}
					size="big"
					buttonAttrs={{
						type: "submit",
					}}
				/>
			</Column>
		</form>
	);
};

export default VideoPage;
