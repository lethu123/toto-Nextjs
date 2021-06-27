/* --------------------------------------------------------
 * Author Trần Đức Tiến
 * Email tientran0019@gmail.com
 * Phone 0972970075
 *
 * Created: 2021-03-22 15:50:20
 *------------------------------------------------------- */

import { notification } from "antd";
import { userLogin } from '../../services/auth';
import { SINGLE_API /* , REQUEST_ERROR */ } from "./types";

export const actionLogin = (payload, router) => async (dispatch) => {
	try {
		const res = await userLogin(payload.username, payload.password);
		if (res) {
			if (typeof window !== "undefined") {
				window.localStorage.setItem("user", JSON.stringify(res.data.result.user));
			}
			dispatch({
				type: SINGLE_API,
				payload: res.data.result.user,
			});
			notification.success({
				message: "Success!",
				description: "Login success fully",
			});
			router.push("/");
		}
	} catch (error) { 
		notification.error({
			message: "Fail!",
			description: "Login fail, try again!",
		});
	}
};
