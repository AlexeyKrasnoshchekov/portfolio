import React from "react";
import { Typography } from "antd";
const { Title } = Typography;
import styles from "../styles/skillsContainer.module.less";
import Image from "next/image";

const Skill = ({ skill }) => {
	return (
		<>
			{skill && (
				<>
					<div className={styles.skill}>
						<Image
							layout="responsive"
							width={1}
							height={1}
							src={skill[Object.keys(skill)[0]].default.src}
							alt="логотип технологии web разработки"
						/>
					</div>
					<Title level={4} className={styles.title}>
						{Object.keys(skill)[0].split(".")[0]}
					</Title>
				</>
			)}
		</>
	);
};

export default Skill;
