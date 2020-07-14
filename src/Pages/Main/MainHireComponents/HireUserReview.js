import React from 'react';
import styled from 'styled-components';
import StarPoint from './StarPoint';

const HireUserReview = (props) => {
  return (
    <UserReviewWrap>
      <div className='review-info'>
        <h5>김**</h5>
        <StarPoint pointNum={4.7} />
      </div>
      <p className='review-txt'>
        즐겁게 수업받았습니다~! 준비도 잘해와주시고 재미있고 친절하게 잘
        알려주셔서 유익한 시간 보냈네요~ 웃으면서 재미있게 미술도 하고 완성된
        작품보며 뿌듯함을 느낍니다 ㅎ
      </p>
    </UserReviewWrap>
  );
};

export default HireUserReview;

const UserReviewWrap = styled.div`
  margin-bottom: 30px;

  &:last-child {
    margin-bottom: 0;
  }

  .review-info {
    display: flex;
    align-items: center;
    height: 24px;
    margin-bottom: 8px;

    h5 {
      margin-right: 8px;
      font-size: 16px;
      font-weight: 500;
      letter-spacing: -0.3px;
    }
  }

  .review-txt {
    line-height: 21px;
    font-size: 14px;
    font-weight: 400;
    color: var(--gray-dark);
    letter-spacing: -0.2px;
  }
`;
