import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { API_IP } from 'Pages/common';
import { js_key } from 'Pages/common';
import { Backend_IP } from 'Pages/common';
import KakaoLogin from 'react-kakao-login';
import './Login.scss';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      loginId: '',
      loginPwd: '',
      errorId: false,
      errorPwd: false,
    };
  }

  idPwHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log('id');
  };

  changeHandler = () => {
    const { loginId, loginPwd } = this.state;
    loginId.length >= 0 && loginPwd.length >= 0
      ? this.setState({ errorId: false, errorPwd: false })
      : this.setState({ errorId: true, errorPwd: true });
  };

  //일반 로그인 클릭 핸들러
  loginClickHandler = (e) => {
    //e.preventDefault();
    const { loginId, loginPwd } = this.state;
    if (
      this.state.loginId.length >= 5 &&
      this.state.loginPwd.length >= 5 &&
      this.state.loginId.includes('@' && '.')
    ) {
      fetch('http://10.58.2.181:8000/account/sign-in', {
        method: 'POST',
        body: JSON.stringify({
          email: loginId,
          password: loginPwd,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          localStorage.setItem('access_token', res.access_token);
          this.props.history.push('/');
          this.setState({ errorId: false, errorPwd: false });
        });
    } else {
      this.setState({ errorId: true, errorPwd: true });
    }
  };

  //카카오 로그인버튼 생성
  responseKakao = (response) => {
    window.Kakao.Auth.login({
      success: (response) => {
        fetch(`${API_IP}/account/kakao`, {
          method: 'POST',
          headers: {
            Authorization: response.access_token,
          },
        })
          .then((response) => response.json())
          .then((response) => {
            localStorage.setItem('login_token', response.access_token);
            this.props.history.push('/');
          });
      },
    });
  };

  render() {
    return (
      <>
        <div className='login-body'>
          <div className='login-page'>
            <h2 className='welcome-message'>숨고에 오신 것을 환영합니다</h2>
            <div className='login-card'>
              <div className='login-form'>
                <div className='login-form-row'>
                  <div className='email-section-wrapper'>
                    <div className='email-input-box'>
                      <div className='email-label-value'> 이메일 </div>
                      <div className='email-input-wrapper'>
                        <input
                          className='email-input-item'
                          name='loginId'
                          onChange={(e) => {
                            this.idPwHandler(e);
                            this.changeHandler();
                          }}
                          type='email'
                        />
                        <div
                          className='invalid-feedback'
                          style={{
                            display: this.state.errorId ? 'block' : 'none',
                          }}
                        >
                          이메일 형식이 아닙니다. 다시 입력해주세요.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='password-section-wrapper'>
                    <div className='password-input-box'>
                      <div className='password-label-input'> 비밀번호 </div>
                      <div className='password-input-wrapper'>
                        <input
                          className='password-input-box'
                          name='loginPwd'
                          onChange={(e) => {
                            this.idPwHandler(e);
                            this.changeHandler();
                          }}
                          type='password'
                        />
                        <small
                          className='invalid-feedback'
                          style={{
                            display: this.state.errorPwd ? 'block' : 'none',
                          }}
                        >
                          비밀번호가 틀렸습니다.
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className='reset-password-link'>
                    <Link className='find-password-link'>비밀번호 찾기</Link>
                  </div>
                  <div className='login-button-wrapper'>
                    <button
                      className='login-button-primary'
                      onClick={this.loginClickHandler}
                    >
                      로그인
                      <span>
                        <div>
                          <div className='indicator-body'></div>
                          <p></p>
                        </div>
                      </span>
                    </button>
                  </div>

                  <div className='kakao-button-wrapper'>
                    <KakaoLogin
                      className='kakao-login-button-img'
                      jsKey={js_key}
                      buttonText='카카오톡으로 로그인 '
                      onSuccess={this.responseKakao}
                      onFailure={this.responseFail}
                      cookiePolicy={'single_host_origin'}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className='signup-link'>
              <Link to='/signup' className='no-account-link'>
                계정이 없으신가요?
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}
