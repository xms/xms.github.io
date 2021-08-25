/* eslint-disable react/prop-types */
import React, { useState } from 'react';
// import styled from 'styled-components';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import _split from 'lodash/split';
import _slice from 'lodash/slice';
import _join from 'lodash/join';
import setting from 'routes/SidebarSetting';


const { Sider } = Layout;
const { SubMenu } = Menu;

const MainItem = ({ key, to, icon, title }) => (
  <Menu.Item key={key} icon={icon}>
    <Link to={to}>{title}</Link>
  </Menu.Item>);

const NestItem = ({ key, icon, title, content }) => (
  <SubMenu key={key} icon={icon} title={title}>
    {content.map(sub => MainItem(sub))}
  </SubMenu>
);

/**
 * 我只想用最多2層的menu item，請不要白目。
 * 自動active menu item時，用routing path的第一層對應setting的第一層的key
 * routing path的第二層key對應setting的第二層的key
 * @param {*} props
 */
function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  // const history = useHistory();
  const { pathname } = useLocation();

  const selectedPath = _slice(_split(pathname, '/', 3), 1);
  const selectedKey = _join(selectedPath, '-').toLowerCase();

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
      <Menu
        theme="dark"
        defaultSelectedKeys={[selectedKey || setting[0].key]}
        defaultOpenKeys={[selectedPath?.[0]]}
        mode="horizontal"
      >
        {setting.map(item => (item.content.length ? NestItem(item) : MainItem(item)))}
      </Menu>
    </Sider>
  );
}

export default Sidebar;
