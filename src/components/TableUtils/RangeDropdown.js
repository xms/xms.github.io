import React, { useRef, useEffect } from 'react';
import { DatePicker, Space, Button, message, Row } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

function RangeDropdown({ setSelectedKeys, selectedKeys, confirm, clearFilters, dataIndex, visible, ...props }) {
  // console.log('props', props);
  const rangePickerRef = useRef(null);
  useEffect(() => {
    if (visible && rangePickerRef) {
      rangePickerRef.current.focus();
    }
  }, [visible]);

  function handleFilterSearch() {
    props.handleSearch(selectedKeys, confirm, dataIndex);
  }

  function handleCalendarChange(times) {
    setSelectedKeys([times] || [[]]);
  }

  function handleFilterReset() {
    props.handleReset(clearFilters);
  }

  const rowStyle = {
    padding: '0.5rem'
  };

  return (
    <div style={{ padding: 8 }}>
      <Row style={rowStyle}>
        <DatePicker.RangePicker
          ref={rangePickerRef}
          allowClear
          showTime
          onCalendarChange={handleCalendarChange}
          value={selectedKeys?.[0] || []}
        />
      </Row>
      <Row style={rowStyle} justify="end">
        <Space>
          <Button onClick={handleFilterReset} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="primary"
            onClick={handleFilterSearch}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
            disabled={!selectedKeys?.[0]}
          >
            Search
          </Button>
        </Space>
      </Row>
    </div>
  );
}

export default RangeDropdown;
