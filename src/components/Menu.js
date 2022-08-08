import React, { useContext, useEffect, useState } from "react";
import { Menu } from "antd";
import styles from "../styles/navbar.module.less";
import { context } from "../utils/context";
import { Link } from "react-scroll";

const MyMenu = () => {
	const [menuItems, setMenuItems] = useState([]);
	const { menu, windowDimention } = useContext(context);

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
								className={styles.menuLink}
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
			{menuItems.length !== 0 && windowDimention.winWidth > 576 && (
				<Menu
					mode="horizontal"
					items={menuItems}
					className={styles.bgTransparent}
				/>
			)}
			{menuItems.length !== 0 && windowDimention.winWidth < 576 && (
				<Menu items={menuItems} className={styles.drawerMenu} />
			)}
		</div>
	);
};
export default MyMenu;
