import React, { FormEvent, ChangeEvent } from "react";

import Column from "../../layout/column/Column";
import ImageField from "../../components/image-field/ImageField";
import Spacer from "../../layout/spacer/Spacer";
import Row from "../../layout/row/Row";
import TextArea from "../../components/text-area/TextArea";
import Button from "../../components/button/Button";
import { AdType } from "../../types/ad";

type PropsType = {
	onSubmit: (event: FormEvent<HTMLFormElement>) => void;
	onChangeImage: (event: ChangeEvent<HTMLInputElement>) => void;
	onChangeTextArea: (event: ChangeEvent<HTMLTextAreaElement>) => void;
	type: "new" | "update";
	ad: AdType;
};

const AdPage = (props: PropsType) => (
	<form onSubmit={props.onSubmit}>
		<Column align="center">
			<ImageField
				label="Selecione uma imagem de destaque"
				imagePreview={props.ad.img}
				width={225}
				height={225}
				inputAttrs={{
					id: "img",
					onChange: props.onChangeImage,
				}}
			/>
			<Spacer vertical={40} />
			<Row>
				<TextArea
					label="Texto do anúncio"
					inputAttrs={{
						id: "text",
						placeholder: "Exemplo: Venha conhecer o novo curso...",
						onChange: props.onChangeTextArea,
						value: props.ad.text,
					}}
				/>
			</Row>
			<Spacer vertical={40} />
			<Row>
				<TextArea
					label="URL do anúncio"
					inputAttrs={{
						id: "url",
						placeholder: "Exemplo: https://www.google.com/",
						onChange: props.onChangeTextArea,
						value: props.ad.url,
					}}
				/>
			</Row>
			<Spacer vertical={40} />
			<Button
				label={
					props.type === "new"
						? "Cadastrar Anúncio"
						: props.type === "update"
						? "Atualizar Anúncio"
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

export default AdPage;
