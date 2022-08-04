import React, { useContext } from "react";
import MyMenu from "./Menu";
import { Drawer, Button, Col, Row } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import styles from "../styles/Navbar.module.scss";
import btnStyles from "../styles/Button.module.less";
import logo from "../assets/logo.png";

import {
	BrowserView,
	MobileView,
	isBrowser,
	isMobile,
} from "react-device-detect";
import { Link } from "react-scroll";
import { context } from "src/utils/context";

const Navbar = () => {
	const { toggleModal } = useContext(context);
	const showModal = () => {
		toggleModal(true);
	};

	return (
		<Row className={[styles.bgTransparent, styles.navbar]}>
			<Col span={4}>
				<Link to={"header"} spy={true} smooth={true} duration={500}>
					<img
						width={50}
						height={50}
						src={logo.src}
						alt="логотип сайта"
					/>
				</Link>
			</Col>
			<Col span={16}>
				<nav>
					<MyMenu />
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
							<MyMenu />
						</Drawer>
					)}
				</nav>
			</Col>
			<Col span={4}>
				<Button
					type="primary"
					size="large"
					className={btnStyles.btnNavbar}
					onClick={showModal}
				>
					Написать
				</Button>
			</Col>
		</Row>
		// </Header>
	);
};
export default Navbar;
