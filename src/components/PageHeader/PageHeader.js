import React from 'react';
import { PageHeader } from 'antd';

function Header(props) {
  const { title = null, subTitle = null } = props;
  return (
    <PageHeader
      className="site-page-header"
      title={title}
      // breadcrumb={{ routes }}
      subTitle={subTitle}
    />
  );
}

export default Header;
