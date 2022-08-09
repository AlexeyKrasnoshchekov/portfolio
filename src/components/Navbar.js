import React, { useContext } from "react";
import MyMenu from "./Menu";
import { Drawer, Button, Col, Row } from "antd";
import { CloseSquareOutlined, MenuOutlined } from "@ant-design/icons";
import styles from "../styles/Navbar.module.less";
import btnStyles from "../styles/Button.module.less";
import logo from "../assets/logo.png";

import { Link } from "react-scroll";
import { context } from "src/utils/context";
import Image from "next/image";

const Navbar = () => {
	const { toggleModal, toggleDrawer, isDrawerVisible, windowDimention } =
		useContext(context);

	const showModal = () => {
		toggleModal(true);
	};
	const showDrawer = () => {
		toggleDrawer(true);
	};
	const onClose = () => {
		toggleDrawer(false);
	};

	return (
		<Row className={[styles.bgTransparent, styles.navbar]}>
			<Col span={4}>
				<Link to={"header"} spy={true} smooth={true} duration={500}>
					<Image
						width={50}
						height={50}
						src={logo.src}
						alt="логотип сайта"
					/>
				</Link>
			</Col>
			<Col span={16} className={styles.center}>
				<nav>
					{windowDimention.winWidth > 576 && <MyMenu />}

					{windowDimention.winWidth < 576 && (
						<Button
							type="primary"
							size="large"
							className={btnStyles.btnNavbar}
							onClick={showModal}
						>
							Написать
						</Button>
					)}
				</nav>
			</Col>
			<Col span={4}>
				{windowDimention.winWidth > 576 && (
					<Button
						type="primary"
						size="large"
						className={btnStyles.btnNavbar}
						onClick={showModal}
					>
						Написать
					</Button>
				)}

				{windowDimention.winWidth < 576 && (
					<Button
						icon={<MenuOutlined />}
						type="primary"
						onClick={showDrawer}
					>
						Menu
					</Button>
				)}
			</Col>
			{windowDimention.winWidth < 576 && (
				<Drawer
					placement="right"
					closable={true}
					onClose={onClose}
					visible={isDrawerVisible}
					className={styles.drawer}
					width="50%"
					bodyStyle={{
						backgroundColor: "#b5f5ec",
					}}
					headerStyle={{ backgroundColor: "#b5f5ec" }}
					closeIcon={
						<CloseSquareOutlined style={{ fontSize: "2.5rem" }} />
					}
				>
					{windowDimention.winWidth < 576 && <MyMenu />}
				</Drawer>
			)}
		</Row>
	);
};
export default Navbar;
