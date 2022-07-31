import React, { useContext, useEffect, useRef, useState } from "react";
import { Menu, Anchor } from "antd";
// const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;
import styles from "../styles/Navbar.module.scss";

import { context } from "../utils/context";
import { Link } from "react-scroll";

const LeftMenu = () => {
	const [current, setCurrent] = useState(2);
	const [menuItems, setMenuItems] = useState([]);
	const { menu } = useContext(context);
	const initialRender = useRef(true);

	useEffect(() => {
		if (initialRender.current) {
			initialRender.current = false;
			return;
		}
		setMenuItems([]);

		menu &&
			menu.map((item) => {
				// let menuItemObj = ;
				console.log("item", item);
				setMenuItems((oldArr) => [
					...oldArr,
					{
						label: (
							<Link
								// key={key}
								//   activeClass="btn btn-ghost btn-sm rounded-btn cursor-pointer active font-bold transition duration-300 ease-in-out"
								to={item.route}
								spy={true}
								smooth={true}
								duration={500}
								className={styles.borderNone}
								//   className={
								//     'btn-primary btn-ghost btn-sm rounded-btn cursor-pointer transition duration-300 ease-in-out'
								//   }
							>
								{item.label}
							</Link>
						),
						key: item.key,
					},
				]);
			});
	}, [menu]);

	useEffect(() => {
		menuItems.length !== 0 && console.log("menuItems", menuItems);
	}, [menuItems]);

	const onClick = (e) => {
		console.log("click ", e);
		setCurrent(e.key);
	};
	return (
		// <div>111</div>
		<div
			style={{
				width: "100%",
				display: "flex",
				justifyContent: "center",
				outline: "2px solid blue",
			}}
		>
			{menuItems.length !== 0 && (
				<Menu
					onClick={onClick}
					selectedKeys={[current]}
					mode="horizontal"
					items={menuItems}
					className={[styles.bgTransparent, styles.borderNone]}
				/>
			)}
		</div>
	);
};
export default LeftMenu;
