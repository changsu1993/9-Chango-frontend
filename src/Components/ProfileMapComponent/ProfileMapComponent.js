import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import KakaoMapContainer from '../KakaoMapContainer/KakaoMapContainer';

const ProfileMapComponent = (props) => {
  const [map, setMap] = useState(null);
  const [circle, setCircle] = useState(null);
  const [name, setName] = useState('');
  const [shouldHideUpdate, setShouldHideUpdateButton] = useState(false);
  const [shouldHideValue, setShouldHideValue] = useState(false);
  const [shouldHideSave, setShouldHideSaveButton] = useState(true);
  const [shouldHideList, setShouldHideList] = useState(true);
  let [values, setValues] = useState('');
  const [savedValues, setSavedValues] = useState('');

  const updateButtonHandler = (e) => {
    e.preventDefault();
    setShouldHideUpdateButton(true);
    setShouldHideValue(true);
    setShouldHideSaveButton(false);
    setShouldHideList(false);
  };

  const saveButtonHandler = () => {
    setSavedValues({ values });
    console.log('저장', savedValues);
    setShouldHideUpdateButton(false);
    setShouldHideValue(false);
    setShouldHideSaveButton(true);
    setShouldHideList(true);
  };

  const saveValueHandler = (radius, level) => {
    setValues([radius, level]);
    console.log('샐랙', values);
  };

  // useEffect(() => {
  //   console.log(savedValues);
  // }, [savedValues]);

  // useEffect(() => {
  //   console.log(values);
  // }, [values]);

  return (
    <ProfileMapWrapper>
      <div className='profile-map-update-save'>
        <h2 className='profile-map-field'>이동 가능 거리</h2>

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

      <div className='info'>
        <div className='value'>{name}</div>
        <div id='kakao-map-wrapper'>
          <KakaoMapContainer
            sentData={savedValues}
            setMap={setMap}
            setCircle={setCircle}
          />
        </div>
        <div className={shouldHideList ? 'hidden' : 'distance-list'}>
          <button
            className='normal'
            onClick={() => {
              map.setLevel(8);
              circle.setRadius(2000);
              setName('2km 이동 가능');
            }}
          >
            2Km
          </button>
          <button
            className='normal'
            onClick={() => {
              map.setLevel(9);
              circle.setRadius(5000);
              setName('5km 이동 가능');
            }}
          >
            5Km
          </button>
          <button
            className='normal'
            onClick={() => {
              map.setLevel(10);
              circle.setRadius(10000);
              setName('10km 이동 가능');
            }}
          >
            10Km
          </button>
          <button
            className='normal'
            onClick={() => {
              map.setLevel(11);
              circle.setRadius(25000);
              setName('25km 이동 가능');
            }}
          >
            25Km
          </button>
          <button
            className='normal'
            onClick={() => {
              map.setLevel(12);
              circle.setRadius(50000);
              setName('50km 이동 가능');
            }}
          >
            50Km
          </button>
          <button
            className='normal'
            onClick={() => {
              map.setLevel(13);
              circle.setRadius(100000);
              setName('100km 이동 가능');
            }}
          >
            100Km
          </button>
          <button
            className='normal'
            onClick={() => {
              map.setLevel(15);
              circle.setRadius(476000);
              setName('전국 이동 가능');
            }}
          >
            전국
          </button>
        </div>
      </div>
    </ProfileMapWrapper>
  );
};

export default ProfileMapComponent;

const ProfileMapWrapper = styled.div`
  .profile-map-update-save {
    display: inline-block;
    width: 100%;
    margin-bottom: 16px;
    .profile-map-field {
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
    font-size: 16px;
    .value {
      box-sizing: border-box;
      margin-bottom: 12px;
    }
    .hidden {
      display: none;
    }
    .distance-list {
      display: inline-block;
      margin: 16px 0 -14px;
      list-style: none;
      button {
        cursor: pointer;
        position: relative;
        float: left;
        padding: 10px 0;
        width: 112px;
        border-radius: 4px;
        border: 1px solid #e1e1e1;
        margin-right: 10px;
        margin-bottom: 14px;
        font-size: 14px;
        font-weight: 500;
        line-height: 1.43;
        letter-spacing: -0.2px;
        text-align: center;
        color: #737373;
        list-style: none;
      }

      button:focus {
        background-color: #00c7ae;
        color: #fff;
        outline: 0;
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
