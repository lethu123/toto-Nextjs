/* --------------------------------------------------------
 * Author Trần Đức Tiến
 * Email tientran0019@gmail.com
 * Phone 0972970075
 *
 * Created: 2021-01-13 22:57:59
 *------------------------------------------------------- */

import React from "react";
// import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";

import Image from "next/image";

import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import { actionLogin } from "src/redux/actions/auth";
import { useRouter } from "next/router";

import classes from "./style.less";

const propTypes = {
	// classes: PropTypes.object.isRequired,
};

const defaultProps = {
	// classes: {},
};

const Login = () => {
	const dispatch = useDispatch();
	const router = useRouter();
	const onFinish = (values) => {
		dispatch(actionLogin({ ...values }, router));
	};

	return (
		<div className={classes.wrapper}>
			<div className={classes.left}>
				<div className={classes.leftOverlay} />
				<div className={classes.leftContent}>
					<div className="container">
						<Image
							src="/assets/images/brand/logo.png"
							alt="Logo"
							width={64}
							height={64}
						/>
						<div className="mt-4">
							<h1 className="pt-0 text-white">
								Boilerplate nextjs antd less
							</h1>
							<p>
								A boilerplate for Reactjs app using nextjs,
								redux, antd, less.
							</p>
							<p>Author: Thu Kara (lethu210398@gmail.com)</p>
							<p className="text-danger">
								Email: admin@gmail.com
							</p>
							<p className="text-danger">Password: admin</p>
						</div>
					</div>
				</div>
			</div>
			<div className={classes.right}>
				<div className="d-flex justify-content-center align-content-center flex-1 flex-column">
					<Form
						name="normal_login"
						className="login-form"
						initialValues={{
							remember: true,
						}}
						onFinish={onFinish}
						style={{
							width: 350,
							padding: 20,
							margin: "0 auto 40px",
							borderRadius: 4,
							background: "#fff",
						}}
						size="large"
					>
						<div className="text-center mb-5">
							<Image
								src="/assets/images/brand/logo.png"
								alt="Logo"
								width={64}
								height={64}
							/>
							<h1 className="text-primary">Todo Task</h1>
						</div>
						<Form.Item
							name="email"
							rules={[
								{
									type: "email",
									message: "The input is not valid E-mail!",
								},
								{
									required: true,
									message: "Please input your E-mail!",
								},
							]}
						>
							<Input
								prefix={
									<UserOutlined className="site-form-item-icon" />
								}
								placeholder="Email"
							/>
						</Form.Item>
						<Form.Item
							name="password"
							rules={[
								{
									required: true,
									message: "Please input your Password!",
								},
							]}
						>
							<Input
								prefix={
									<LockOutlined className="site-form-item-icon" />
								}
								type="password"
								placeholder="Password"
							/>
						</Form.Item>
						<Form.Item
							name="username"
							rules={[
								{
									required: true,
									message: "Please input your Username!",
								},
							]}
						>
							<Input
								prefix={
									<UserOutlined className="site-form-item-icon" />
								}
								type="text"
								placeholder="Username"
							/>
						</Form.Item>
						<Form.Item>
							<div className="text-center">
								<a className="login-form-forgot" href="#none">
									Forgot password
								</a>
							</div>
						</Form.Item>

						<Button
							type="primary"
							block
							htmlType="submit"
							className="login-form-button"
						>
							Login
						</Button>
					</Form>
				</div>
				<div className="py-2">
					<strong className="text-primary">Boilerplate</strong>
					<span> 2020 © All Rights Reserved.</span>
				</div>
			</div>
		</div>
	);
};

Login.propTypes = propTypes;

Login.defaultProps = defaultProps;

export default Login;
