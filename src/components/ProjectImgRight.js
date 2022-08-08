import React, { useContext } from "react";
import { Typography, Image, Button, Col, Row } from "antd";
const { Title, Text } = Typography;
import styles from "../styles/projectsContainer.module.less";
import btnStyles from "../styles/button.module.less";
import { context } from "src/utils/context";

const Project = ({ proj }) => {
	const { windowDimention } = useContext(context);
	return (
		<Row className={styles.project}>
			<Title level={3} className={styles.title}>
				{proj.title}
			</Title>
			<Col>
				<Row>
					<Col
						span={12}
						lg={{ span: 12 }}
						md={{ span: 24 }}
						xs={{ span: 24 }}
						sm={{ span: 24 }}
						className={styles.left}
					>
						{windowDimention.winWidth < 992 && (
							<Image
								width="100%"
								src={proj.img[[Object.keys(proj.img)[0]]].src}
								alt="project image"
							/>
						)}
						<Text className={styles.descr}>{proj.descr}</Text>
						<p className={styles.stackText}>
							{`Stack: ${proj.stack.join(" ")}`}
						</p>
						<div>
							<Button
								type="primary"
								size="large"
								className={btnStyles.btnNavbar}
								style={{ marginRight: "1rem" }}
							>
								<a
									href={proj.githubLink}
									target="_blank"
									rel="noreferrer"
								>
									GitHub
								</a>
							</Button>
							{proj.liveLink !== "" && (
								<Button
									type="primary"
									size="large"
									className={btnStyles.btnNavbar}
								>
									<a
										href={proj.liveLink}
										target="_blank"
										rel="noreferrer"
									>
										Live
									</a>
								</Button>
							)}
						</div>
					</Col>
					{windowDimention.winWidth > 992 && (
						<Col
							span={12}
							lg={{ span: 12 }}
							md={{ span: 12 }}
							className={styles.right}
						>
							<Image
								width="100%"
								src={proj.img[[Object.keys(proj.img)[0]]].src}
								alt="project image"
							/>
						</Col>
					)}
				</Row>
			</Col>
		</Row>
	);
};

export default Project;
