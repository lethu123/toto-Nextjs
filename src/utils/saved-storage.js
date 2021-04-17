const getListTaskFromStorage = () => {
	let listTask = [];
	if (typeof window !== "undefined") {
		if (window.localStorage.getItem("tasks")) {
			listTask = JSON.parse(window.localStorage.getItem("tasks"));
		} else {
			window.localStorage.setItem("tasks", JSON.stringify([]));
		}
	}
	return listTask;
};

const addTaskToStorage = (task) => {
	let result = null;
	if (typeof window !== "undefined") {
		const listTask = JSON.parse(window.localStorage.getItem("tasks"));

		const item = listTask.find((e) => e === task);
		if (item) {
			result = {
				statusCode: 400,
				message: "Task already exist!",
			};
		} else {
			window.localStorage.setItem(
				"tasks",
				JSON.stringify([task, ...listTask])
			);
			result = {
				statusCode: 200,
				message: "Add task successfully!",
			};
		}
	}
	return result;
};

const deleteTask = (index) => {
	let result = null;
	if (typeof window !== "undefined") {
		const listTask = JSON.parse(window.localStorage.getItem("tasks"));
		const item = listTask.find((e, i) => i === index);
		if (item) {
			const newTasks = listTask.filter((e, i) => i !== index);
			window.localStorage.setItem("tasks", JSON.stringify(newTasks));
			result = {
				statusCode: 200,
				message: "Delete task successfully!",
			};
		} else {
			result = {
				statusCode: 404,
				message: "Task is not exist!",
			};
		}
	}
	return result;
};

const updateTask = (item, index) => {
	let result = null;
	if (typeof window !== "undefined") {
		const listTask = JSON.parse(window.localStorage.getItem("tasks"));

		const _index = listTask.findIndex((e) => e === item);
		if (_index !== -1) {
			const _item = listTask
				.filter((e, i) => i !== index)
				.find((e) => e === item);
			if (_item) {
				result = {
					statusCode: 400,
					message: "Task already exist!",
				};
			} else {
				const newTasks = [
					...listTask.slice(0, index),
					item,
					...listTask.slice(index + 1),
				];
				window.localStorage.setItem("tasks", JSON.stringify(newTasks));
				result = {
					statusCode: 200,
					message: "Update task successfully!",
				};
			}
		} else {
			result = {
				statusCode: 404,
				message: "Task is not exist!",
			};
		}
	}
	return result;
};

export const TaskStorage = {
	getListTaskFromStorage,
	addTaskToStorage,
	deleteTask,
	updateTask,
};
