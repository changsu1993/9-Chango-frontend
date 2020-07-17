import React, { Component } from 'react';
import MainNavInfo from './MainComponents/mainNavInfo';
import MainNavCategoryLi from './MainComponents/MainNavCategoryLi';
import MainPopularCard from './MainComponents/MainPopularCard';
import MainWholeCategoryLi from './MainComponents/MainWholeCategoryLi';
import { faSearch } from '@fortawesome/fontawesome-free-solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Main.scss';

export default class Main extends Component {
  state = {
    category: {},
    currentCate: '레슨',
  };

  handleMainData = () => {
    fetch(
      `http://10.58.7.120:8000/category?category=${this.state.currentCate}`
      // `http://localhost:3000/data/mainCategories${this.state.currentCate}.json`
    )
      .then((res) => res.json())
      .then((res) => this.setState({ category: res }));
    // .then((res) => this.setState({ category: res.category }));
  };

  componentDidMount() {
    this.handleMainData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.slug !== this.props.match.params.slug) {
      this.handleMainData();
    }
  }

  handleCurrentCate = (slug) => {
    this.setState({ currentCate: slug });
  };

  render() {
    const { category } = this.state;
    return (
      <main className='Main'>
        <header
          className='main-header'
          style={{
            backgroundImage: `url(${
              category.main_category && category.main_category.category_url
            })`,
          }}
        >
          <div className='main-back-color'></div>
          <div className='main-header-contents'>
            <h1 className='main-subject'>
              {category.main_category && category.main_category.category_name}
            </h1>
            <p className='main-subject-sub'>지금 숨고와 함께 시작해보세요</p>
            <div className='main-form-input'>
              <input
                type='text'
                placeholder='어떤 분야의 전문가를 찾으시나요?'
                autoComplete='off'
                className='input-main'
              />
              <button type='button' className='btn-main'>
                <FontAwesomeIcon icon={faSearch} /> 고수찾기
              </button>
            </div>
          </div>
        </header>
        {/* 메인페이지 내 nav 공통 */}
        <nav className='main-nav'>
          <ul className='main-nav-category'>
            {MainNavInfo.map((navData) => (
              <MainNavCategoryLi
                navData={navData}
                handleCurrentCate={this.handleCurrentCate}
                key={navData.id}
              />
            ))}
          </ul>
        </nav>
        <section className='main-popular-service'>
          <h2 className='main-popular-service-h2'>인기 서비스</h2>
          <div className='popular-card-wrap'>
            {category.popular_list &&
              category.popular_list.map((pService) => (
                <MainPopularCard
                  pService={pService}
                  key={pService.detail_category}
                />
              ))}
          </div>
        </section>
        <section className='main-whole-service'>
          <h2 className='main-whole-service-h2'>모든 서비스</h2>
          <ul className='whole-category'>
            {category.category_list &&
              category.category_list.map((wService) => (
                <MainWholeCategoryLi
                  wService={wService}
                  key={wService.sub_category}
                />
              ))}
          </ul>
        </section>
      </main>
    );
  }
}
