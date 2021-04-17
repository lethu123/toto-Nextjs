export const authLogin = (data) => {
	let result = null;
	if (data.email === "admin@gmail.com" && data.password === "admin") {
		if (typeof window !== "undefined") {
			window.localStorage.setItem("user", JSON.stringify(data));
			result = {
				statusCode: 200,
				message: "Login successfully",
			};
		}
	} else {
		result = {
			statusCode: 404,
			message: "Login fail, try again!",
		};
	}
	return result;
};
