import axios from "axios";
import * as link_api from "./constant";

const getListTask = () => {
	return axios.get(link_api.get_list_task);
};

/**
 * data: name task & user id
 * @param {*} data
 * @returns
 */
const addTask = (data) => {
	return axios.post(link_api.get_list_task, data);
};

/**
 *
 * @param {*} id
 * @returns
 */
const deleteTask = (id) => {
	return axios.delete(link_api.delete_task.replace(":id", id));
};

/**
 *
 * @param {*} id
 * @param {*} data : name of task
 * @returns
 */
const updateTask = (id, data) => {
	return axios.patch(link_api.update_task.replace(":id", id), data);
};

export const TaskService = {
	getListTask,
	addTask,
	deleteTask,
	updateTask,
};
