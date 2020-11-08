import React from "react";

import * as classes from "./Dropdown.module.css";

type OptionType = { label: string; value: string | number };

type PropsType = {
	label: string;
	options?: OptionType[];
	inputAttrs: React.SelectHTMLAttributes<HTMLSelectElement>;
};

const Dropdown = (props: PropsType) => {
	return (
		<div className={classes["dropdown"]}>
			<div className={classes["dropdown-input"]}>
				<select className={classes["dropdown-select"]} {...props.inputAttrs}>
					<option disabled value="">
						{props.label}
					</option>
					{props.options?.map((option) => (
						<option key={option.value} value={option.value}>
							{option.label}
						</option>
					))}
				</select>
			</div>
		</div>
	);
};

export default Dropdown;
