import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/fontawesome-free-solid';
import styled from 'styled-components';

const HireFormGender = ({ hireQnA, nowQnA }) => {
  return (
    <DivHireFormGender>
      <div className='gender'>
        <select>
          {['무관', '남자', '여자'].map((gender) => (
            <option value={gender}>{gender}</option>
          ))}
        </select>
        <FontAwesomeIcon
          icon={faAngleDown}
          color={'#ccc'}
          className='select-arrow'
        />
      </div>
    </DivHireFormGender>
  );
};

export default HireFormGender;

const DivHireFormGender = styled.div`
  position: relative;

  .gender {
    display: inline-block;
    width: 100%;
    height: 38px;
    border: 1px solid #ccc;

    select {
      appearance: none;
      width: 100%;
      height: 100%;
      padding: 6px 30px 6px 12px;
      border: none;
      background-color: transparent;
      vertical-align: middle;
      font-size: 16px;

      &:focus {
        outline: none;
      }
    }

    .select-arrow {
      position: absolute;
      top: 50%;
      right: 12px;
      transform: translateY(-50%);
      pointer-events: none;
    }
  }
`;
