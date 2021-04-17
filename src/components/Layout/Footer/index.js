/* --------------------------------------------------------
 * Author Trần Đức Tiến
 * Email tientran0019@gmail.com
 * Phone 0972970075
 *
 * Created: 2020-03-01 17:08:34
 *------------------------------------------------------- */

import React from "react";
// import PropTypes from 'prop-types';

import Image from "next/image";

import classes from "./style.less";

const Footer = (props) => {
	// const { } = props;

	return (
		<footer className={classes.footerWrapper}>
			<div className={classes.footer}>
				<strong>Thu Kara</strong>
				<span> 2020 © All Rights Reserved.</span>
			</div>
		</footer>
	);
};

Footer.propTypes = {
	// classes: PropTypes.object.isRequired,
};

Footer.defaultProps = {
	// classes: {},
};

export default Footer;
