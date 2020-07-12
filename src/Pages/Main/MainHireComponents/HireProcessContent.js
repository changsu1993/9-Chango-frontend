import React from 'react';
import styled from 'styled-components';

const HireProcessContent = ({ infoData }) => {
  return (
    <RequestProcessContent>
      <ContentIdx>{infoData.idx}</ContentIdx>
      <ContentImg alt={infoData.title} src={infoData.iconImg} />
      <ContentTxt>
        <h5>{infoData.title}</h5>
        <p>{infoData.contentTxt}</p>
      </ContentTxt>
    </RequestProcessContent>
  );
};

export default HireProcessContent;

const RequestProcessContent = styled.div`
  max-width: 25%;
  padding: 0 15px;
`;

const ContentIdx = styled.div`
  line-height: 30px;
  color: var(--success);
  font-size: 20px;
  font-weight: 500;
`;

const ContentImg = styled.img`
  display: block;
  margin: 0 auto 20px;
`;

const ContentTxt = styled.div`
  h5 {
    line-height: 24px;
    margin-bottom: 0.5rem;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
  }

  p {
    line-height: 20.02px;
    font-size: 14px;
    text-align: center;
    letter-spacing: -0.2px;
    color: var(--gray-light);
  }
`;
