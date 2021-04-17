/* --------------------------------------------------------
 * Author Trần Đức Tiến
 * Email tientran0019@gmail.com
 * Phone 0972970075
 *
 * Created: 2020-03-01 17:51:30
 *------------------------------------------------------- */

import { Card, Col, Input, Row, Alert } from "antd";
import React, { useEffect, useState } from "react";
//import PropTypes from "prop-types";
import { EditOutlined } from "@ant-design/icons";

import tets from "../../containers/Index/style.less";
import { useDispatch, useSelector } from "react-redux";
import {
	addTaskAction,
	getTaskAction,
	updateTaskAction,
} from "../../redux/actions/taskAction";
import TaskItem from "../../components/TaskItem/TaskItem";

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const Index = (props) => {
	const [task, setTask] = useState("");
	const [indexUpdate, setIndexUpdate] = useState(null);
	const dispatch = useDispatch();
	const listTask = useSelector((state) => state.task.listTask);

	useEffect(() => {
		dispatch(getTaskAction());
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (indexUpdate) {
			dispatch(updateTaskAction(task, indexUpdate - 1));
		} else dispatch(addTaskAction(task));
		setIndexUpdate(null);
		setTask("");
	};

	return (
		<div className={tets.main_todo}>
			<div
				className="container pb-5 h-100"
				style={{ overflowY: "scroll" }}
			>
				<Row>
					<Col className="m-auto" span="12">
						<Card bordered={false}>
							<form onSubmit={handleSubmit}>
								<Input
									className="w-100"
									size="large"
									placeholder="Your task"
									prefix={<EditOutlined />}
									value={task}
									onChange={(e) => setTask(e.target.value)}
									required
								/>
							</form>
						</Card>
					</Col>
				</Row>
				<Row className="mt-5">
					<Col className="m-auto" span="12">
						<Row>
							{listTask && listTask.length > 0 ? (
								<>
									{listTask.map((item, index) => (
										<Col
											span="24"
											className="mb-2"
											key={index}
										>
											<TaskItem
												item={item}
												index={index}
												setIndexUpdate={setIndexUpdate}
												setTask={setTask}
											/>
										</Col>
									))}
								</>
							) : (
								<>
									<Col span="24">
										<Alert
											message="Not Yet Task!"
											type="warning"
											showIcon
										/>
									</Col>
								</>
							)}
						</Row>
					</Col>
				</Row>
			</div>
		</div>
	);
};

Index.propTypes = propTypes;

Index.defaultProps = defaultProps;

export default Index;
