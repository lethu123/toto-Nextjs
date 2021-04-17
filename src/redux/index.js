/* --------------------------------------------------------
 * Author Trần Đức Tiến
 * Email tientran0019@gmail.com
 * Phone 0972970075
 *
 * Created: 2020-05-12 22:08:41
 *------------------------------------------------------- */
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { createWrapper } from "next-redux-wrapper";
// import createDebounce from "redux-debounced";

import appReducer, { initialState } from "src/redux/reducers";

// ** Dev Tools
const composeEnhancers =
	typeof window !== "undefined"
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
		: compose;
const middleware = [thunk];

const makeStore = () => {
	const store = createStore(
		appReducer,
		initialState,
		composeEnhancers(applyMiddleware(...middleware))
	);
	return store;
};

export default createWrapper(makeStore, {
	debug: process.env.NODE_ENV === "development",
});
