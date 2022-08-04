import React from "react";
import { Typography, Button, Layout, Col, Row } from "antd";
const { Title, Text } = Typography;
const { Header } = Layout;
import { Link } from "react-scroll";

import styles from "../styles/HeaderContainer.module.scss";
import btnStyles from "../styles/Button.module.less";
import Typewriter from "typewriter-effect";
import myImg from "../assets/my_img.webp";

const HeaderContainer = () => {
	return (
		<Header
			style={{ height: "100vh", paddingTop: "calc(1rem + 50px)" }}
			className={styles.header}
			id="header"
		>
			<Row className={styles.headerRow}>
				<Col span={12} className={styles.left}>
					<Title className={styles.headerTitle}>
						<Typewriter
							options={{
								strings: [
									"Создатель сайтов",
									"Web Разработчик",
									"Frontend Developer",
								],
								autoStart: true,
								loop: true,
								pauseFor: 5000,
							}}
						/>
					</Title>

					<Title level={2} className={styles.headerTitle2}>
						Краснощеков Алексей
					</Title>
					<Button
						type="primary"
						size="large"
						className={btnStyles.btnHeader}
					>
						<Link
							activeClass={styles.activeLink}
							to="projects"
							spy={true}
							smooth={true}
							duration={500}
							className={styles.borderNone}
						>
							Мои работы
						</Link>
					</Button>
				</Col>
				<Col span={12} className={styles.right}>
					<img
						className={styles.image}
						// height={"100%"}
						src={myImg.src}
					/>
				</Col>
			</Row>
		</Header>
	);
};

export default HeaderContainer;
