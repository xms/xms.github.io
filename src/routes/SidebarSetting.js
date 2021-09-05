import React from 'react';
import { AreaChartOutlined, HighlightOutlined, ProfileOutlined } from '@ant-design/icons';

const iconStyle = { style: { fontSize: '1.25rem' } };
const sidebarSetting = [
  {
    key: 'profile',
    to: '/profile',
    icon: <ProfileOutlined {...iconStyle} />,
    title: 'Profile',
    content: [],
  },
  {
    key: 'worklist',
    to: '/worklist',
    icon: <HighlightOutlined {...iconStyle} />,
    title: 'Work list',
    content: [
    ],
  },
  {
    key: 'endless',
    to: '/endless',
    icon: <AreaChartOutlined {...iconStyle} />,
    title: 'Endless chart',
    content: [
    ],
  },
];

export default sidebarSetting;
