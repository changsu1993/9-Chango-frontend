import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MainWholeCategoryLi extends Component {
  render() {
    const { wService } = this.props;
    return (
      <li className='whole-category-li' key={wService.list_head}>
        <h3>{wService.list_head}</h3>
        <ul>
          {wService.list_el.map((elData) => {
            return (
              <li key={elData}>
                <Link
                  to='/레슨'
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
