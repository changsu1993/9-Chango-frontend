import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import StarPoint from './MainHireComponents/StarPoint';
import HireUserRequest from './MainHireComponents/HireUserRequest';
import hireProcessInfo from './MainHireComponents/hireProcessInfo';
import HireProcessContent from './MainHireComponents/HireProcessContent';
import HireUserReview from './MainHireComponents/HireUserReview';
import styled from 'styled-components';

// mock data로 추후 대체, 이미지, 별점 모두다
const backImg =
  'https://dmmj3ljielax6.cloudfront.net/upload/service-bg/service_428.jpg';

// 랜덤숫자 필요
const starPointRandom = (Math.random() * 0.7 + 4.3).toFixed(1);
const gosuRandom = Math.floor(Math.random() * 3000 + 6000).toLocaleString();
const formRandom = Math.floor(Math.random() * 6000 + 10000).toLocaleString();
const reviewRandom = Math.floor(Math.random() * 50 + 250);
// 리뷰 날짜
const reviewDate = new Date();

const MainHire = () => {
  return (
    <Hire>
      <HireHeader backImg={backImg}>
        <HireHeaderContents>
          <div className='header-title'>
            <h1 className='header-title-h1'>미술 회화 레슨</h1>
            <div className='header-title-review-wrap'>
              <StarPoint pointNum={starPointRandom} />
              <span>{starPointRandom}</span>
            </div>
          </div>
          <div className='header-data'>
            <div className='header-data-wrap'>
              <h5>{gosuRandom}</h5>
              <span>활동 고수</span>
            </div>
            <div className='header-data-wrap'>
              <h5>{formRandom}</h5>
              <span>누적 요청서</span>
            </div>
            <div className='header-data-wrap'>
              <h5>{reviewRandom}</h5>
              <span>리뷰 수</span>
            </div>
          </div>
        </HireHeaderContents>
        <HireHeaderBackColor />
      </HireHeader>
      <HireRequestForm>
        <RequestForm>
          <HireUserRequest />
        </RequestForm>
        <RequestTip>
          {/* 숨고는 어떤 곳인가요? 만 고정 */}
          <div className='tip-user'>
            <h4>숨고는 어떤 곳인가요?</h4>
            <p>
              서비스가 필요한 고객과 서비스를 제공하는 숨은 고수를 쉽고 빠르게
              연결해드리는 전문가 매칭 서비스입니다.
              <br /> 1분 내외의 요청서를 작성하면, 여러 고수님들이 맞춤형 견적을
              보내드려요.
              <br /> 맘에 쏙 드는 고수의 맞춤형 서비스를 받아보세요.
            </p>
          </div>
        </RequestTip>
      </HireRequestForm>
      <HireRequstProcess>
        <h4>요청서를 보낸 후 어떻게 진행되는지 알려드릴게요</h4>
        <div className='request-process'>
          {hireProcessInfo.map((infoData) => (
            <HireProcessContent infoData={infoData} key={infoData.idx} />
          ))}
        </div>
      </HireRequstProcess>
      <HireReview>
        <div className='user-review'>
          <div className='user-review-title'>
            <h4>생생한 고객님의 리뷰</h4>
            <span>업데이트 {reviewDate.toLocaleDateString()}</span>
          </div>
          {/* 백엔드 api로 맵 */}
          <HireUserReview />
          <HireUserReview />
          <HireUserReview />
        </div>
      </HireReview>
      <HireLink>
        <div className='process-link'>
          <div className='process-link-content'>
            <div className='process-link-content-txt'>
              <h4>혹시 전문가이신가요?</h4>
              <p>새로운 고객을 만나거나 일을 찾고 싶다면!</p>
            </div>
            <Link to='/hire'>
              <div className='process-link-content-btn'>고수로 가입하기</div>
            </Link>
          </div>
          <div className='process-link-content'>
            <div className='process-link-content-txt'>
              <h4>도움이 필요한 일이 있으신가요?</h4>
              <p>원하는 고수를 찾고 싶다면!</p>
            </div>
            <Link to='/hire'>
              <div className='process-link-content-btn'>요청서 작성하기</div>
            </Link>
          </div>
        </div>
      </HireLink>
    </Hire>
  );
};

export default MainHire;

