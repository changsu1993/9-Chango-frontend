import React from 'react';
import styled from 'styled-components';
const StarPoint = ({ pointNum }) => {
  const handlePoint = (num) => {
    let changeStar = pointNum - num;
    return changeStar >= -0.1
      ? 'full'
      : changeStar >= -0.6 && changeStar < -0.1
      ? 'half'
      : 'empty';
  };
  return (
    <StarPointUl>
      {[1, 2, 3, 4, 5].map((num) => (
        <li className={handlePoint(num)} key={num}></li>
      ))}
    </StarPointUl>
  );
};
export default StarPoint;

const StarPointUl = styled.ul`
  li {
    display: inline-flex;
    align-items: center;
    width: 13px;
    height: 12px;
    margin-right: 3px;
    &.empty {
      background: url('https://assets.cdn.soomgo.com/icons/icon-common-review-star-small-empty.svg');
    }
    &.half {
      background: url('https://assets.cdn.soomgo.com/icons/icon-common-review-star-small-half.svg');
    }
    &.full {
      background: url('https://assets.cdn.soomgo.com/icons/icon-common-review-star-small-full.svg');
    }
  }
`;
