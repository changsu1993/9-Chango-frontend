import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.scss';
import { Backend_IP } from 'Pages/common';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pwd: '',
      name: '',
    };
  }

  clickHandler = (e) => {
    e.prevent.Default();
    const { stateEmail, statePwd, stateName } = this.state;
    if (!stateEmail || !statePwd || !stateName) {
      alert('모든 항목을 작성해주세요');
    } else {
      fetch(`${Backend_IP}/user/signup`, {
        method: 'POST',
        body: JSON.stringify({
          email: stateEmail,
          password: statePwd,
          name: stateName,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.message === 'SUCCESS') {
            this.props.history.push('/login');
          }
        });
    }
  };

  idPwEmailHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log('id', this.state.email, 'pwd', this.state.password, 'name', this.state.name);
  };

  //패스워드 유효성 검사
  checkPwdHandler = (e) => {
    const checkPwd = function (str) {
      const reg_pwd = /(?=.*\d{1,50})(?=.*[~  `!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/;
      return reg_pwd.test(str) ? true : false;
    };
    if (!checkPwd(this.state.pwd)) {
      this.setState({
        pwd: '',
      });
    }
  };

  //아이디 유효성 검사
  checkEmailHandler = (e) => {
    //아이디 유효성검사(영문,숫자 혼합 6~20)
    const checkEmail = function (str) {
      const reg_email = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
      return reg_email.test(str) ? false : true;
    };
    if (!checkEmail(this.state.email)) {
      this.setState({
        email: '',
      });
    }
  };

  render() {
    return (
      <div className='signUp'>
        <div className='customer-signup-body'>
          <div className='signup-form-wrapper'>
            <div className='signup-form'>
              <h1>숨고에 오신 것을 환영합니다</h1>
              <div className='signup-card'>
                <div className='signup-form-row'>
                  <div className='signup-name-wrapper'>
                    <fieldset className='signup-name-input-box'>
                      <legend className='signup-name-label'> 이름 </legend>
                      <div className='signup-name-input-wrapper'>
                        <input
                          className='signup-name-input'
                          name='name'
                          placeholder='실명을 입력하세요'
                          onChange={(e) => {
                            this.idPwEmailHandler(e);
                          }}
                        />
                        <div className='signup-invalid-feedback'>이름은 2글자 이상이어야 합니다.</div>
                      </div>
                    </fieldset>
                  </div>
                  <div className='signup-email-wrapper'>
                    <fieldset className='signup-email-input-box'>
                      <legend className='signup-email-label'> 이메일 </legend>
                      <div className='signup-email-input-wrapper'>
                        <input
                          className='signup-email-input'
                          name='email'
                          placeholder='이메일을 입력하세요'
                          onChange={(e) => {
                            this.idPwEmailHandler(e);
                            this.checkEmailHandler();
                          }}
                        />
                        <div className='email-invalid-feedback'>올바르지 않은 형식의 이메일 입니다.</div>
                      </div>
                    </fieldset>
                  </div>
                  <div className='signup-password-wrapper'>
                    <fieldset className='signup-password-input-box'>
                      <legend className='signup-password-label'> 비밀번호 </legend>
                      <div className='signup-password-input-wrapper'>
                        <input
                          className='signup-password-input'
                          name='pwd'
                          type='password'
                          placeholder='영문자와 숫자를 포함하여 8자 이상'
                          onChange={(e) => {
                            this.idPwEmailHandler(e);
                            this.checkPwdHandler();
                          }}
                        />
                        <div className='password-invalid-feedback'> 비밀번호를 다시 입력해주세요.</div>
                      </div>
                    </fieldset>
                  </div>
                  <div className='signup-term-checkbox-form' onClick={this.clickHandler}>
                    숨고의&nbsp;<Link className='term-usage-link'>이용약관&nbsp;</Link>및&nbsp;
                    <Link className='term-privacy-link'>개인정보취급방침&nbsp;</Link>에 동의합니다
                  </div>
                  <div className='signup-btn-wrapper'>
                    <button className='signup-btn-primary'>회원가입</button>
                  </div>

                  <div className='signup-with-kakao'>
                    <button className='signup-btn-secondary'>카카오로 가입하기</button>
                    <small>유저의 허락없이 게시물을 올리지 않습니다.</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
