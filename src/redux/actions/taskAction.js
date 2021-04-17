import { notification } from "antd";

import * as types from "./types";
import { TaskStorage } from "../../utils/saved-storage";

export const getTaskAction = () => (dispatch) => {
	const tasks = TaskStorage.getListTaskFromStorage();
	dispatch({
		type: types.LIST_TASK,
		payload: tasks,
	});
};

export const addTaskAction = (task) => (dispatch) => {
	const result = TaskStorage.addTaskToStorage(task);
	if (result.statusCode === 200) {
		dispatch({
			type: types.ADD_TASK,
			payload: task,
		});

		notification.success({
			message: "Success!",
			description: "Add task successfully",
		});
	} else {
		notification.error({
			message: "Error!",
			description: result.message,
		});
	}
};
export const deleteTaskAction = (index) => (dispatch) => {
	const result = TaskStorage.deleteTask(index);
	if (result.statusCode === 200) {
		dispatch({
			type: types.DELETE_TASK,
			payload: index,
		});
		notification.success({
			message: "Success!",
			description: "Delete task successfully",
		});
	} else {
		notification.error({
			message: "Error!",
			description: result.message,
		});
	}
};
export const updateTaskAction = (item, index) => (dispatch) => {
	const result = TaskStorage.updateTask(item, index);
	if (result.statusCode === 200) {
		dispatch({
			type: types.UPDATE_TASK,
			payload: { item, index },
		});
		notification.success({
			message: "Success!",
			description: "Update task successfully",
		});
	} else {
		notification.error({
			message: "Error!",
			description: result.message,
		});
	}
};
