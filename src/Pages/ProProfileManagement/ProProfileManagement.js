import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Axios from 'axios';

const ProProfileManagementPage = () => {
  const [img, setImg] = useState('');
  const [rating, setRating] = useState('');
  const [name, setName] = useState('');

  // useEffect =
  //   (() => {
  //     Axios.get('url', {
  //       headers: {
  //         Authorization: localStorage.getItem('Login-token'),
  //       },
  //     }).then((res) => {
  //       setName(res.data.name);
  //     });
  //   },
  //   []);

  return (
    <>
      {/* </navBar>
      <userName>{name}</userName> */}
      <PpmContainer>
        <AllSection>
          <ProfileSection>
            <MyProfileBody>
              {/* 프로필 상황 */}
              <ProfileOverview>
                <ThumbContainer>
                  <Thumb>
                    <UserProfilePicture>
                      <ClickIcon></ClickIcon>
                      <IconClickInput>
                        <CustomFileInput type='file' label='Upload' accept='.txt'></CustomFileInput>
                        <CustomFileLabel></CustomFileLabel>
                      </IconClickInput>
                    </UserProfilePicture>
                  </Thumb>
                </ThumbContainer>
                <ProfileInfo>
                  <ProfileReview>
                    <ReviewItem>
                      <Value>0</Value>
                      <Label>리뷰 평점</Label>
                    </ReviewItem>
                    <Divider></Divider>
                    <ReviewItem>
                      <Value>0</Value>
                      <Label>리뷰수</Label>
                    </ReviewItem>
                    <Divider></Divider>
                    <ReviewItem>
                      <Value>0</Value>
                      <Label>고용수</Label>
                    </ReviewItem>
                  </ProfileReview>
                  <ProfileButton>미리 보기</ProfileButton>
                </ProfileInfo>
              </ProfileOverview>

              <ProfileName>
                <ProfileNameWrapper>
                  <div className='profile-name-update'>
                    <h2>이름</h2>
                    <div className='action-group'>
                      <div className='update-save-button'>저장</div>
                    </div>
                  </div>
                  <div className='info'>
                    <div className='value' display='block'>
                      홍정민
                    </div>
                    <input type='text' placeholder='이름 또는 업체명을 입력해 주세요' className='form-control-is-valid' display='none'></input>
                    <small display='none'></small>
                    <div className='invalid-feedback'></div>
                  </div>
                </ProfileNameWrapper>
              </ProfileName>

              {/*  <ProfileMainService></ProfileMainService>
              
                <ProfileIntroduction></ProfileIntroduction>
               
                <ProfileAddress></ProfileAddress>
               
                <ProfileMap></ProfileMap>
              
                <ProfileActiveTime></ProfileActiveTime>
               
                <ProfilePayment></ProfilePayment>
                
                <ProfileCareerHistory></ProfileCareerHistory>
               
                <ProfileServicesProvided></ProfileServicesProvided>
                
                <ProfileServicesDetail></ProfileServicesDetail>
                
                <ProfilePhotoVideo></ProfilePhotoVideo>
                
                <ProfileQandA></ProfileQandA>
                
                <ProfileLink></ProfileLink>
                
                <ProfileReviewRating></ProfileReviewRating> */}
            </MyProfileBody>
          </ProfileSection>
        </AllSection>
      </PpmContainer>
      {/* </Footer> */}
    </>
  );
};

export default ProProfileManagementPage;

