import React, { useContext, useEffect, useState } from "react";
import { Menu } from "antd";
import styles from "../styles/Navbar.module.scss";
import { context } from "../utils/context";
import { Link } from "react-scroll";

const MyMenu = () => {
	const [menuItems, setMenuItems] = useState([]);
	const { menu } = useContext(context);

	useEffect(() => {
		setMenuItems([]);

		menu &&
			menu.map((item) => {
				setMenuItems((oldArr) => [
					...oldArr,
					{
						label: (
							<Link
								activeClass={styles.activeLink}
								to={item.route}
								spy={true}
								smooth={true}
								duration={500}
								className={styles.borderNone}
							>
								{item.label}
							</Link>
						),
						key: item.key,
					},
				]);
			});
	}, [menu]);

	return (
		<div className={styles.menuContainer}>
			{menuItems.length !== 0 && (
				<Menu
					mode="horizontal"
					items={menuItems}
					className={[
						styles.bgTransparent,
						styles.borderNone,
						styles.menu,
					]}
				/>
			)}
		</div>
	);
};
export default MyMenu;
