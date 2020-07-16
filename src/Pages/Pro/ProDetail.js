import React, { Component } from 'react';
import 'Pages/Pro/ProDetail.scss';
import StarPoint from './StarPointPro';
import person from '../../Images/person.png';

class ProDetail extends Component {
  render() {
    return (
      <div className='ProDetail'>
        <div className='prodetail-container'>
          <div className='prodetail-center'>
            <div className='prodetail-first'>
              <div className='prodetail-img'>
                <img src='' alt='사진' />
              </div>
              <div className='prodetail-main'>
                <p className='prodetail-name'>이름</p>
                <p className='prodetail-introduce'>자기소개</p>
                <div className='prodetail-star-main'>
                  <ul className='prodetail-star'>
                    <StarPoint pointNum={2.7} />
                  </ul>
                  <span className='prodetail-average'>평점</span>
                  <span className='prodetail-score'>(리뷰개수)</span>
                </div>
              </div>
            </div>
            <div className='prodetail-second'>
              <p className='prodetail-introduction'>한줄소개</p>
              <p className='prodetail-contents'>내용</p>
            </div>
            <div className='prodetail-third'>
              <div className='prodetail-basic'>
                <p className='prodetail-basic-title'>기본정보</p>
                <img
                  className='prodetail-basic-img'
                  src={person}
                  alt='이모티콘'
                />
                <span className='prodetail-basic-text'>들어갈내용</span>
              </div>
              <div className='prodetail-additional'>
                <p className='prodetail-additional-title'>추가정보</p>
                <img
                  className='prodetail-additional-img'
                  src={person}
                  alt='이모티콘'
                />
                <span className='prodetail-additional-text'>들어갈내용</span>
              </div>
            </div>
            <div className='prodetail-fourth'>
              <p className='prodetail-service'>제공 서비스</p>
              <button className='prodetail-service-btn'>들어갈 내용</button>
            </div>
            <div className='prodetail-fifth'>
              <p className='prodetail-fifth-service'>서비스 상세설명</p>
              <p className='prodetail-fifth-contents'>내용</p>
              <div className='prodetail-unfold'>
                <span className='prodetail-unfold-view'>더보기</span>
                <span className='prodetail-unfold-folding'>접기</span>
              </div>
            </div>
            <div className='prodetail-picture'>
              <p className='prodetail-picture-title'>사진 및 동영상</p>
              <div className='prodetail-picture-box'>
                <img className='prodetail-picture-img' src='' alt='사진' />
              </div>
              <div className='prodetail-view-main'>
                <div className='prodetail-view'>더보기</div>
              </div>
            </div>
            <div className='prodetail-review'>
              <p className='prodetail-review-title'>리뷰</p>
              <div className='prodetail-star-wapper'>
                <div className='prodetail-review-average'>4.6</div>
                <div className='prodetail-review-star-main'>
                  <ul className='prodetail-review-star'>
                    <StarPoint pointNum={2.7} />
                  </ul>
                  <p className='prodetail-review-count'>418개 리뷰</p>
                </div>
              </div>
              <div className='prodetail-review-user'>
                <span className='prodetail-review-user-name'>이름</span>
                <span className='prodetail-review-user-wapper'>
                  <ul className='prodetail-review-user-star'>
                    <StarPoint pointNum={2.7} />
                  </ul>
                </span>
                <span className='prodetail-review-day'>날짜</span>
              </div>
              <div className='prodetail-img-container'>
                <div className='prodetail-review-img'>
                  <img src='' alt='사진' />
                </div>
              </div>
              <p>내용</p>
              <div className='prodetail-review-unfold-wrapper'>
                <div className='prodetail-review-unfold'>리뷰 더보기</div>
              </div>
            </div>
            <div className='prodetail-question-wapper'>
              <p className='prodetail-qna'>질문답변</p>
              <div className='prodetail-qna-one'>
                <p className='prodetail-question'>
                  Q.서비스가 시작되기 전 어떤 절차로 진행하나요?
                </p>
                <p className='prodetail-answer'>*상담으로 진행합니다.</p>
                <p className='prodetail-answer'>
                  집상태 확인 및 시간 조율등 고객분들의 원하시는 부분 체크하여
                </p>
                <p className='prodetail-answer'>
                  맞춤형 서비스를 제공하도록 합니다.
                </p>
              </div>
              <div className='prodetail-qna-two'>
                <p className='prodetail-question'>
                  Q.A/S 또는 환불 규정은 어떻게 되나요?
                </p>
                <p className='prodetail-answer'>일반적인 절차는</p>
                <p className='prodetail-answer'>
                  작업후 고객님의 현장검수가 필수입니다.
                </p>
                <p className='prodetail-answer'>
                  부득이 사정이 여의치 않는 고객분께는
                </p>
                <p className='prodetail-answer'>
                  작업전.후 사진으로도 서비스합니다.
                </p>
              </div>
            </div>
          </div>
          <div className='prodetail-sidebox'>
            <p className='prodetail-sidebox-contents'>내용</p>
            <button className='prodetail-sidebox-btn'>견적 요청하기</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProDetail;
