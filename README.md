## `프로젝트 소개`

내 주변 숨은 고수 찾기 서비스 플랫폼인 [Soomgo](https://soomgo.com/) 클론 프로젝트

---

## `개발 인원 및 기간`

- 기간 : 20.07.06 ~ 20.07.17
- 팀 구성 : 프론트 3명 (홍정민, 진선경, 박창수), 벡엔드 3명 (이종헌, 김대휘, 박상영)
- Github
  - [프론트 Repo](https://github.com/wecode-bootcamp-korea/9-Chango-frontend.git)
  - [백엔드 Repo](https://github.com/wecode-bootcamp-korea/9-Chango-backend.git)
- 개발 담당
  - 홍정민 : 로그인 / 회원가입 / 고수 상세 프로필 페이지
  - 진선경 : Main 카테고리 / 일반 회원 고수 매칭 설문 페이지 , Nav
  - 박창수 : 고수 찾기 페이지 , 고수 디테일 페이지, Footer

---

## `사용 기술`

- JavaScript(ES6)
- React.js(Class형 컴포넌트, 함수형 컴포넌트(hook))
- SCSS / styled-component
- KaKao Map API / Kakao Login API
- Git, Github

---

## `구현 기능`

### 로그인/회원가입 페이지

- 정규식을 사용한 이메일 형식 확인
- 이메일 및 패스워드 양식 확인 기능(이메일 및 아이디 중복 확인)
- 카카오 소셜 로그인으로 토큰 받아오기 가능.
- 백엔드 api통신으로 받아온 JWT 토큰을 localStorage에 저장 가능

### 고수 상세 프로필 페이지

- react 함수형 컴포넌트로 state 관리, styled component 사용
- local 컴퓨터에서 웹사이트에 프로필 이미지 업로드 가능
- 고수 상세 정보 입력 후 저장 가능
- daum.postcode api로 우편번호 검색 후 주소 저장 가능
- kakao 지도 api를 이용하여 고수 활동 반경 변경 가능 (geocoder, circle 사용)
- useEffect Hooks로 카카오맵 기본 설정 세팅

### Main 카테고리 페이지

- Query parameters 이용한 카테고리 별 페이지 네이션 구현
- 카테고리별 인기 서비스, 전체 서비스 map 함수 사용하여 return
- react class형 컴포넌트 state 관리, fetch로 백엔드 api 통신

### 일반 유저 설문 페이지

- 점수에 따른 별점 표시 함수 구현
- switch case문을 통한 각 질문별 설문 Form 구현
- datepicker 사용해 달력 편집
- react hook / styled-component 사용 , axios를 사용해 백엔드 api 통신

### Footer / 고수 찾기 / 고수 디테일 페이지

- Class형 컴포넌트와 SASS를 이용해 고수 찾기 페이지, 고수 디테일 페이지 구현
- 함수형 컴포넌트와 styled-component를 이용해 Footer 구현
- 고수 찾기 페이지 modal 창 구현
- Back-End와 서버 통신/호출하여 map함수를 이용해 고수 찾기 페이지 및 디테일 페이지 구현
- 시간상 Back-End 쪽에서 주지 못한 데이터 Mock data로 만들어 구현
- Back-End 서버와 비동기 요청하는 방식인 fetch함수 사용

---

## `Demo`

[![Video Label](https://user-images.githubusercontent.com/58774316/88511721-4bf37a00-d020-11ea-969d-13958a89f874.png)](https://www.youtube.com/watch?v=tj2Ymo_sS9Q)
