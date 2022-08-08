import React, { useContext } from "react";
import { Typography, Button, List, Col, Row } from "antd";
const { Title } = Typography;
import styles from "../styles/cta.module.scss";
import btnStyles from "../styles/Button.module.less";
import ctaImage from "../assets/ctaImage.webp";
import { context } from "src/utils/context";
import Image from "next/image";

const ContactContainer = () => {
	const { toggleModal } = useContext(context);

	const showModal = () => {
		toggleModal(true);
	};

	const data = [
		`Обсудим что вам необходимо`,
		"Предложу реализацию вашей идеи",
		"Сделаю все в лучшем виде, как для себя",
	];

	return (
		// <div >
		<Row className={styles.cta}>
			<Col span={12} className={styles.left}>
				<Title className={styles.title} level={3}>
					Вам нужен сайт?
				</Title>
				<p className={styles.text}>Предлагаю услугу по его созданию</p>
				<List
					className={styles.list}
					dataSource={data}
					renderItem={(item) => (
						<li className={styles.listItem}>{item}</li>
					)}
				/>
				<Button
					type="primary"
					size="large"
					className={btnStyles.btnHeader}
					onClick={showModal}
				>
					Хочу сайт
				</Button>
			</Col>
			<Col span={12} className={styles.right}>
				<Image
					width="500"
					height="500"
					src={ctaImage.src}
					className={styles.image}
					alt="call to action image"
				/>
			</Col>
		</Row>
		// </div>
	);
};

export default ContactContainer;
