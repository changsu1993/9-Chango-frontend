import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/fontawesome-free-solid';
import styled from 'styled-components';

const HireFormLocation = ({ hireQnA, nowQnA }) => {
  return (
    <DivHireFormLocation>
      <div className='location'>
        <select>
          <option disabled='disabled' selected='selected'>
            시/도
          </option>
          {['서울', '경기', '인천'].map((si) => (
            <option value={si}>{si}</option>
          ))}
        </select>
        <FontAwesomeIcon
          icon={faAngleDown}
          color={'#ccc'}
          className='select-arrow'
        />
      </div>
      <div className='location'>
        <select>
          <option disabled='disabled' selected='selected'>
            시/군/구
          </option>
          {['마포구', '서대문구', '중구'].map((gu) => (
            <option value={gu}>{gu}</option>
          ))}
        </select>
        <FontAwesomeIcon
          icon={faAngleDown}
          color={'#ccc'}
          className='select-arrow'
        />
      </div>
      <div className='location'>
        <select>
          <option disabled='disabled' selected='selected'>
            읍/면/동
          </option>
          {['망원동', '홍은동', '삼청동'].map((dong) => (
            <option value={dong}>{dong}</option>
          ))}
        </select>
        <FontAwesomeIcon
          icon={faAngleDown}
          color={'#ccc'}
          className='select-arrow'
        />
      </div>
    </DivHireFormLocation>
  );
};

export default HireFormLocation;

const DivHireFormLocation = styled.div`
  .location {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 38px;
    border: 1px solid #ccc;
    margin-bottom: 8px;

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
