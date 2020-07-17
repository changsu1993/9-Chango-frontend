import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  faExclamationCircle,
  faCheckSquare,
} from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HireUserRequest = (props) => {
  const [checkValue, setCheckValue] = useState('');
  const [formData, setFormData] = useState({});

  return (
    <UserFormWrap>
      <FormHeader>
        {/* 1. 질문 배열의 길이로 progress gage 채우기
        2. 70% 이상일때 퍼센트 나오고 5% 단위로 증가
        3. width로 관리*/}
        <div className='form-header-progress'>
          <div className='form-header-progress-gage'></div>
        </div>
        <div className='form-header-persent'>70%</div>
      </FormHeader>
      <FormMain>
        <div className='form-setting'>
          {/* 질문 */}
          <h3 className='form-question'>어떤 레슨을 원하시나요?</h3>
          {/* input-체크박스-기타는 입력 */}
          <ul>
            <li className='form-answer'>
              <div className='form-answer-type'>
                <label value='드로잉' onClick={() => setCheckValue('드로잉')}>
                  <input type='checkbox' />
                  <span className='check-box'>
                    <FontAwesomeIcon icon={faCheckSquare} />
                  </span>
                  <span className='answer'>아무 코딩</span>
                </label>
              </div>
              <div
                className='form-answer-type-input'
                style={{ display: 'none' }}
              >
                <input type='text' placeholder='ex. 프롭스의 신 창고' />
              </div>
            </li>
            <li className='form-answer'>
              <div className='form-answer-type'>
                <label value='드로잉' onClick={() => setCheckValue('드로잉')}>
                  <input type='checkbox' />
                  <span className='check-box'>
                    <FontAwesomeIcon icon={faCheckSquare} />
                  </span>
                  <span className='answer'>기타</span>
                </label>
              </div>
              <div className='form-answer-type-input'>
                <input type='text' placeholder='ex. 프롭스의 신 창고' />
              </div>
            </li>
          </ul>
          {/* input - 라디오버튼-기타는 입력, 레슨생 성별 */}
          {/* input - text */}
          {/* select - 고수 성별 (무관으로 default) */}
          {/* select - 지역(시/군,구/동), 서울,경기,인천 */}
          {/* 달력 */}
          {/* 사진첨부 */}
          {/* 인증 - 일단은 보류 */}
        </div>
      </FormMain>
      <FormFooter>
        {/* 1. 체크박스&라디오 / 인풋창 / 달력 / 시군구동 일때 에러메시지 다름
        2. 선택 안되어있을때 메시지 띄우기, 각 데이터 타입에 따라 메시지 다르게 띄우기
        3. 에러메시지 배열 따로 생성 
        체크박스(옵션을 하나 이상 선택하셔야 합니다)
        라디오(옵션을 선택해주세요)
        주소select(주소를 선택해주세요)
        input text(빈 칸을 채워주세요)
        달력(날짜를 선택해주세요)
        */}
        <div className='form-error-msg'>
          <FontAwesomeIcon icon={faExclamationCircle} /> 옵션을 하나 이상
          선택하셔야합니다
        </div>
        <div className='form-btn-wrap'>
          {/* 다음 버튼 마지막 질문엔 -> 요청 보내기 */}
          <ButtonPre type='button'>이전</ButtonPre>
          <ButtonNext type='button'>다음</ButtonNext>
        </div>
      </FormFooter>
    </UserFormWrap>
  );
};

export default HireUserRequest;

const UserFormWrap = styled.div`
  padding: 40px;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  background: var(--white);
`;

const FormHeader = styled.header`
  padding-bottom: 40px;

  .form-header-progress {
    width: 100%;
    height: 4px;
    margin: 20px 0 0;
    border-radius: 2px;
    background-color: #f2f2f2;
    box-shadow: none;

    &-gage {
      width: 70%;
      height: 4px;
      /* 변화각도 , 처음색, 끝색 / 두 개 이상의 색이 직선을 따라 점진적으로 변화 */
      background: linear-gradient(150deg, var(--primary), #03b9c9);
      border-radius: 5px;
      transition: width 0.6s ease;
    }
  }

  .form-header-persent {
    line-height: 18px;
    padding: 8px 0px;
    font-size: 12px;
    text-align: center;
    color: var(--primary);
  }
`;

const FormMain = styled.main`
  padding-bottom: 40px;
  color: var(--dark);

  .form-setting {
    .form-question {
      line-height: 40px;
      margin-bottom: 40px;
      font-size: 24px;
      font-weight: 500;
      letter-spacing: -0.5px;
    }

    ul {
      border: 1px solid #e7e7e7;
      border-radius: 4px;

      .form-answer {
        padding: 15px 25px;
        border-bottom: 1px solid #e7e7e7;

        &:last-child {
          border-bottom: 0;
        }

        &-type {
          label {
            display: inline-block;
            line-height: 23px;
            width: 100%;
            cursor: pointer;

            input[type='checkbox'] {
              display: none;
            }

            input[type='checkbox'] + .check-box {
              vertical-align: top;
              margin-right: 20px;
              font-size: 23px;
              color: #e7e7e7;
            }

            input[type='checkbox']:checked + .check-box {
              color: var(--primary);
            }
          }
        }

        &-type-input {
          padding: 10px 37px 0;

          input[type='text'] {
            height: 48px;
            width: 100%;
            padding: 11px 16px;
            border: 1px solid #e7e7e7;
            border-radius: 4px;
            cursor: text;

            &:focus {
              outline: none;
            }

            &::placeholder {
              color: var(--gray);
            }
          }
        }
      }
    }
  }
`;

const FormFooter = styled.footer`
  .form-error-msg {
    line-height: 1.5;
    margin-bottom: 10px;
    text-align: right;
    font-size: 14px;
    font-weight: 400;
    color: var(--danger);
  }

  .form-btn-wrap {
    text-align: right;
  }
`;

const ButtonPre = styled.button`
  line-height: 1.5;
  padding: 11px 40px;
  background-color: var(--white);
  color: var(--primary);
  font-size: 16px;
  font-weight: 500;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  &:focus {
    outline: none;
  }
`;

const ButtonNext = styled(ButtonPre)`
  background-color: var(--primary);
  color: var(--white);
  border-radius: 4px;
`;
