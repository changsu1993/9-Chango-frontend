import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MainWholeCategoryLi extends Component {
  render() {
    const { wService } = this.props;
    return (
      <li className='whole-category-li'>
        <h3>{wService.sub_category}</h3>
        <ul>
          {wService.detail_category.map((elData) => {
            return (
              <li key={elData}>
                <Link
                  to='/hire'
                  style={{
                    textDecoration: 'none',
                    color: 'var(--gray-dark)',
                  }}
                >
                  {elData}
                </Link>
              </li>
            );
          })}
        </ul>
      </li>
    );
  }
}
