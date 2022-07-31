import React, { Component } from "react";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import { Drawer, Button, Layout, Col, Row } from "antd";
const { Header, Content, Footer } = Layout;
import { MenuOutlined } from "@ant-design/icons";
// import '../styles/Navbar.module.scss';
import styles from "../styles/Navbar.module.scss";

import {
	BrowserView,
	MobileView,
	isBrowser,
	isMobile,
} from "react-device-detect";
import { Link } from "react-scroll";

const Navbar = () => {
	//   showDrawer = () => {
	//     this.setState({
	//       visible: true,
	//     });
	//   };
	//   onClose = () => {
	//     this.setState({
	//       visible: false,
	//     });
	//   };
	return (
		// <Header
		//   style={{

		//     backgroundColor: 'red',
		//     justifyContent: 'space-between',
		//   }}
		// >
		<Row
			style={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				width: "100%",
			}}
			className={[styles.bgTransparent, styles.navbar]}
		>
			<Col
				span={4}
				style={{
					width: "100%",
					display: "flex",
					backgroundColor: "inherit",
					justifyContent: "center",
					// outline: "2px solid blue",
				}}
			>
				<Link to={"header"} spy={true} smooth={true} duration={500}>
					Alex
				</Link>
			</Col>
			<Col span={16}>
				<nav>
					<LeftMenu />
					{/* <div className="rightMenu"><RightMenu /></div> */}
					{isMobile && (
						<Button
							icon={<MenuOutlined />}
							type="primary"
							onClick={this.showDrawer}
						></Button>
					)}
					{isMobile && (
						<Drawer
							title="Basic Drawer"
							placement="right"
							closable={true}
							onClose={this.onClose}
							visible={this.state.visible}
						>
							<LeftMenu />
							{/* <RightMenu /> */}
						</Drawer>
					)}
				</nav>
			</Col>
			<Col
				span={4}
				style={{
					width: "100%",
					display: "flex",
					justifyContent: "center",
					// outline: "2px solid blue",
				}}
			>
				<Button type="primary">Написать</Button>
			</Col>
		</Row>
		// </Header>
	);
};
export default Navbar;
