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
						(item) => item.id !== action.payload
					),
				],
			};
		}
		case types.UPDATE_TASK: {
			const index = state.listTask.findIndex(
				(item) => item.id === action.payload.id
			);
			return {
				...state,
				listTask:
					index !== -1
						? [
								...state.listTask.slice(0, index),
								action.payload,
								...state.listTask.slice(index + 1),
						  ]
						: [...state.listTask],
			};
		}

		default:
			return state;
	}
};

export default reducer;
