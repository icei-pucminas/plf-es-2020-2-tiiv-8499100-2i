import React, { FormEvent, ChangeEvent } from "react";

import { AuthorType } from "../../types/author";

import Column from "../../layout/column/Column";
import ImageField from "../../components/image-field/ImageField";
import Spacer from "../../layout/spacer/Spacer";
import Row from "../../layout/row/Row";
import TextField from "../../components/text-field/TextField";
import Toggle from "../../components/toggle/Toggle";
import Button from "../../components/button/Button";
import Dropdown from "../../components/dropdown/Dropdown";
import TextArea from "../../components/text-area/TextArea";

type PropsType = {
	onSubmit: (event: FormEvent<HTMLFormElement>) => void;
	onChangeImage: (event: ChangeEvent<HTMLInputElement>) => void;
	onChangeInput: (
		event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => void;
	onChangeTextArea: (event: ChangeEvent<HTMLTextAreaElement>) => void;
	type: "new" | "update";
	post: any;
	authors: AuthorType[];
};

const PostPage = (props: PropsType) => (
	<form onSubmit={props.onSubmit}>
		<Column align="center">
			<ImageField
				label="Selecione uma imagem de destaque"
				imagePreview={props.post.img}
				width={400}
				height={225}
				inputAttrs={{
					id: "img",
					onChange: props.onChangeImage,
				}}
			/>
			<Spacer vertical={40} />
			<Row>
				<TextField
					label="Título do post"
					inputAttrs={{
						id: "title",
						placeholder: "Exemplo: Os 10 maiores benefícios da GD&T",
						onChange: props.onChangeInput,
						value: props.post.title,
					}}
				/>
			</Row>
			<Spacer vertical={40} />
			<Row>
				<TextArea
					label="Conteúdo do post"
					inputAttrs={{
						id: "body",
						placeholder: "Exemplo: Os 10 maiores benefícios do GD&T são...",
						onChange: props.onChangeTextArea,
						value: props.post.body,
					}}
				/>
			</Row>
			<Spacer vertical={40} />
			<Row>
				<Dropdown
					label="Selecione um autor..."
					options={props.authors?.map((author) => ({
						label: author.name,
						value: author.id,
					}))}
					inputAttrs={{
						id: "author_id",
						onChange: props.onChangeInput,
						defaultValue: props.post.authorId ?? "",
					}}
				/>
			</Row>
			<Spacer vertical={20} />
			<Row>
				<TextField
					label="Data de publicação"
					inputAttrs={{
						id: "publish_date",
						type: "date",
						onChange: props.onChangeInput,
						value: props.post.publish_date,
					}}
				/>
			</Row>
			<Spacer vertical={20} />
			<Row>
				<Toggle
					label="Requer usuário cadastrado?"
					value={props.post.requires_login}
					onChange={props.onChangeInput}
					inputAttrs={{
						id: "requires_login",
					}}
				/>
			</Row>
			<Spacer vertical={40} />
			<Button
				label={
					props.type === "new"
						? "Publicar Post"
						: props.type === "update"
						? "Atualizar Post"
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

export default PostPage;
