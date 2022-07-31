import React from "react";
// import styles from '../styles/Home.module.scss';
import AboutContainer from "./AboutContainer";
import ProjectsContainer from "./ProjectsContainer";
import SkillsContainer from "./SkillsContainer";

import Image from "next/image";
import HeaderContainer from "./HeaderContainer";

function HomeContainer() {
	return (
		<div className="antialiased bg-primary-content text-primary">
			<HeaderContainer />
			<AboutContainer />
			<div className="px-12 divider" />
			<ProjectsContainer />
			<div className="px-12 divider" />
			<SkillsContainer />
			{/* <Footer /> */}
		</div>
	);
}

export default HomeContainer;
