import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Axios from 'axios';

const NameInput = () => {
  return (
    <>
      <ProfileNameWrapper>
        <div className='profile-name-update'>
          <h2>이름</h2>
          <div className='action-group'>
            <div className='update-save-button'>저장</div>
          </div>
        </div>
        <div className='info'>
          <div className='value' display='block'>
            홍정민
          </div>
          <input type='text' placeholder='이름 또는 업체명을 입력해 주세요' className='form-control-is-valid' display='none'></input>
          <small display='none'></small>
          <div className='invalid-feedback'></div>
        </div>
      </ProfileNameWrapper>
    </>
  );
};

export default NameInput;

const ProfileNameWrapper = styled.div`
  padding: 24px 0;
  border-bottom: 1px solid #f2f2f2;
  font-size: 0;

  .profile-name-save {
    display: inline-block;
    width: 100%;
    margin-bottom: 16px;
    .h2 {
      float: left;
      font-size: 18px;
      font-weight: 700;
      line-height: 1.44;
      letter-spacing: -0.3px;
      margin: 0;
    }
    .action-group {
      cursor: pointer;
      float: right;
      font-size: 14px;
      font-weight: 500;
      line-height: 1.43;
      letter-spacing: -0.2px;
      text-align: right;
      .update-save-button {
        color: #00c7ae;
      }
    }
  }
  .info {
    font-size: 1rem;
    .value {
      box-sizing: border-box;
    }
    .form-control-is-valid {
      border-radius: 4px;
      padding: 12px;
      height: auto;
    }
    small {
      margin-top: 8px;
      font-size: 14px;
      color: #00c7ae;
      font-weight: 500;
    }
    .invalid-feedback {
      display: none;
      width: 100%;
      margin-top: 0.25rem;
      font-size: 80%;
      color: #ff3131;
    }
  }
`;
