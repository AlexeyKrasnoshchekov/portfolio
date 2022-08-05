import React, { useContext } from "react";
import { Space, Typography, Image, Button, Layout, Col, Row } from "antd";
const { Title, Text, Link } = Typography;
import styles from "../styles/ProjectsContainer.module.less";
import btnStyles from "../styles/Button.module.less";
import { context } from "src/utils/context";

function Project({ proj }) {
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
							/>
						)}
						<Text className={styles.descr}>{proj.descr}</Text>
						<div className={styles.stack}>
							<Text className={styles.stackText}>
								{`Stack: ${proj.stack.join(" ")}`}
							</Text>
						</div>
						<div>
							<Button
								type="primary"
								size="large"
								className={btnStyles.btnNavbar}
								style={{ marginRight: "1rem" }}
							>
								<a href={proj.githubLink} target="_blank">
									GitHub
								</a>
							</Button>
							{proj.liveLink !== "" && (
								<Button
									type="primary"
									size="large"
									className={btnStyles.btnNavbar}
								>
									<a href={proj.liveLink} target="_blank">
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
							/>
						</Col>
					)}
				</Row>
			</Col>
		</Row>
	);
}

export default Project;
