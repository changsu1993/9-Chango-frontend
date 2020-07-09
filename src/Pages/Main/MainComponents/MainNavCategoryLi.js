import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MainNavCategoryLi extends Component {
  render() {
    const { navData, handleCurrentCate } = this.props;
    return (
      <li
        className='main-nav-category-li'
        key={navData.id}
        onClick={() => handleCurrentCate(navData.slug)}
      >
        <Link to={`/main/${navData.slug}`} style={{ textDecoration: 'none' }}>
          <div className='cate-wrap'>
            <img alt={navData.title} src={navData.icon_image} />
            <p>{navData.title}</p>
          </div>
        </Link>
      </li>
    );
  }
}
