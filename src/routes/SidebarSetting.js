import React from 'react';
import { PieChartOutlined, DashboardOutlined } from '@ant-design/icons';

const sidebarSetting = [
  {
    key: 'profile',
    to: '/profile',
    icon: <DashboardOutlined />,
    title: 'Profile',
    content: [],
  },
  {
    key: 'fun',
    to: null,
    icon: <PieChartOutlined />,
    title: 'Functions',
    content: [
      {
        key: 'fun-worklist',
        to: '/fun/worklist',
        icon: null,
        title: 'Work List',
        content: [],
      },
    ],
  },
];


export default sidebarSetting;
