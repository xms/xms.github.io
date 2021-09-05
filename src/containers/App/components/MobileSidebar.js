import React from 'react';
import styled from 'styled-components';
import { Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import _split from 'lodash/split';
import _slice from 'lodash/slice';
import _join from 'lodash/join';

import setting from 'routes/SidebarSetting';

const { SubMenu } = Menu;

const MenuWrapper = styled.div`
  z-index: 99;
  position: absolute;
  width: 100%;
  display: flex;
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    transition: .3s ease all;
    li {
      font-size: 1rem;
      flex: 1;
      width: 100%;
      border-top: 0.5px solid #CCCCCC;
      padding: 0;
    }
  }

  &.active {
    transition: 0.3s ease all;
    width: 100%;
    left: 0;
    opacity: 1;
  }
  &.hidden {
    transition: 0.3s ease all;
    /* display: none; */
    width: 0;
    left: -100%;
    opacity: 0;
  }
`;
// 主選單
const MainItem = ({ key, to, icon, title, }) => (
  <Menu.Item key={key} icon={icon} style={{ marginTop: 0, marginBottom: 0, padding: '0.75rem' }}>
    <Link to={to}>{title}</Link>
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
function MobileSidebar(props) {
  const { show = false } = props;
  // const history = useHistory();
  const { pathname } = useLocation();

  const selectedPath = _slice(_split(pathname, '/', 3), 1);
  const selectedKey = _join(selectedPath, '-').toLowerCase();

  return (
    <MenuWrapper className={show ? 'active' : 'hidden'}>
      <Menu
        theme="dark"
        defaultSelectedKeys={[selectedKey || setting[0].key]}
        defaultOpenKeys={[selectedPath?.[0]]}
        // mode="horizontal"
      >
        {setting.map(item => (item.content.length ? NestItem(item) : MainItem(item)))}
      </Menu>
    </MenuWrapper>
  );
}

export default MobileSidebar;
