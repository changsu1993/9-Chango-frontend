import React, { useState, useEffect } from 'react';
import HireFormList from './HireFormList';
import HireFormInput from './HireFormInput';
import HireFormGender from './HireFormGender';
import HireFormLocation from './HireFormLocation';
import HireFormDates from './HireFormDates';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { faExclamationCircle } from '@fortawesome/fontawesome-free-solid';

const HireUserRequest = ({ hireQnA }) => {
  const [nowQnA, setNowQnA] = useState(0);

  const changeGage = (lengthNum) =>
    ((lengthNum + 1) / (hireQnA && hireQnA.length)) * 100;

  const changeFormType = (formType) => {
    switch (formType) {
      case '체크박스':
        return <HireFormList hireQnA={hireQnA} nowQnA={nowQnA} />;
      case '라디오버튼':
        return <HireFormList hireQnA={hireQnA} nowQnA={nowQnA} />;
      case '매칭 성별: 선호성별 선택':
        return <HireFormGender hireQnA={hireQnA} nowQnA={nowQnA} />;
      case '날짜 옵션+지정':
        return <HireFormDates />;
      case '매칭 GPS좌표: 주소 3단계':
        return <HireFormLocation hireQnA={hireQnA} nowQnA={nowQnA} />;
      case '텍스트박스':
        return <HireFormInput hireQnA={hireQnA} nowQnA={nowQnA} />;
      default:
        break;
    }
  };

  const changeAnswerCount = (operator) => {
    if (operator === '-') {
      return nowQnA > 0 ? setNowQnA(nowQnA - 1) : 0;
    } else {
      return nowQnA >= (hireQnA && hireQnA.length - 1)
        ? hireQnA && hireQnA.length - 1
        : setNowQnA(nowQnA + 1);
    }
  };

  console.log(nowQnA);

  return (
    <UserFormWrap>
      <FormHeader
        gageWidth={`${changeGage(nowQnA)}%`}
        persentActive={changeGage(nowQnA)}
      >
        <div className='form-header-progress'>
          <div className='gage'></div>
        </div>
        <div className='form-header-persent'>
          {changeGage(nowQnA).toFixed(0)}%
        </div>
      </FormHeader>
      <FormMain>
        <div className='form-setting'>
          <h3 className='form-question'>
            {hireQnA && hireQnA[nowQnA].question}
          </h3>
          {changeFormType(hireQnA && hireQnA[nowQnA].type.title)}
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
        {/* <div className='form-error-msg'>
          <FontAwesomeIcon icon={faExclamationCircle} /> 옵션을 하나 이상
          선택하셔야합니다
        </div>
        <div className='form-error-msg'>
          <FontAwesomeIcon icon={faExclamationCircle} /> 옵션을 선택해주세요
        </div>
        <div className='form-error-msg'>
          <FontAwesomeIcon icon={faExclamationCircle} /> 주소를 선택해주세요
        </div>
        <div className='form-error-msg'>
          <FontAwesomeIcon icon={faExclamationCircle} /> 빈 칸을 채워주세요
        </div>
        <div className='form-error-msg'>
          <FontAwesomeIcon icon={faExclamationCircle} /> 날짜를 선택해주세요
        </div> */}
        <div className='form-btn-wrap'>
          {/* 다음 버튼 마지막 질문엔 -> 요청 보내기 */}
          <ButtonPre
            type='button'
            onClick={() => changeAnswerCount('-')}
            isActive={nowQnA}
          >
            이전
          </ButtonPre>
          <ButtonNext
            type='button'
            onClick={() => changeAnswerCount('+')}
            final={nowQnA}
          >
            다음
          </ButtonNext>
          <ButtonFinal type='button' final={nowQnA}>
            제출하기
          </ButtonFinal>
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

    .gage {
      width: ${(props) => props.gageWidth};
      height: 4px;
      /* 변화각도 , 처음색, 끝색 / 두 개 이상의 색이 직선을 따라 점진적으로 변화 */
      background: linear-gradient(150deg, var(--primary), #03b9c9);
      border-radius: 5px;
      transition: width 0.6s ease;
    }
  }

  .form-header-persent {
    display: ${(props) => (props.persentActive >= 70 ? 'block' : 'none')};
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
  display: ${(props) => (props.isActive === 0 ? 'none' : 'inline-block')};
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
  display: ${(props) => (props.final === 10 ? 'none' : 'inline-block')};
  background-color: var(--primary);
  color: var(--white);
  border-radius: 4px;
`;

const ButtonFinal = styled(ButtonNext)`
  display: ${(props) => (props.final === 10 ? 'inline-block' : 'none')};
`;
