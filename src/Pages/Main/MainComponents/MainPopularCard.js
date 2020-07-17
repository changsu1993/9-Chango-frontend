import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class MainPopularCard extends Component {
  render() {
    const { pService } = this.props;
    return (
      <div className='popular-card'>
        <Link to='/hire' style={{ textDecoration: 'none' }}>
          <div className='card-outline'>
            <div
              className='popular-card-img'
              style={{
                backgroundImage: `url(${pService.image_url})`,
              }}
            ></div>
            <h4 className='popular-card-title'>{pService.detail_category}</h4>
          </div>
        </Link>
      </div>
    );
  }
}
