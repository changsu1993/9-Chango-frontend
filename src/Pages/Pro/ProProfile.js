import React, { Component } from 'react';
import StarPoint from './StarPointPro';
import 'Pages/Pro/ProProfile.scss';
import dot from '../../Images/dot.png';

class ProProfile extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const {
      id,
      companyName,
      reviewRate,
      reviewCount,
      name,
      contents,
    } = this.props;
    return (
      <div className='proprofile'>
        <button className='proprofile-btn'>
          <div className='proprofile-img'>
            <img src='' alt='사진' />
          </div>
          <div className='proprofile-main'>
            <p className='proprofile-name'>{id}</p>
            <p className='proprofile-introduce'>{companyName}</p>
            <div className='proprofile-star-main'>
              <ul className='proprofile-star'>
                <StarPoint pointNum={2.7} />
              </ul>
              <span className='proprofile-average'>{reviewRate}</span>
              <span className='proprofile-score'>{reviewCount}</span>
            </div>
            <div className='proprofile-review'>
              <img className='proprofile-dot' src={dot} alt='dot' />
              <span className='proprofile-review-name'>{name}</span>
              <blockquote className='proprofile-contents'>
                {contents}
              </blockquote>
            </div>
          </div>
        </button>
      </div>
    );
  }
}

export default ProProfile;
