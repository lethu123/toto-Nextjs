/* --------------------------------------------------------
 * Author Trần Đức Tiến
 * Email tientran0019@gmail.com
 * Phone 0972970075
 *
 * Created: 2020-04-07 17:40:06
 *------------------------------------------------------- */

export const initialState = { user: null };

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case "LOGIN_SUCCESS":
			return { ...state, user: action.payload };
		default:
			return state;
	}
};

export default reducer;
