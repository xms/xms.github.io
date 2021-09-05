import React from 'react';
import { AreaChartOutlined, HighlightOutlined, ProfileOutlined } from '@ant-design/icons';

const iconStyle = { style: { fontSize: '1.25rem' } };
const sidebarSetting = [
  {
    key: 'profile',
    to: '/profile',
    icon: <ProfileOutlined {...iconStyle} />,
    title: 'Profile',
    description: '個人檔案',
    content: [],
  },
  {
    key: 'worklist',
    to: '/worklist',
    icon: <HighlightOutlined {...iconStyle} />,
    title: 'Work list',
    description: '作品集',
    content: [],
  },
  {
    key: 'endless',
    to: '/endless',
    icon: <AreaChartOutlined {...iconStyle} />,
    title: 'Endless chart',
    description: '串接socket圖表',
    content: [],
  },
];

export default sidebarSetting;
