import React, { useState } from 'react';
import { Layout, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import styled from 'styled-components';

import AppRoute from 'routes/AppRoute';
import { Sidebar, MobileSidebar, Weather } from './components';

const { Header, Content, Footer } = Layout;

const StyledHeader = styled(Header)`
  width: 100%;
  display: flex;
  font-size: 1rem;
  position: absolute;
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
  @media screen and (max-width: 800px){
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    position: relative;
    .sidebar {
      display: none;
    }
  }
`;

export default function App() {
  const [showSidebar, setShowSidebar] = useState(true);

  function handleToggleSidebar() {
    setShowSidebar(!showSidebar);
  }
  return (
    <Layout>
      <StyledHeader>
        <Button onClick={handleToggleSidebar} icon={<MenuOutlined />} />
        <Sidebar />
        <Weather />
      </StyledHeader>
      <Content className="site-layout" style={{ minHeight: 'calc(100vh - 138px)' }}>
        <MobileSidebar show={showSidebar} />
        {/* <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb> */}
        <div className="site-layout-background" style={{ padding: 24, minHeight: 380 }}>
          <AppRoute />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Li-Yun Chang ©2021 </Footer>
    </Layout>
  );
}
