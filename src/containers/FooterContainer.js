import React from "react";
import styles from "../styles/FooterContainer.module.scss";
import { Space, Typography, Image, Button, Layout, Col, Row } from "antd";
const { Title, Text, Link } = Typography;
function FooterContainer() {
	return (
		<div className={styles.footer}>
			<Title level={3} className={styles.title}>
				Планируете новый проект? Вам нужен сайт?
			</Title>
			<Title level={4} className={styles.title2}>
				Давайте обсудим, просто напишите
			</Title>
			<Text className={styles.text}>
				Copyright ©2022 All rights reserved
			</Text>
		</div>
	);
}

export default FooterContainer;
