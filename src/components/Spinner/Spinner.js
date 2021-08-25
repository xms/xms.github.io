import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { DualRing } from 'react-css-spinners';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgba(10,10,10,0.5);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
`;

function Spinner() {
  const { loading } = useSelector(state => state.LoadingReducer);
  return (
    loading ?
      <Container>
        <DualRing
          size={100}
          thickness={10}
        />
      </Container> :
      null
  );
}

export default Spinner;
