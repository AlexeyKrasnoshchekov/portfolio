import React, { useContext } from "react";
import { Typography, Button, List, Col, Row } from "antd";
const { Title, Text } = Typography;
import styles from "../styles/cta.module.scss";
import btnStyles from "../styles/Button.module.less";
import ctaImage from "../assets/ctaImage.webp";
import { context } from "src/utils/context";

function ContactContainer() {
	const { toggleModal } = useContext(context);

	const showModal = () => {
		toggleModal(true);
	};

	const data = [
		`Racing car sprays burning fuel into crowd.`,
		"Japanese princess to wed commoner.",
		"Australian walks 100km after outback crash.",
	];

	return (
		// <div >
		<Row className={styles.cta}>
			<Col span={12} className={styles.left}>
				<Title className={styles.title} level={3}>
					In addition to providing
				</Title>
				<Text>
					nstead of simply putting a sign up CTA to promote her
					newsletter
				</Text>
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
				<img className={styles.image} src={ctaImage.src} />
			</Col>
		</Row>
		// </div>
	);
}

export default ContactContainer;
