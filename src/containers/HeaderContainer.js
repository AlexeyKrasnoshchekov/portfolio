import React from 'react';
import { Drawer, Button, Layout, Col, Row } from 'antd';
const { Header, Content, Footer } = Layout;
import styles from '../styles/HeaderContainer.module.scss';

const HeaderContainer = () => {
  return (
    <Header
      style={{ height: '100vh', backgroundColor: 'none' }}
      className={styles.header}
      // className="flex flex-col w-full my-6"
      id="header"
    >
      <div>header</div>
    </Header>
  );
};

export default HeaderContainer;
