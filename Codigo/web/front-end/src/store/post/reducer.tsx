import { PostActionsEnum } from "./actions";

type StateType = {
	post: any;
};

const currentDate = new Date().toISOString().split("T")[0];

const initialState: StateType = {
	post: {
		title: "",
		body: "",
		img: "",
		author_id: "",
		requires_login: false,
		publish_date: currentDate,
	},
};

export const post = (state = initialState, action: any) => {
	switch (action.type) {
		case PostActionsEnum.FETCH_POST_BEGIN:
			return {
				status: "loading",
			};
		case PostActionsEnum.FETCH_POST_SUCCESS:
			return {
				status: "success",
				post: action.post,
			};
		case PostActionsEnum.FETCH_POST_FAIL:
			return {
				status: "error",
			};
		case PostActionsEnum.UPDATE_POST:
			return {
				...state,
				post: {
					...state.post,
					...action.post,
				},
			};
		case PostActionsEnum.CLEAR_POST: {
			return initialState;
		}
		default:
			return state;
	}
};
