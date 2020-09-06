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
	type: "new" | "update";
	video: VideoType;
	videoSubcategories: VideoSubcategoryType[];
};

const VideoPage = (props: PropsType) => {
	const [title, setTitle] = useState("");
	const [date, setDate] = useState("");
	const [ytId, setYtId] = useState("");

	useEffect(() => {
		if (props.video.youtube_url) {
			fetchYoutubeInfo(props.video.youtube_url);

			return;
		}
	}, [props.video]);

	const fetchYoutubeInfo = async (urlString: string) => {
		try {
			const url = new URL(urlString);

			const ytId = url.searchParams.get("v")!;
			const ytSearch = (await youtubeAPI.searchVideo(ytId)) as any;

			const title = ytSearch.items[0].snippet.title ?? "";
			const date = ytSearch.items[0].snippet.publishedAt ?? "";

			setTitle(title);
			setDate(date);
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
			<input
				type="hidden"
				id="title"
				value={title}
				onChange={props.onChangeInput}
			/>
			<input
				type="hidden"
				id="date"
				value={date}
				onChange={props.onChangeInput}
			/>
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
							value: props.video.youtube_url,
						}}
					/>
				</Row>
				<Spacer vertical={40} />
				<Row>
					<Dropdown
						label="Selecione uma subcategoria..."
						options={props.videoSubcategories?.map((c) => ({
							label: c.name,
							value: c.video_sub_category_id,
						}))}
						inputAttrs={{
							id: "category_id",
							onChange: props.onChangeInput,
							defaultValue: props.video.category_id ?? "",
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
