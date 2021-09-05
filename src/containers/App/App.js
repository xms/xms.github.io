import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';

import AppRoute from 'routes/AppRoute';
import { Sidebar, Weather } from './components';

const { Header, Content, Footer } = Layout;

const StyledHeader = styled(Header)`
  width: 100%;
  display: flex;
  font-size: 1rem;
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
`;

export default function App() {
  return (
    <Layout>
      <StyledHeader>
        <Sidebar />
        <Weather />
      </StyledHeader>
      <Content className="site-layout" style={{ minHeight: 'calc(100vh - 138px)' }}>
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
