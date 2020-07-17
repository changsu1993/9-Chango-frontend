import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Axios from 'axios';

const ProfileAddressComponent = (props) => {
  const [input, setInput] = useState('');
  const [shouldHideUpdate, setShouldHideUpdateButton] = useState(false);
  const [shouldHideValue, setShouldHideValue] = useState(false);
  const [shouldHideInput, setShouldHideInputButton] = useState(true);
  const [shouldHideError, setShouldHideError] = useState(true);
  const [searchAddress, setSearchAddress] = useState('주소를 입력해주세요');

  let updateButtonHandler = (e) => {
    new daum.Postcode({
      oncomplete: function (data) {
        setSearchAddress(data.address);
      },
    }).open();
    e.preventDefault();
    setShouldHideUpdateButton(false);
    setShouldHideValue(false);
  };

  useEffect(() => {
    console.log('여기요', searchAddress);
  }, [searchAddress]);

  let handleInput = (e) => {
    setInput(e.target.value);
  };

  let showHideError = (e) => {
    setShouldHideError(false);
  };

  return (
    <>
      <ProfileNameWrapper>
        <div className='profile-name-update-save'>
          <h2 className='profile-name-field'>활동 지역</h2>

          <div className='profile-action-group'>
            <div
              className={shouldHideUpdate ? 'hidden' : 'update-button'}
              onClick={updateButtonHandler}
            >
              수정
            </div>
          </div>
        </div>

        <div className='info'>
          <div className={shouldHideValue ? 'hidden' : 'value'}>
            {searchAddress}
          </div>
          <div
            className={shouldHideInput ? 'hidden' : 'input-message-wrapper'}
          ></div>
          <div className={shouldHideError ? 'hidden' : 'invalid-feedback'}>
            소개는 80자를 넘을 수 없습니다.
          </div>
        </div>
      </ProfileNameWrapper>
    </>
  );
};

export default ProfileAddressComponent;

const ProfileNameWrapper = styled.div`
  .profile-name-update-save {
    display: inline-block;
    width: 100%;
    margin-bottom: 16px;
    .profile-name-field {
      float: left;
      font-size: 18px;
      font-weight: 700;
      line-height: 1.44;
      letter-spacing: -0.3px;
      margin: 0;
    }
    .profile-action-group {
      cursor: pointer;
      float: right;
      font-size: 14px;
      font-weight: 500;
      line-height: 1.43;
      letter-spacing: -0.2px;
      text-align: right;
      .update-button {
        color: #00c7ae;
      }
      .save-button {
        color: #ff3131;
      }
      .hidden {
        display: none;
      }
    }
  }
  .info {
    font-size: 1rem;
    .value {
      box-sizing: border-box;
    }
    .hidden {
      display: none;
    }
    .input-message-wrapper {
      .form-control-is-valid {
        width: 100%;
        border-radius: 4px;
        padding: 12px;
        height: auto;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: #323232;
        background-color: #fff;
        background-clip: padding-box;
        border: 1px solid #e1e1e1;
      }
      .normal-message {
        margin-top: 8px;
        font-size: 14px;
        color: #00c7ae;
        font-weight: 500;
      }
      .hidden {
        display: none;
      }
    }
    .invalid-feedback {
      width: 100%;
      margin-top: 0.25rem;
      font-size: 80%;
      color: #ff3131;
    }
  }
`;
