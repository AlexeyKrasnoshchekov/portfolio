import React from "react";
import State from "../utils/context";
import "../styles/globals.scss";

require("src/styles/index.less");

const MyApp = ({ Component, pageProps }) => {
	return (
		<State>
			<Component {...pageProps} />
		</State>
	);
};

export default MyApp;
