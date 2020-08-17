import React from 'react';
import footerList from './footerList';
import styled from 'styled-components';

const Footer = () => {
  return (
    <>
      <div>
        <FooterTop>
          <div>
            <div className='number'>1599-5319</div>
            <div>평일 10:00 - 18:00</div>
            <div>(점심시간 13:00 - 14:00 제외 · 주말/공휴일 제외)</div>
            <div>
              <button>APP STORE</button>
              <button>PLAY STORE</button>
            </div>
          </div>
          <ul>
            <FooterList>
              {footerList.list.map((data) => {
                return (
                  <li>
                    <div>{data.parentsList}</div>
                    {data.childList.map((sData) => (
                      <div>{sData}</div>
                    ))}
                  </li>
                );
              })}
            </FooterList>
          </ul>
        </FooterTop>
      </div>
      <div>
        <FooterBottom>
          <div className='FooterBottom-text'>
            <span>이용약관</span>
            <span>개인정보취급방침</span>
            <div>
              (주)브레이브모바일은 통신판매중개자로서 통신판매의 당사자가 아니며
              개별 판매자가 제공하는 <br /> 서비스에 대한 이행, 계약사항 등과
              관련한 의무와 책임은 거래 당사자에게 있습니다.
            </div>
            <div>상호명:(주)브레이브모바일 · 대표이사:김로빈</div>
          </div>
          <div className='FooterBottom-img'>
            {footerList.FooterImage.map((bottomImage) => {
              return <img src={bottomImage.img} alt='logo' />;
            })}
          </div>
        </FooterBottom>
      </div>
    </>
  );
};

export default Footer;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 40px;
  padding-top: 30px;
  border-top: 1px solid #e7e7e7;
  .number {
    margin-bottom: 10px;
    font-size: 20px;
    color: #00c7ae;
  }
  div {
    color: #737373;
    font-size: 14px;
    button {
      width: 136px;
      height: 36px;
      margin-top: 20px;
      margin-right: 10px;
      color: #ffffff;
      background-color: #00c7ae;
      border: none;
      border-radius: 20px;
    }
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-around;
  .FooterBottom-text {
    span {
      margin-right: 30px;
      font-size: 12px;
      color: #737373;
    }
    div {
      margin-top: 10px;
      font-size: 12px;
    }
  }
  .FooterBottom-img {
    img {
      margin-right: 10px;
      margin-top: 15px;
    }
  }
`;

const FooterList = styled.div`
  display: flex;
  li {
    margin-left: 30px;
    div {
      margin-bottom: 5px;
    }
  }
`;
