import React from "react";
import styles from "../styles/projectsContainer.module.less";
import { Typography } from "antd";
const { Title } = Typography;
// import { context } from "../utils/context";
import ProjectImgLeft from "src/components/ProjectImgLeft";
import ProjectImgRight from "src/components/ProjectImgRight";
import { data } from "../utils/projectsData";

const ProjectsContainer = () => {
	return (
		<div id="projects" className={styles.projects}>
			<Title level={2} className={styles.mainTitle}>
				Портфолио
			</Title>
			{data !== 0 &&
				data.map((proj, index) => {
					return index % 2 === 0 ? (
						<ProjectImgLeft key={index} proj={proj} />
					) : (
						<ProjectImgRight key={index} proj={proj} />
					);
				})}
		</div>
	);
};

export default ProjectsContainer;
