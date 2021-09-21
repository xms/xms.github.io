import React from 'react';
import { Row, Col } from 'antd';
import styled from 'styled-components';

const ImageBox = styled.img`
  width: 100%;
`;

const WorkItem = styled(Row)`
  padding: 1rem 0;
`;
function Work(props) {
  const { title = '', image = null, children } = props;
  return (
    <WorkItem align="top" gutter={16}>
      <Col span={24}>
        <h3>
          {title}
        </h3>
      </Col>
      <Col xs={24} sm={24} lg={12}>
        <ImageBox src={image} alt="" />
      </Col>
      <Col xs={24} sm={24} lg={12}>
        {children}
      </Col>
    </WorkItem>
  );
}

export default Work;
