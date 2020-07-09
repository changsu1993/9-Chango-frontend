import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MainPopularCard extends Component {
  render() {
    const { pService } = this.props;
    return (
      <div className='popular-card' key={pService.pop_title}>
        <Link to='/main/레슨' style={{ textDecoration: 'none' }}>
          <div className='card-outline'>
            <div
              className='popular-card-img'
              style={{
                backgroundImage: `url(${pService.pop_img})`,
              }}
            ></div>
            <h4 className='popular-card-title'>{pService.pop_title}</h4>
          </div>
        </Link>
      </div>
    );
  }
}
