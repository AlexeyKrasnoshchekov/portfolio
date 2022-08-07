import React, { useEffect, useState } from "react";
import { Typography, Col, Row } from "antd";
const { Title } = Typography;
import styles from "../styles/SkillsContainer.module.less";
import Skill from "src/components/Skill";

function importAll(r) {
	let images = [];

	r.keys().forEach((item, index) => {
		let obj = {};
		obj[item.replace("./", "")] = r(item);
		images.push(obj);
	});
	return images;
}

const SkillsContainer = () => {
	const [images, setImages] = useState([]);

	useEffect(() => {
		const images = importAll(
			require.context("../assets/icons", true, /\.(png|jpe?g|svg)$/)
		);

		const noDuplicatesImages = images.filter((image) => {
			return !Object.keys(image)[0].includes("/");
		});

		noDuplicatesImages.length !== 0 &&
			noDuplicatesImages.forEach((image) => {
				setImages((oldArray) => [...oldArray, image]);
			});
	}, []);

	return (
		<div className={styles.skills} id="skills">
			<Title level={2} className={styles.mainTitle}>
				Мой стэк технологий
			</Title>
			<Row justify="center">
				{images.length !== 0 &&
					images.map((skill, index) => {
						return (
							<Col
								key={index}
								span={6}
								lg={{ span: 6 }}
								md={{ span: 6 }}
								xs={{ span: 5 }}
								className={styles.col}
							>
								<Skill skill={skill} />
							</Col>
						);
					})}
			</Row>
		</div>
	);
};

export default SkillsContainer;
