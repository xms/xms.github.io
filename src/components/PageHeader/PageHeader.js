import React from 'react';
import { PageHeader } from 'antd';
import styled from 'styled-components';

const PageHeaderComponent = styled(PageHeader)`
  padding: 1rem 0;
`;
function Header(props) {
  const { title = null, subTitle = null } = props;
  return (
    <PageHeaderComponent
      title={title}
      // breadcrumb={{ routes }}
      subTitle={subTitle}
    />
  );
}

export default Header;
