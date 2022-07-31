import React from "react";
import { Drawer, Button, Layout, Col, Row } from "antd";
const { Header, Content, Footer } = Layout;
import styles from "../styles/HeaderContainer.module.scss";

const HeaderContainer = () => {
	return (
		<Header
			style={{ height: "100vh", paddingTop: "50px" }}
			className={styles.header}
			// className="flex flex-col w-full my-6"
			id="header"
		>
			<Row
				style={{
					display: "flex",
					justifyContent: "space-between",
					alignItems: "center",
					width: "100%",
					height: "100%",
					// marginTop: "50px",
					outline: "2px solid red",
				}}
			>
				<Col
					span={12}
					style={{
						outline: "2px solid red",
						height: "100%",
					}}
				></Col>
				<Col span={12}></Col>
			</Row>
		</Header>
	);
};

export default HeaderContainer;
