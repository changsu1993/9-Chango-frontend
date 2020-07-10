import React, { Component } from 'react';
import ProProfiles from 'Pages/Pro/ProProfile';
import Portal from '../../Components/Local/Local';
import LocalPortal from '../../Components/Local/LocalPortal';
import { pro_DB } from 'Pages/common';
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
      // isModalUp: true,
    };
  }

  componentDidMount() {
    fetch(`${pro_DB}/data/Pro.json`)
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          PersonData: res.data,
          totalPerson: res.total,
          ProProile: res.proprofile,
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

  render() {
    const { PersonData, totalPerson, ProProile, isModalUp, Local } = this.state;
    console.log(PersonData, totalPerson);
    return (
      <div className='Pro'>
        {/* {isModalUp && <div className='modal'>hello</div>} */}
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
            {PersonData.length > 0 &&
              PersonData.map((el, id) => {
                return (
                  <div className='category-btn-form' key={id}>
                    <button className='category-btn'>{el.name}</button>
                  </div>
                );
              })}
            <div className='pro-last-container'>
              <span>{totalPerson[0] && totalPerson[0].total}명의 고수</span>
              <select className='pro-review'>
                <option>리뷰순</option>
                <option>최근활동순</option>
                <option>평점순</option>
                <option>고용순</option>
              </select>
            </div>
          </div>
          <div className='proprofiles-container'>
            {ProProile.map((proprofile) => {
              return (
                <ProProfiles
                  id={proprofile.id}
                  profileImage={proprofile.profileImage}
                  companyName={proprofile.companyName}
                  reviewRate={proprofile.review_rate}
                  reviewCount={proprofile.review_count}
                  name={proprofile.name}
                  contents={proprofile.contents}
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
