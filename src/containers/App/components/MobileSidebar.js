import React from 'react';
import styled from 'styled-components';
import { Menu, Tooltip } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import _split from 'lodash/split';
import _slice from 'lodash/slice';
import _join from 'lodash/join';

import setting from 'routes/SidebarSetting';

const { SubMenu } = Menu;

const MenuWrapper = styled.div`
  display: ${props => (props.show ? 'flex' : 'none')};
  z-index: 99;
  position: absolute;
  width: 100%;
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
    li {
      font-size: 1rem;
      flex: 1;
      width: 100%;
      border-top: 0.5px solid #CCCCCC;
    }
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
    <MenuWrapper show={show} className="mobile-sidebar">
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
