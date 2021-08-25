import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Block = styled.div`
  color: #fff;
  line-height: 64px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  div.logout {
    padding-left: 1rem;
    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

function UserInfo() {
  let history = useHistory();

  const handleLogout = () => {
    sessionStorage.clear();
    history.push('/login');
  };

  return (
    <Block>
      <div>
        {sessionStorage.getItem('username')}
        {' '}
        [
        {' '}
        {sessionStorage.getItem('userid')}
        {' '}
        /
        {' '}
        {sessionStorage.getItem('site')}
        {' '}
        ]
      </div>
      <div className="logout" onClick={handleLogout}>
        登出
      </div>
    </Block>
  );
}

export default UserInfo;
