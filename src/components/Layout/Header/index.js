/* --------------------------------------------------------
 * Author Trần Đức Tiến
 * Email tientran0019@gmail.com
 * Phone 0972970075
 *
 * Created: 2020-03-01 17:15:11
 *------------------------------------------------------- */

import React from "react";
import PropTypes from "prop-types";

import Image from "next/image";

import { Button } from "antd";

import Link from "next/link";

// import AvatarDropDown from 'src/components/Layout/AvatarDropDown';

import classes from "./style.less";
import { useRouter } from "next/router";

const propTypes = {
	style: PropTypes.object,
};

const defaultProps = {
	style: {},
};

const Header = (props) => {
	const { style } = props;
	// const auth = useSelector((state) => state.auth);
	let user = null;
	if (typeof window !== "undefined") {
		user = JSON.parse(window.localStorage.getItem("user"));
	}
	const router = useRouter();

	return (
		<div className={classes.headerWrapper} style={style}>
			<div className={classes.header}>
				<div className="container">
					<div className="row align-items-center">
						<div className="col">
							<Link href="/">
								<a>
									<div className={classes.logo}>
										<Image
											src="/assets/images/brand/logo.png"
											alt="Logo"
											width={30}
											height={30}
										/>
										<h1 className="font-weight-bold">
											TODO APP
										</h1>
									</div>
								</a>
							</Link>
						</div>
						<div className="col col-auto d-flex align-items-center">
							{user && (
								<div className="d-flex align-items-center">
									<h3 className="text-white mr-2 mb-0">
										Xin chào, {user.username}
									</h3>
									<Button
										size="small"
										ghost
										className="px-3"
										onClick={() => {
											if (typeof window !== "undefined") {
												user = window.localStorage.removeItem(
													"user"
												);
												router.push("/login");
											}
										}}
									>
										Logout
									</Button>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
