import React from "react";
import { Typography } from "antd";
const { Title } = Typography;
import styles from "../styles/SkillsContainer.module.less";

function Skill({ skill }) {
	return (
		<>
			{skill && (
				<>
					<img
						className={styles.skill}
						src={skill[Object.keys(skill)[0]].default.src}
						alt="логотип технологии web разработки"
					/>
					<Title level={4} className={styles.title}>
						{Object.keys(skill)[0].split(".")[0]}
					</Title>
				</>
			)}
		</>
	);
}

export default Skill;
