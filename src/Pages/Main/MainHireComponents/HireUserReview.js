import React from 'react';
import styled from 'styled-components';
import StarPoint from './StarPoint';

const HireUserReview = ({ userName, review }) => {
  const starPointRandom = (Math.random() * 0.9 + 4.1).toFixed(1);

  return (
    <UserReviewWrap>
      <div className='review-info'>
        <h5>{userName}</h5>
        <StarPoint pointNum={starPointRandom} />
      </div>
      <p className='review-txt'>{review}</p>
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
