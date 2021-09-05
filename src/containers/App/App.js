import React, { useState } from 'react';
import { Layout, Button, Row, Col } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import styled from 'styled-components';

import AppRoute from 'routes/AppRoute';
import { Sidebar, MobileSidebar, Weather } from './components';

const { Header, Content, Footer } = Layout;

const StyledHeader = styled(Header)`
  width: 100%;
  display: flex;
  font-size: 1rem;
  position: relative;
  overflow: hidden;
  ul {
    flex-grow: 1;
    display: flex;
    align-items: center;
    text-align: center;
    li {
      font-size: 1rem;
      flex: 1;
    }
  }

  .sidebar-togger {
      display: none;
    }
  @media screen and (max-width: 800px){
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    .sidebar {
      display: none;
    }
    .sidebar-togger {
      display: block;
    }
  }
`;

const colSpan = {
  xs: 24,
  md: 22,
  lg: 16,
  xl: 16,
  xxl: 16,
};

export default function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  function handleToggleSidebar() {
    setShowSidebar(!showSidebar);
  }
  return (
    <Layout>
      <StyledHeader>
        <Button onClick={handleToggleSidebar} icon={<MenuOutlined />} className="sidebar-togger" />
        <Sidebar />
        <Weather />
      </StyledHeader>
      <Content style={{ minHeight: 'calc(100vh - 138px)', padding: '2rem' }}>
        <MobileSidebar show={showSidebar} onMenuClick={handleToggleSidebar} />
        {/* <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb> */}
        <Row justify="center">
          <Col {...colSpan}>
            <AppRoute />
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Li-Yun Chang ©2021 </Footer>
    </Layout>
  );
}
