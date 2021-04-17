import * as types from "../actions/types";

export const initialState = { listTask: [] };

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.LIST_TASK: {
			return { ...state, listTask: action.payload };
		}
		case types.ADD_TASK: {
			return { ...state, listTask: [action.payload, ...state.listTask] };
		}
		case types.DELETE_TASK: {
			return {
				...state,
				listTask: [
					...state.listTask.filter(
						(item, index) => index !== action.payload
					),
				],
			};
		}
		case types.UPDATE_TASK: {
			return {
				...state,
				listTask: [
					...state.listTask.slice(0, action.payload.index),
					action.payload.item,
					...state.listTask.slice(action.payload.index + 1),
				],
			};
		}

		default:
			return state;
	}
};

export default reducer;
