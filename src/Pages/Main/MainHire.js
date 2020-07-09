import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainHire = () => {
  return (
    <Hire>
      <div className='hi1'>확인</div>
      <div className='hi2'>확인용</div>
    </Hire>
  );
};

export default MainHire;

const Hire = styled.main`
  color: var(--primary);

  .hi1 {
    background-color: var(--cyan);
  }

  .hi2 {
    background-color: var(--gray-dark);
  }
`;
