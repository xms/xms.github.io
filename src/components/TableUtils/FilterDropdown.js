import React, { useRef, useEffect } from 'react';
import { Input, Space, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

function FilterDropdown({ setSelectedKeys, selectedKeys, confirm, clearFilters, dataIndex, visible, ...props }) {
  // console.log('props', props);
  const searchInput = useRef(null);
  useEffect(() => {
    if (visible && searchInput) {
      searchInput.current.focus();
    }
  }, [visible]);
  return (
    <div style={{ padding: 8 }}>
      <Input
        ref={searchInput}
        placeholder="Search keyword"
        value={selectedKeys[0]}
        onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
        onPressEnter={() => props.handleSearch(selectedKeys, confirm, dataIndex)}
        style={{ marginBottom: 8, display: 'block' }}
      />
      <Space>
        <Button onClick={() => props.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          Reset
        </Button>
        <Button
          type="primary"
          onClick={() => props.handleSearch(selectedKeys, confirm, dataIndex)}
          icon={<SearchOutlined />}
          size="small"
          style={{ width: 90 }}
        >
          Search
        </Button>
      </Space>
    </div>
  );
}

export default FilterDropdown;
