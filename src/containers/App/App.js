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
  background-image: linear-gradient(#023047, #001845);
  ul.sidebar {
    flex-grow: 1;
    display: flex;
    align-items: center;
    text-align: center;
    background: transparent;
    li {
      font-size: 1rem;
      flex: 1;
      &:hover {
        /* TODO: 要調整權重，目前無效 QQ */
        background: rgba(255, 255, 255, 0.5);
      }
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
    ul.sidebar {
      display: none;
    }
    .sidebar-togger {
      display: block;
    }
  }
`;

const ContentWrapper = styled(Content)`
  min-height: calc(100vh - 138px);
  .content {
    padding: 2rem 50px;
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
      <ContentWrapper>
        <MobileSidebar show={showSidebar} onMenuClick={handleToggleSidebar} />
        {/* <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb> */}
        <Row justify="center" className="content">
          <Col {...colSpan}>
            <AppRoute />
          </Col>
        </Row>
      </ContentWrapper>
      <Footer style={{ textAlign: 'center' }}>Li-Yun Chang ©2021 </Footer>
    </Layout>
  );
}
