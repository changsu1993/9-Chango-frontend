import React, { Component } from 'react';
import ProProfiles from 'Pages/Pro/ProProfile';
import Portal from '../../Components/Local/Local';
import LocalPortal from '../../Components/Local/LocalPortal';
import { pro_DB } from 'Pages/common';
import ProMap from './ProMap';
import search from '../../Images/search.png';
import map from '../../Images/map.png';
import category from '../../Images/category.png';
import 'Pages/Pro/Pro.scss';

class Pro extends Component {
  constructor() {
    super();
    this.state = {
      PersonData: [],
      totalPerson: [],
      ProProile: [],
      Local: false,
      searchBox: false,
    };
  }

  componentDidMount() {
    fetch('http://10.58.2.73:8000/account/prolist')
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          // PersonData: res.data,
          // totalPerson: res.total,
          ProProile: res.pro_list,
        })
      );
  }

  handleOpenLocal = () => {
    this.setState({
      Local: true,
    });
  };

  handleCloseLocal = () => {
    this.setState({
      Local: false,
    });
  };

  inputSearchModal = () => {
    this.setState({ searchBox: !this.state.searchBox });
  };

  inputCloseModal = () => {
    this.setState({ searchBox: false });
  };

  render() {
    const { PersonData, ProProile, Local, searchBox } = this.state;
    return (
      <div className='Pro'>
        <div className='pro-main'>
          <div className='pro-title'>고수찾기</div>
          <div className='pro-category'>
            <span>숨고</span>
            <span> > </span>
            <span>지역</span>
            <span>,</span>
            <span>카테고리</span>
          </div>
          <div className='pro-search-container'>
            <div className='pro-search-main'>
              <input
                onClick={this.inputSearchModal}
                className='pro-search'
                placeholder='고수,지역,서비스를 검색해보세요'
              />
              <img
                className='pro-search-img'
                src={search}
                alt='search'
                height='17px'
                width='15px'
              />
              <button className='pro-local' onClick={this.handleOpenLocal}>
                지역
              </button>
              <img
                className='pro-map-img'
                src={map}
                alt='search'
                height='20px'
                width='15px'
              />
              <button className='pro-search-category'>카테고리</button>
              <img
                className='pro-category-img'
                src={category}
                alt='search'
                height='15px'
                width='15px'
              />
            </div>
            {ProMap.data.map((btnlist) => {
              return (
                <div className='category-btn-form'>
                  <button className='category-btn'>{btnlist.name}</button>
                </div>
              );
            })}
            <div className='pro-last-container'>
              <span>{ProProile && ProProile.length}명의 고수</span>
              <select className='pro-review'>
                <option>리뷰순</option>
                <option>최근활동순</option>
                <option>평점순</option>
                <option>고용순</option>
              </select>
            </div>
            <div
              className={
                searchBox ? 'pro-search-modal' : 'pro-search-modal-not-active'
              }
            >
              <p>인기 키워드</p>
              {ProMap.data.map((btnlist) => {
                return (
                  <button className='pro-search-modal-style'>
                    {btnlist.name}
                  </button>
                );
              })}
              <button
                className='pro-search-cancel'
                onClick={this.inputCloseModal}
              >
                취소
              </button>
            </div>
          </div>
          <div className='proprofiles-container'>
            {ProProile.map((proprofile) => {
              return (
                <ProProfiles
                  proId={proprofile.provider_id}
                  id={proprofile.provider_name}
                  profileImage={
                    proprofile.profile_img && proprofile.profile_img.image_url
                  }
                  companyName={proprofile.introduce}
                  name={proprofile.provider_name}
                  contents={proprofile.introduce}
                />
              );
            })}
            {Local && (
              <LocalPortal>
                <Portal onClose={this.handleCloseLocal} />
              </LocalPortal>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Pro;
