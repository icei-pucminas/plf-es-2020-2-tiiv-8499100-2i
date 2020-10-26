import { YoutubeDataAPI } from "youtube-v3-api";
import { composeFormData } from "../utils/utils";

const authKey =
	"Basic TmpkamNqWTBhSEpqTjJnNE1tNWtNak5xYTNNME4yTjFhMjpwbVpYSnVOM2RvTkdOeU5ETjRaV3QzYm1Ob2NtVnk=";

const devEnv = window.location.hostname === "localhost";

const baseURL = devEnv ? "http://localhost:5000" : window.location.origin;

export const getReq = async (endpoint: string) => {
	try {
		const data = await fetch(`${baseURL}/${endpoint}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Basic " + authKey,
			},
		});
		const json = await data.json();

		return json;
	} catch (error) {
		throw error;
	}
};

export const postReq = async (endpoint: string, data: object) => {
	try {
		return fetch(`${baseURL}/${endpoint}`, {
			method: "POST",
			headers: {
				Authorization: "Basic " + authKey,
			},
			body: composeFormData(data),
		});
	} catch (error) {
		throw error;
	}
};

export const putReq = async (endpoint: string, data: object) => {
	try {
		return fetch(`${baseURL}/${endpoint}`, {
			method: "PUT",
			headers: {
				Authorization: "Basic " + authKey,
			},
			body: composeFormData(data),
		});
	} catch (error) {
		throw error;
	}
};

export const deleteReq = async (endpoint: string) => {
	try {
		return fetch(`${baseURL}/${endpoint}`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				Authorization: "Basic " + authKey,
			},
		});
	} catch (error) {
		throw error;
	}
};

// Youtube
export const youtubeAPI = new YoutubeDataAPI(
	"AIzaSyBev1DxljYdmWFYaYcudcEzlSxaSi0wdd4"
);
