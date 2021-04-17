/* --------------------------------------------------------
 * Author Trần Đức Tiến
 * Email tientran0019@gmail.com
 * Phone 0972970075
 *
 * Created: 2021-03-22 15:50:20
 *------------------------------------------------------- */

import { notification } from "antd";

import { SINGLE_API /* , REQUEST_ERROR */ } from "./types";
import { authLogin } from "../../utils/login-storage";

export const actionLogin = (payload, router) => (dispatch) => {
	const res = authLogin(payload);
	if (res.statusCode === 200) {
		dispatch({
			type: SINGLE_API,
			payload,
		});

		notification.success({
			message: "Success!",
			description: "Login success fully",
		});
		router.push("/");
	} else {
		notification.error({
			message: "Fail!",
			description: "Login fail, try again!",
		});
	}
};
