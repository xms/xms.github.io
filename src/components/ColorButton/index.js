import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

const ColorButton = styled(Button)`
  background: ${({ isActive, color }) => (isActive ? color[6] : color[5])};
  border: 0px;
  color: ${({ isActive, color }) => (isActive ? '#FFF' : color[2])};
  :focus {
  background: ${({ isActive, color }) => (isActive ? color[6] : color[5])};
  border: 0px;
  color: ${({ isActive, color }) => (isActive ? '#FFF' : color[2])};
  }
  :active {
  background: ${({ isActive, color }) => (isActive ? color[6] : color[5])};
  border: 0px;
  color: ${({ isActive, color }) => (isActive ? '#FFF' : color[2])};
  }
  :hover {
    background: ${props => props.color[6]};
    color: #FFF;
    border: 0px;
  }
`;
function ColorButtonComponent(props) {
  const { children, ...rest } = props;
  return (
    <ColorButton
      size="small"
      shape="round"
      {...rest}
    >
      {children}
    </ColorButton>
  );
}

export default ColorButtonComponent;