const Hire = styled.main`
  padding-bottom: 50px;
`;

const HireHeader = styled.header`
  position: relative;
  padding: 60px 0 96px;
  background-image: url(${(props) => props.backImg});
  background-size: cover;
  background-position: 50%;
`;

const HireHeaderContents = styled.div`
  position: relative;
  z-index: 2;

  .header-title {
    max-width: 970px;
    margin: 0 auto;

    &-h1 {
      line-height: 60px;
      color: var(--white);
      font-size: 40px;
      font-weight: 500;
    }

    &-review-wrap {
      display: flex;
      align-items: center;
      height: 24px;

      span {
        margin-left: 8px;
        color: #ffce21;
        font-size: 16px;
        font-weight: 500;
      }
    }
  }

  .header-data {
    display: flex;
    max-width: 1030px;
    margin: 25px auto 0;
    color: var(--white);

    &-wrap {
      padding: 0px 30px;
      border-right: 1px solid rgba(255, 255, 255, 0.4);

      &:last-child {
        border-right: 0;
      }

      h5 {
        line-height: 1;
        margin-bottom: 6px;
        font-size: 22px;
      }

      span {
        line-height: 21px;
        font-size: 14px;
        letter-spacing: -0.2px;
      }
    }
  }
`;

const HireHeaderBackColor = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
`;

const HireRequestForm = styled.section`
  display: flex;
  flex-direction: row;
  max-width: 970px;
  margin: 0 auto;
  padding: 40px 0;
  color: var(--dark);
`;

const RequestForm = styled.article`
  max-width: 66.7%;
  width: 100%;
  padding-right: 40px;
  transform: translateY(-100px);
  z-index: 2;
`;

const RequestTip = styled.aside`
  max-width: 33.3%;

  .tip-user {
    margin-bottom: 40px;

    &:last-child {
      margin-bottom: 0;
    }

    h4 {
      line-height: 33px;
      margin-bottom: 4px;
      font-size: 16px;
      font-weight: 500;
      letter-spacing: -0.4px;
    }

    p {
      line-height: 21px;
      color: var(--gray-light);
      font-size: 14px;
      letter-spacing: -0.2px;
    }
  }
`;

const HireRequstProcess = styled.section`
  padding: 40px 0;
  background-color: var(--light);
  color: var(--dark);

  h4 {
    line-height: 33px;
    margin-bottom: 30px;
    text-align: center;
    font-size: 22px;
    font-weight: 500;
  }

  .request-process {
    display: flex;
    max-width: 970px;
    margin: 0 auto;

    &-content {
      max-width: 25%;
      padding: 0 15px;
    }
  }
`;

const HireReview = styled.section`
  padding: 40px 0;
  color: var(--dark);

  .user-review {
    max-width: 970px;
    margin: 0 auto;

    &-title {
      display: flex;
      margin-bottom: 40px;

      h4 {
        width: 70%;
        line-height: 33px;
        font-size: 22px;
        font-weight: 500;
      }

      span {
        width: 30%;
        line-height: 24px;
        text-align: right;
        font-weight: 500;
        color: #b5b5b5;
      }
    }
  }
`;

const HireLink = styled.section`
  padding: 40px 0;
  background-color: var(--light);

  .process-link {
    max-width: 970px;
    margin: 0 auto;

    &-content {
      display: inline-flex;
      justify-content: space-between;
      align-items: center;
      width: 50%;
      padding-right: 48px;
      color: var(--gray-dark);

      &:last-child {
        padding: 0 0 0 48px;
        border-left: 1px solid #e1e1e1;
      }

      &-txt {
        h4 {
          line-height: 24px;
          margin-bottom: 4px;
          font-size: 16px;
          font-weight: 700;
          color: var(--dark);
        }

        p {
          line-height: 21px;
          font-size: 14px;
          font-weight: 400;
          letter-spacing: -0.2px;
        }
      }

      a {
        text-decoration: none;

        .process-link-content-btn {
          height: 42px;
          line-height: 24px;
          padding: 8px 16px;
          border: 1px solid #b5b5b5;
          border-radius: 4px;
          color: var(--gray-light);
          font-weight: 500;
          cursor: pointer;

          &:hover {
            color: #323232;
          }
        }
      }
    }
  }
`;
