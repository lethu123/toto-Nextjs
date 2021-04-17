/* eslint-disable react/prop-types */
/* --------------------------------------------------------
 * Author Trần Đức Tiến
 * Email tientran0019@gmail.com
 * Phone 0972970075
 *
 * Created: 2020-02-22 17:54:41
 *------------------------------------------------------- */

/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from "react";

import Head from "next/head";

import NProgress from "nprogress";
import Router from "next/router";

import MainLayout from "src/components/Layout/MainLayout";
import Loading from "src/components/Loading";

import wrapperStore from "src/redux";

// uncomment if you don't want use redux
// export default MyApp;

import "src/theme/index.less";
import "src/theme/custom.less";
import "src/theme/styles.less";

// const Noop = ({ children }) => children;

Router.events.on("routeChangeStart", (url) => {
	NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const MyApp = (props) => {
	const { Component, pageProps, router } = props;
	const [awaitLoading, setAwaitLoading] = React.useState(true);

	const Layout = Component.Layout || MainLayout;
	let user = null;
	if (typeof window !== "undefined") {
		user = JSON.parse(window.localStorage.getItem("user"));
	}
	useEffect(() => {
		if (!user) {
			if (router.pathname !== "/login") {
				router.push("/login");
			}
			setAwaitLoading(false);
		} else {
			setAwaitLoading(false);
		}
	}, [user]);

	if (awaitLoading) {
		return (
			<div className="text-center">
				<Loading />
			</div>
		);
	}

	return (
		<Layout>
			<Head>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no, height=device-height, user-scalable=0"
				/>
			</Head>
			<Component {...pageProps} router={router} />
		</Layout>
	);
};

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.

// uncomment if you want to use redux
export default wrapperStore.withRedux(MyApp);
