export const composeFormData = (obj: object) => {
	const formData = new FormData();
	const keys = Object.keys(obj);
	const values = Object.values(obj);

	keys.forEach((key, index) => {
		const value = values[index];

		formData.append(key, value);
	});

	return formData;
};

export const objectToArray = (obj: object) => {
	const keys = Object.keys(obj);
	const array: Array<any> = [];

	keys.forEach((key) => {
		array.push({
			...obj[key],
			key,
		});
	});

	return array;
};

export const getFlattenedKeyMap = (array: any[], key: string) => {
	const keyMap = {};

	array.forEach((item) => {
		const objKey = item[key];
		keyMap[objKey] = true;
	});

	return Object.keys(keyMap);
};

export const flattenByKey = (array: any[], key: string) => {
	const keyMap = {};

	const flattenedArray = array.filter((item) => {
		const objKey = item[key];
		const comp = keyMap[objKey] === undefined;
		keyMap[objKey] = true;

		return comp;
	});

	return flattenedArray;
};

export const countByKey = (array: any[], key: string, value: string) => {
	const filtered = array.filter((item) => {
		const objKey = item[key];
		return objKey === value;
	});

	return filtered.length;
};
