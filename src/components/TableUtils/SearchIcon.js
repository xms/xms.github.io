import React from 'react';
import { SearchOutlined } from '@ant-design/icons';

function SearchIconButton({ filtered }) {
  return (
    <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
  );
}

export default SearchIconButton;
