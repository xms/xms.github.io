import React from 'react';
import styled from 'styled-components';
import { Menu, Tooltip } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import _split from 'lodash/split';
import _slice from 'lodash/slice';
import _join from 'lodash/join';

import setting from 'routes/SidebarSetting';

const { SubMenu } = Menu;

// 主選單
const MainItem = ({ key, to, icon, title, description = null }) => (
  <Menu.Item key={key} icon={icon}>
    <Tooltip title={description}>
      <Link to={to}>{title}</Link>
    </Tooltip>
  </Menu.Item>);

// 子選單
const NestItem = ({ key, icon, title, content }) => (
  <SubMenu key={key} icon={icon} title={title}>
    {content.map(sub => MainItem(sub))}
  </SubMenu>
);

/**
 * 我只想用最多2層的menu item
 * 自動active menu item時，用routing path的第一層對應setting的第一層的key
 * routing path的第二層key對應setting的第二層的key
 * @param {*} props
 */
function Sidebar() {
  // const history = useHistory();
  const { pathname } = useLocation();

  const selectedPath = _slice(_split(pathname, '/', 3), 1);
  const selectedKey = _join(selectedPath, '-').toLowerCase();

  return (
    <Menu
      className="sidebar"
      theme="dark"
      defaultSelectedKeys={[selectedKey || setting[0].key]}
      defaultOpenKeys={[selectedPath?.[0]]}
      mode="horizontal"
    >
      {setting.map(item => (item.content.length ? NestItem(item) : MainItem(item)))}
    </Menu>
  );
}

export default Sidebar;
