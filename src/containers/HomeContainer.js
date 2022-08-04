import React from "react";
import AboutContainer from "./AboutContainer";
import ProjectsContainer from "./ProjectsContainer";
import SkillsContainer from "./SkillsContainer";
import { Layout } from "antd";
const { Content } = Layout;
import HeaderContainer from "./HeaderContainer";
import Contact from "src/components/Contact";
import Cta from "../components/Cta";
import FooterContainer from "./FooterContainer";

function HomeContainer() {
	return (
		<>
			<HeaderContainer />
			<Content>
				<AboutContainer />
				<SkillsContainer />
				<Cta />
				<ProjectsContainer />
				<Contact />
			</Content>
			<FooterContainer />
		</>
	);
}

export default HomeContainer;
