import React, { useContext, useEffect } from "react";
import AboutContainer from "./AboutContainer";
import ProjectsContainer from "./ProjectsContainer";
import SkillsContainer from "./SkillsContainer";
import { Layout } from "antd";
const { Content } = Layout;
import HeaderContainer from "./HeaderContainer";
import Contact from "src/components/Contact";
import Cta from "../components/Cta";
import FooterContainer from "./FooterContainer";
import { context } from "src/utils/context";

function HomeContainer() {
	const { windowDimention, setWindowSize } = useContext(context);

	const detectSize = () => {
		setWindowSize({
			winWidth: window.innerWidth,
			winHeight: window.innerHeight,
		});
	};

	useEffect(() => {
		detectSize();
	}, []);

	useEffect(() => {
		console.log("windowDimention", windowDimention);
		window.addEventListener("resize", detectSize);

		return () => {
			window.removeEventListener("resize", detectSize);
		};
	}, [windowDimention]);

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
