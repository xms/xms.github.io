import React from 'react';
import { useHistory, } from 'react-router-dom';
import { Result, Button } from 'antd';

function NotFound() {
  let history = useHistory();

  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button
            type="primary"
            onClick={() => {
              history.push('/');
            }}
          >
            返回首頁
          </Button>
}
      />

    </div>
  );
}
export default NotFound;