//Styled Components
const PpmContainer = styled.div`
  background-color: #fff;
  width: 100%;
  padding: 0;
`;
const AllSection = styled.div`
  max-width: 1170px;
  padding: 0 100px;
  margin: 0 auto;
`;
const ProfileSection = styled.div`
  margin: 0 auto;
  width: 616px;
`;
const MyProfileBody = styled.div`
  padding: 0 0 16px;
  font-size: 0;
`;
const ProfileOverview = styled.div`
  width: 100%;
  display: inline-block;
  padding: 34px 0;
`;
const ThumbContainer = styled.div`
  box-sizing: border-box;
`;
const Thumb = styled.div`
  float: left;
  margin-right: 24px;
  position: relative;
`;
const UserProfilePicture = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #f2f2f2;
`;
const ClickIcon = styled.span`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 30px;
  height: 30px;
  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMCIgaGVpZ2h0PSIzMCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBmaWxsPSIjMDBDN0FFIiBkPSJNMTkgMzBIMFYxMUMwIDQuOTI1IDQuOTI1IDAgMTEgMGgxOXYxOWMwIDYuMDc1LTQuOTI1IDExLTExIDExeiIvPjxwYXRoIGQ9Ik01IDI1aDIwVjVINXoiLz48cGF0aCBzdHJva2U9IiNGRkYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNMTkuNDExIDEwLjc0TDE3LjU1NSA4aC01LjExbC0xLjg1NyAyLjc0SDdWMjBoMTZ2LTkuMjZ6Ii8+PHBhdGggc3Ryb2tlPSIjRkZGIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIgZD0iTTE3LjUgMTQuNzVhMi4yNSAyLjI1IDAgMTEtNC41IDAgMi4yNSAyLjI1IDAgMDE0LjUgMHoiLz48L2c+PC9zdmc+)
    no-repeat;
`;
const IconClickInput = styled.div`
  position: absolute;
  opacity: 0;
  bottom: 0;
  height: 30px;
  width: 30px;
  right: 0;
  overflow: hidden;
`;
const CustomFileInput = styled.input`
  z-index: 2;
  position: relative;
  width: 100%;
  height: calc(1.5em + 1.375rem + 2px);
`;
const CustomFileLabel = styled.label`
  left: 0;
  z-index: 1;
  height: calc(1.5em + 1.375rem + 2px);
  font-weight: 400;
  background-color: #fff;
  border: 1px solid #e1e1e1;
  border-radius: 0.25rem;
`;
const ProfileInfo = styled.div`
  float: left;
  max-width: 650px;
`;
const ProfileReview = styled.ul`
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  list-style: none;
  display: flex;
  flex-direction: row;
`;
const ReviewItem = styled.li`
  position: relative;
  display: inline-block;
  list-style: none;
  width: 30%;
`;
const Value = styled.li`
  font-size: 28px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.6px;
  text-align: center;
  color: #323232;
  list-style: none;
`;
const Label = styled.li`
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: -0.2px;
  text-align: center;
  color: #b5b5b5;
  font-weight: 500;
  list-style: none;
`;
const Divider = styled.li`
  height: 20px;
  width: 1px;
  background-color: #e1e1e1;
  margin: 0 8px;
  top: 12px;
  list-style: none;
  position: relative;
  display: inline-block;
`;
const ProfileButton = styled.button`
  width: 100%;
  height: auto;
  margin-top: 18px;
  padding: 7px 140px;
  line-height: 24px;
  font-size: 14px;
  border-radius: 4px;
  color: #fff;
  background-color: #00c7ae;
  border-color: #00c7ae;
`;
const ProfileName = styled.div`
  padding: 24px 0;
  border-bottom: 1px solid #f2f2f2;
  font-size: 0;
`;
const ProfileNameWrapper = styled.div`
  padding: 24px 0;
  border-bottom: 1px solid #f2f2f2;
  font-size: 0;

  .profile-name-save {
    display: inline-block;
    width: 100%;
    margin-bottom: 16px;
    .h2 {
      float: left;
      font-size: 18px;
      font-weight: 700;
      line-height: 1.44;
      letter-spacing: -0.3px;
      margin: 0;
    }
    .action-group {
      cursor: pointer;
      float: right;
      font-size: 14px;
      font-weight: 500;
      line-height: 1.43;
      letter-spacing: -0.2px;
      text-align: right;
      .update-save-button {
        color: #00c7ae;
      }
    }
  }
  .info {
    font-size: 1rem;
    .value {
      box-sizing: border-box;
    }
    .form-control-is-valid {
      //display: none;
      width: 100%;
      border-radius: 4px;
      padding: 12px;
      height: auto;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.5;
      color: #323232;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #e1e1e1;
    }
    small {
      margin-top: 8px;
      font-size: 14px;
      color: #00c7ae;
      font-weight: 500;
    }
    .invalid-feedback {
      display: none;
      width: 100%;
      margin-top: 0.25rem;
      font-size: 80%;
      color: #ff3131;
    }
  }
`;
// const  = styled.div`box-sizing: border-box;`;
