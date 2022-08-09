import React, { useContext } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Space, Typography, Col, Row } from "antd";
const { Title } = Typography;
import styles from "../styles/AboutContainer.module.less";
import { context } from "src/utils/context";

const AboutContainer = () => {
	const { windowDimention } = useContext(context);

	return (
		<div id="about" className={styles.about}>
			<Title level={2} className={styles.aboutTitle}>
				Немного о себе
			</Title>
			{windowDimention.winWidth < 768 && (
				<Player
					autoplay
					loop
					src="https://assets1.lottiefiles.com/packages/lf20_jtbfg2nb.json"
					className={styles.lottie}
				></Player>
			)}
			<Row className={styles.row}>
				<Col
					span={12}
					xs={{ span: 24 }}
					lg={{ span: 12 }}
					md={{ span: 12 }}
				>
					<Space className={styles.left} size="middle">
						<p className={styles.text}>
							Создаю сайты и веб-приложения. Считаю это своим
							призванием, поэтому постоянно изучаю и применяю
							новые технологии разработки. Стремлюсь создавать
							продукт отвечающий высоким стандартам качества и
							способный восхитить конечного пользователя.
						</p>
					</Space>
				</Col>
				{windowDimention.winWidth > 768 && (
					<Col
						span={12}
						lg={{ span: 12 }}
						md={{ span: 12 }}
						className={styles.right}
					>
						<Player
							autoplay
							loop
							src="https://assets1.lottiefiles.com/packages/lf20_jtbfg2nb.json"
							className={styles.lottie}
						></Player>
					</Col>
				)}
			</Row>
		</div>
	);
};

export default AboutContainer;
