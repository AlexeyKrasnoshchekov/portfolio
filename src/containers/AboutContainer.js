import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Space, Typography, Button, Layout, Col, Row } from "antd";
const { Title, Text, Link } = Typography;
import styles from "../styles/AboutContainer.module.less";

const AboutContainer = () => {
	return (
		<div style={{ height: "100vh" }} id="about" className={styles.about}>
			<Title level={2} className={styles.aboutTitle}>
				I’m a Creative director based on New York, who loves clean,
				simple & unique design. I also enjoy crafting
			</Title>
			<Row>
				<Col span={12}>
					<Space className={styles.left} size="middle">
						<Text>
							Proin laoreet elementum ligula, ac tincidunt lorem
							accumsan nec. Fusce eget urna ante. Donec massa
							velit, varius a accumsan ac, tempor iaculis massa.
							Sed placerat justo sed libero varius vulputate. Ut a
							mi tempus massa malesuada fermentum.
						</Text>

						<Text>
							Sed eleifend sed nibh nec fringilla. Donec eu cursus
							sem, vitae tristique ante. Cras pretium rutrum
							egestas. Integer ultrices libero sed justo vehicula,
							eget
						</Text>
					</Space>
				</Col>
				<Col span={12} className={styles.right}>
					<Player
						autoplay
						loop
						src="https://assets1.lottiefiles.com/packages/lf20_jtbfg2nb.json"
						style={{ height: "20rem", width: "20rem" }}
					></Player>
				</Col>
			</Row>
		</div>
	);
};

export default AboutContainer;
