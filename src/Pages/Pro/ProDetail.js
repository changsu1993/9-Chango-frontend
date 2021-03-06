import React, { Component } from 'react';
import StarPoint from './StarPointPro';
import ProMap from './ProMap';
import 'Pages/Pro/ProDetail.scss';
import person from '../../Images/person.png';

const starPointRandom = (Math.random() * 0.7 + 4.3).toFixed(1);
const reviewRandom = Math.floor(Math.random() * 50 + 250);

class ProDetail extends Component {
  constructor() {
    super();
    this.state = {
      proData: {},
    };
  }

  componentDidMount() {
    fetch(
      `http://10.58.2.181:8000/account/proinfo/${this.props.match.params.proId}`
    )
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          proData: res.provider_search,
        })
      );
  }

  render() {
    const { proData } = this.state;
    console.log(proData.sub_img);
    return (
      <div className='ProDetail'>
        <div className='prodetail-container'>
          <div className='prodetail-center'>
            <div className='prodetail-first'>
              <div className='prodetail-img'>
                <img
                  src={
                    proData.profile_img
                      ? proData.profile_img
                      : 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIHZpZXdCb3g9IjAgMCA3MiA3MiI+CiAgICA8ZGVmcz4KICAgICAgICA8cGF0aCBpZD0iYSIgZD0iTTAgMGg3MnY3MkgweiIvPgogICAgICAgIDxwYXRoIGlkPSJjIiBkPSJNMCAwaDcydjcySDB6Ii8+CiAgICA8L2RlZnM+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj4KICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYSIvPgogICAgICAgIDwvbWFzaz4KICAgICAgICA8ZyBtYXNrPSJ1cmwoI2IpIj4KICAgICAgICAgICAgPG1hc2sgaWQ9ImQiIGZpbGw9IiNmZmYiPgogICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjYyIvPgogICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iI0YyRjJGMiIgeGxpbms6aHJlZj0iI2MiLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI0UxRTFFMSIgZD0iTTcwLjY3NyA2Ny4wMzJjLS45NTEtMi44NDQtMi42NzQtNS43MTItNS4yMTUtNy4zODEtNC44OS0zLjIzNi0xMC41ODctNC45NjItMTYuMDk1LTYuODEtMS4zMjktLjQ2NS0yLjY4LS45Ny0zLjg5My0xLjY5LTEuMDg1LS42NDMtMS40OTItMS45Ni0xLjc0My0zLjExNy0uMTEyLS42MTItLjE4LTEuMjQtLjIxNS0xLjg1NyAzLjk5NC01LjQ0OCA2LjY0NC0xNC4zNCA2LjY0NC0yMS42M0M1MC4xNiAxMy4xNzIgNDMuNzEyIDEwIDM1Ljc2IDEwYy03Ljk1NCAwLTE0LjQgMy4xNjYtMTQuNCAxNC41NDMgMCA3LjU1MSAyLjg0IDE2LjgxNCA3LjA3NSAyMi4xOTUtLjAzOS40MjQtLjA5Ljg1LS4xNjYgMS4yNzItLjI1MiAxLjE1Ny0uNjU5IDIuNDUtMS43NDIgMy4wOTItMS4yMTYuNzItMi41NjYgMS4xNzctMy44OTUgMS42NC01LjUwOSAxLjg0OS0xMS4yMDYgMy40NzgtMTYuMDk0IDYuNzE0LTIuNTQyIDEuNjctNC4yNjQgNC43MzItNS4yMTQgNy41NzZDLjM0NiA2OS45ODItLjA1NCA3My42MzguMDA2IDc2LjZoNzEuOTg4Yy4wNi0yLjk2Mi0uMzQtNi42MTctMS4zMTctOS41Njh6IiBtYXNrPSJ1cmwoI2QpIi8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K'
                  }
                  alt='??????'
                />
              </div>
              <div className='prodetail-main'>
                <p className='prodetail-name'>{proData.provider_name}</p>
                <p className='prodetail-introduce'>{proData.introduce}</p>
                <div className='prodetail-star-main'>
                  <ul className='prodetail-star'>
                    <StarPoint pointNum={starPointRandom} />
                  </ul>
                  <span className='prodetail-average'>{starPointRandom}</span>
                  <span className='prodetail-score'>{reviewRandom}</span>
                </div>
              </div>
            </div>
            <div className='prodetail-second'>
              <p className='prodetail-introduction'>????????????</p>
              <p className='prodetail-contents'>{proData.introduce}</p>
            </div>
            <div className='prodetail-third'>
              <div className='prodetail-basic'>
                <p className='prodetail-basic-title'>????????????</p>
                {ProMap.BasicInformation.map((Basic) => {
                  return (
                    <div className='prodetail-map-image'>
                      <img
                        className='prodetail-basic-img'
                        src={Basic.BasicImg}
                        alt='????????????'
                      />
                      <span className='prodetail-basic-text'>
                        {Basic.BasicText}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className='prodetail-additional'>
                <p className='prodetail-additional-title'>????????????</p>
                {ProMap.AdditionalInformation.map((Addtional) => {
                  return (
                    <div className='prodetail-map-image'>
                      <img
                        className='prodetail-additional-img'
                        src={Addtional.AddImg}
                        alt='????????????'
                      />
                      <span className='prodetail-additional-text'>
                        {Addtional.AddText}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className='prodetail-fourth'>
              <p className='prodetail-service'>?????? ?????????</p>
              {ProMap.Service.map((ServiceMap) => {
                return (
                  <button className='prodetail-service-btn'>
                    {ServiceMap.ButtonService}
                  </button>
                );
              })}
            </div>
            <div className='prodetail-fifth'>
              <p className='prodetail-fifth-service'>????????? ????????????</p>
              <p className='prodetail-fifth-contents'>{proData.description}</p>
              <div className='prodetail-unfold'>
                <span className='prodetail-unfold-view'>?????????</span>
                {/* <span className='prodetail-unfold-folding'>??????</span> */}
              </div>
            </div>
            <div className='prodetail-picture'>
              <p className='prodetail-picture-title'>?????? ??? ?????????</p>
              <div className='prodetail-picture-box'>
                {proData.sub_img &&
                  proData.sub_img.map((reviewImg) => (
                    <img src={reviewImg} alt='??????' />
                  ))}
              </div>
              <div className='prodetail-view-main'>
                <div className='prodetail-view'>?????????</div>
              </div>
            </div>
            <div className='prodetail-review'>
              <p className='prodetail-review-title'>??????</p>
              <div className='prodetail-star-wapper'>
                <div className='prodetail-review-average'>4.6</div>
                <div className='prodetail-review-star-main'>
                  <ul className='prodetail-review-star'>
                    <StarPoint pointNum={2.7} />
                  </ul>
                  <p className='prodetail-review-count'>418??? ??????</p>
                </div>
              </div>
              <div className='prodetail-review-user'>
                <span className='prodetail-review-user-name'>??????</span>
                <span className='prodetail-review-user-wapper'>
                  <ul className='prodetail-review-user-star'>
                    <StarPoint pointNum={2.7} />
                  </ul>
                </span>
                <span className='prodetail-review-day'>??????</span>
              </div>
              <div className='prodetail-img-container'>
                <div className='prodetail-review-img'>
                  <img src='' alt='??????' />
                </div>
              </div>
              <p>??????</p>
              <div className='prodetail-review-unfold-wrapper'>
                <div className='prodetail-review-unfold'>?????? ?????????</div>
              </div>
            </div>
            <div className='prodetail-question-wapper'>
              <p className='prodetail-qna'>????????????</p>
              <div className='prodetail-qna-one'>
                <p className='prodetail-question'>
                  Q.???????????? ???????????? ??? ?????? ????????? ????????????????
                </p>
                <p className='prodetail-answer'>*???????????? ???????????????.</p>
                <p className='prodetail-answer'>
                  ????????? ?????? ??? ?????? ????????? ??????????????? ???????????? ?????? ????????????
                </p>
                <p className='prodetail-answer'>
                  ????????? ???????????? ??????????????? ?????????.
                </p>
              </div>
              <div className='prodetail-qna-two'>
                <p className='prodetail-question'>
                  Q.A/S ?????? ?????? ????????? ????????? ??????????
                </p>
                <p className='prodetail-answer'>???????????? ?????????</p>
                <p className='prodetail-answer'>
                  ????????? ???????????? ??????????????? ???????????????.
                </p>
                <p className='prodetail-answer'>
                  ????????? ????????? ????????? ?????? ???????????????
                </p>
                <p className='prodetail-answer'>
                  ?????????.??? ??????????????? ??????????????????.
                </p>
              </div>
            </div>
          </div>
          <div className='prodetail-sidebox'>
            <p className='prodetail-sidebox-contents'>
              ???????????? ????????? ?????????????????????????
              <br />
              <br />
              ????????? ???????????????.
            </p>
            <button className='prodetail-sidebox-btn'>?????? ????????????</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProDetail;
