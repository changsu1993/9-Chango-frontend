import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const HireFormInput = ({ hireQnA, nowQnA }) => {
  return (
    <DivHireFormInput>
      <input type='text' placeholder='ex. 취미로 기본기부터 배우고 싶어요' />
    </DivHireFormInput>
  );
};

export default HireFormInput;

const DivHireFormInput = styled.div`
  margin-bottom: 16px;

  input[type='text'] {
    width: 100%;
    height: 48px;
    padding: 11px 16px;
    border: 1px solid var(--gray-white);
    border-radius: 4px;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: var(--gray);
    }
  }
`;
