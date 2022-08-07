import React, { useContext } from "react";
import { Typography, Button, Layout, Col, Row } from "antd";
const { Title, Text } = Typography;
const { Header } = Layout;
import { Link } from "react-scroll";

import styles from "../styles/HeaderContainer.module.scss";
import btnStyles from "../styles/Button.module.less";
import Typewriter from "typewriter-effect";
import myImg from "../assets/my_img.webp";
import { context } from "src/utils/context";

const HeaderContainer = () => {
	const { windowDimention } = useContext(context);

	return (
		<Header
			// style={{ height: "100vh", paddingTop: "calc(1rem + 50px)" }}
			className={styles.header}
			id="header"
		>
			<Row className={styles.headerRow}>
				<Col
					lg={{ span: 12 }}
					md={{ span: 12 }}
					sm={{ span: 24 }}
					xs={{ span: 24 }}
					className={styles.left}
				>
					{windowDimention.winWidth < 768 && (
						<img className={styles.image} src={myImg.src} />
					)}

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
				{windowDimention.winWidth > 768 && (
					<Col span={12} className={styles.right}>
						<img
							className={styles.image}
							// height={"100%"}
							src={myImg.src}
						/>
					</Col>
				)}
			</Row>
		</Header>
	);
};

export default HeaderContainer;
