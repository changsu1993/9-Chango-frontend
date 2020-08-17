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
          {[
            '서울',
            '세종',
            '강원',
            '인천',
            '경기',
            '충북',
            '충남',
            '경북',
            '대전',
            '대구',
            '전북',
            '경남',
            '울산',
            '광주',
            '부산',
            '전남',
            '제주',
          ].map((si) => (
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
          {[
            '강남구',
            '강동구',
            '강북구',
            '강서구',
            '관악구',
            '광진구',
            '구로구',
            '금천구',
            '노원구',
            '도봉구',
            '동대문구',
            '동작구',
            '마포구',
            '서대문구',
            '서초구',
            '성동구',
            '성북구',
            '송파구',
            '양천구',
            '영등포구',
            '용산구',
            '은평구',
            '종로구',
            '중구',
            '중랑구',
          ].map((gu) => (
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
          {[
            '개포1동',
            '개포2동',
            '개포4동',
            '개포동',
            '논현1동',
            '논현2동',
            '논현동',
            '대치1동',
            '대치2동',
            '대치4동',
            '대치동',
            '도곡1동',
            '도곡2동',
            '도곡동',
            '삼성1동',
            '삼성2동',
            '삼성동',
            '세곡동',
            '수서동',
            '신사동',
            '압구정동',
            '역삼1동',
            '역삼2동',
            '역삼동',
            '율현동',
            '일원1동',
            '일원2동',
            '일원동',
            '일원본동',
            '자곡동',
            '청담동',
          ].map((dong) => (
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
