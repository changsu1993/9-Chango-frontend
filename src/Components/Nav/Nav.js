import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
  return (
    <NavBar>
      <div className='nav-logo'>
        <Link to='/main/레슨'>
          <img
            alt='숨고 로고'
            src='https://static.cdn.soomgo.com/static/img/home/index_soomgo_logo.svg'
          />
        </Link>
      </div>
      <div className='nav-link'>
        <ul>
          <li>
            <Link to='/pro'>
              <h3>고수찾기</h3>
            </Link>
          </li>
          <li>
            <Link to='/pro-management'>
              <h3>고수관리</h3>
            </Link>
          </li>
          <li>
            <Link to='/signup'>
              <h3>회원가입</h3>
            </Link>
          </li>
          <li>
            <Link to='/login'>
              <h3>로그인</h3>
            </Link>
          </li>
        </ul>
      </div>
    </NavBar>
  );
};

export default Nav;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 72px;
  padding: 16px 24px;

  .nav-logo {
    a {
      text-decoration: none;

      img {
        height: 36px;
        vertical-align: middle;
      }
    }
  }

  .nav-link {
    display: flex;
    align-items: center;
    ul {
      li {
        display: inline-block;
        padding-left: 48px;
        a {
          text-decoration: none;
          color: var(--black);

          h3 {
            font-size: 16px;
          }
        }
      }
    }
  }
`;
