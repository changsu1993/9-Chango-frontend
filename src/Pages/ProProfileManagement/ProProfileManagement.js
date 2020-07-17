import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProfileNameChangerComponent from 'Components/ProfileNameChangerComponent/ProfileNameChangerComponent';
import ProfileMainServiceComponent from 'Components/ProfileMainServiceComponent/ProfileMainServiceComponent';
import ProfileInfoComponent from 'Components/ProfileInfoComponent/ProfileInfoComponent';
import ProfileAddressComponent from 'Components/ProfileAddressComponent/ProfileAddressComponent';
import ProfileMapComponent from 'Components/ProfileMapComponent/ProfileMapComponent';
import ProfileActiveTimeComponent from 'Components/ProfileActiveTimeComponent/ProfileActiveTimeComponent';
import ProfilePaymentTypeComponent from 'Components/ProfilePaymentTypeComponent/ProfilePaymentTypeComponent';
import ProfileServicesProvidedComponent from 'Components/ProfileServicesProvidedComponent/ProfileServicesProvidedComponent';
import ProfileServicesDetailComponent from 'Components/ProfileServicesDetailComponent/ProfileServicesDetailComponent';
import ProfilePhotoComponent from 'Components/ProfilePhotoComponent/ProfilePhotoComponent';
import ProfileLinkComponent from 'Components/ProfileLinkComponent/ProfileLinkComponent';
import EmptyProfilePic from '../../Images/emptyprofilepic.svg';
import ProfilePicUpload from '../../Images/profilepicuploadicon.svg';

const ProProfileManagementPage = () => {
  const [name, setName] = useState('');
  const [picture, setPicture] = useState(null);
  const [imgData, setImgData] = useState(EmptyProfilePic);
  const onChangePicture = (e) => {
    if (e.target.files[0]) {
      //console.log('picture: ', e.target.files);
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        setImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };

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
      {/* <navBar/> */}
      <PpmContainer>
        <AllSection>
          <ProfileSection>
            <MyProfileBody>
              {/* 프로필 정보 */}
              <ProfileOverview>
                <ThumbContainer>
                  <Thumb>
                    <UserProfilePicture>
                      <img src={imgData} className='empty-profile-image' />
                      <ClickIcon>
                        <img
                          src={ProfilePicUpload}
                          className='profile-pic-upload'
                        />
                      </ClickIcon>
                      <IconClickInput>
                        <CustomFileInput
                          type='file'
                          label='Upload'
                          accept='image/jpg,image/jpeg,image, .png, .svg'
                          onChange={onChangePicture}
                        ></CustomFileInput>
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
                    <input
                      type='text'
                      placeholder='이름 또는 업체명을 입력해 주세요'
                      className='form-control-is-valid'
                      display='none'
                    ></input>
                    <small display='none'></small>
                    <div className='invalid-feedback'></div>
                  </div>
                </ProfileNameWrapper>
              </ProfileName>
              <ProfileMainService>
                <ProfileMainServiceComponent />
              </ProfileMainService>
              <ProfileIntroduction>
                <ProfileInfoComponent />
              </ProfileIntroduction>
              <ProfileAddress>
                <ProfileAddressComponent />
              </ProfileAddress>
              <ProfileMap>
                <ProfileMapComponent />
              </ProfileMap>
              <ProfileActiveTime>
                <ProfileActiveTimeComponent />
              </ProfileActiveTime>
              <ProfilePaymentType>
                <ProfilePaymentTypeComponent />
              </ProfilePaymentType>
              <ProfileServicesProvided>
                <ProfileServicesProvidedComponent />
              </ProfileServicesProvided>
              <ProfileServicesDetail>
                <ProfileServicesDetailComponent />
              </ProfileServicesDetail>
              <ProfilePhoto>
                <ProfilePhotoComponent />
              </ProfilePhoto>
              <ProfileLink>
                <ProfileLinkComponent />
              </ProfileLink>
            </MyProfileBody>
          </ProfileSection>
        </AllSection>
      </PpmContainer>
      <Footer/>
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
  .empty-profile-image {
    width: 100%;
  }
`;
const ClickIcon = styled.span`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 30px;
  height: 30px;
  .profile-upload-icon {
    width: 100%;
  }
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
  height: calc(48px);
`;
const CustomFileLabel = styled.label`
  left: 0;
  z-index: 1;
  height: 48px;
  font-weight: 400;
  background-color: #fff;
  border: 1px solid #e1e1e1;
  border-radius: 4px;
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
  border: 1px solid transparent;
  &:hover {
    background-color: #00a18d;
    border-color: #009481;
  }
`;
const ProfileName = styled.div`
  padding: 24px 0;
  border-bottom: 1px solid #f2f2f2;
  font-size: 0;
`;
const ProfileMainService = styled.div`
  padding: 24px 0;
  border-bottom: 1px solid #f2f2f2;
  font-size: 0;
`;
const ProfileIntroduction = styled.div`
  padding: 24px 0;
  border-bottom: 1px solid #f2f2f2;
  font-size: 0;
`;
const ProfileAddress = styled.div`
  padding: 24px 0;
  border-bottom: 1px solid #f2f2f2;
  font-size: 0;
`;
const ProfileMap = styled.div`
  padding: 24px 0;
  border-bottom: 1px solid #f2f2f2;
  font-size: 0;
`;
const ProfileActiveTime = styled.div`
  padding: 24px 0;
  border-bottom: 1px solid #f2f2f2;
  font-size: 0;
`;
const ProfilePaymentType = styled.div`
  padding: 24px 0;
  border-bottom: 1px solid #f2f2f2;
  font-size: 0;
`;
const ProfileServicesProvided = styled.div`
  padding: 24px 0;
  border-bottom: 1px solid #f2f2f2;
  font-size: 0;
`;
const ProfileServicesDetail = styled.div`
  padding: 24px 0;
  border-bottom: 1px solid #f2f2f2;
  font-size: 0;
`;
const ProfilePhoto = styled.div`
  padding: 24px 0;
  border-bottom: 1px solid #f2f2f2;
  font-size: 0;
`;
const ProfileLink = styled.div`
  padding: 24px 0;
  border-bottom: 1px solid #f2f2f2;
  font-size: 0;
`;
const ProfileReviewRating = styled.div`
  padding: 24px 0;
  border-bottom: 1px solid #f2f2f2;
  font-size: 0;
`;

// const  = styled.div`box-sizing: border-box;`;
