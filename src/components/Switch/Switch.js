import React from 'react';
import { Switch } from 'antd';
import { CloseOutlined, CheckOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const StyledSwitch = styled(Switch)`
  &.ant-switch {
    background: #E53A40;
    &-checked {
      background: #519D9E;
    }
  }
`;
function SwitchComponent(props) {
  return (
    <StyledSwitch
      checkedChildren={<CheckOutlined />}
      unCheckedChildren={<CloseOutlined />}
      defaultChecked={true}
      {...props}
    />
  );
}

export default SwitchComponent;
