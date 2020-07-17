import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Axios from 'axios';

const ProfileMainServiceComponent = (props) => {
  const [input, setInput] = useState('');
  const [name, setName] = useState('과외');
  const [shouldHideUpdate, setShouldHideUpdateButton] = useState(false);
  const [shouldHideValue, setShouldHideValue] = useState(false);
  const [shouldHideSave, setShouldHideSaveButton] = useState(true);
  const [shouldHideInput, setShouldHideInputButton] = useState(true);
  const [shouldHideNormal, setShouldHideNormal] = useState(false);
  const [shouldHideError, setShouldHideError] = useState(true);

  let updateButtonHandler = (e) => {
    e.preventDefault();
    setShouldHideUpdateButton(true);
    setShouldHideValue(true);
    setShouldHideSaveButton(false);
    setShouldHideInputButton(false);
  };

  let handleInput = (e) => {
    setInput(e.target.value);
  };

  let updateName = (e) => {
    setName(input);
    setInput('');
    setShouldHideUpdateButton(false);
    setShouldHideValue(false);
    setShouldHideSaveButton(true);
    setShouldHideInputButton(true);
    setShouldHideError(true);
  };

  let showHideError = (e) => {
    setShouldHideNormal(true);
    setShouldHideError(false);
  };

  let saveButtonHandler = (e) => {
    e.preventDefault();
    if (input.length < 30) {
      updateName();
    } else {
      showHideError();
    }
  };

  return (
    <>
      <ProfileNameWrapper>
        <div className='profile-name-update-save'>
          <h2 className='profile-name-field'>대표 서비스</h2>

          <div className='profile-action-group'>
            <div
              className={shouldHideUpdate ? 'hidden' : 'update-button'}
              onClick={updateButtonHandler}
            >
              수정
            </div>
            <div
              className={shouldHideSave ? 'hidden' : 'save-button'}
              onClick={saveButtonHandler}
            >
              저장
            </div>
          </div>
        </div>

        <ul className='service-list'>
          {/* map함수로 고수가 선택한 서비스들 li로 나열. default는 첫번째가 selected, onclick시 highlight, selected, selected가 저장onclick하면 넘어감  */}
          <li className={shouldHideValue ? 'hidden' : 'value'}>{name}</li>
          <li className={shouldHideInput ? 'hidden' : 'input-message-wrapper'}>
            <input
              type='text'
              placeholder={name}
              value={input}
              onChange={handleInput}
              className='form-control-is-valid'
            />
            <small
              className={shouldHideNormal ? 'hidden' : 'normal-message'}
            ></small>
          </li>
          <div className={shouldHideError ? 'hidden' : 'invalid-feedback'}>
            이름은 30자를 넘을 수 없습니다
          </div>
        </ul>
      </ProfileNameWrapper>
    </>
  );
};

export default ProfileMainServiceComponent;

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
  .service-list {
    font-size: 16px;
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
        font-size: 16px;
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
      margin-top: 4px;
      font-size: 80%;
      color: #ff3131;
    }
  }
`;
