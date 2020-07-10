import React, { Component } from 'react';
import { pro_DB } from 'Pages/common';
import './Local.scss';
import localimg from '../../Images/local.png';
class Local extends Component {
  constructor() {
    super();
    this.state = {
      local: [],
    };
  }

  componentDidMount() {
    fetch(`${pro_DB}/data/ProLocal.json`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        this.setState({
          local: res.items,
        });
      });
  }

  render() {
    const { onClose } = this.props;
    const { local } = this.state;
    return (
      <div className='Local'>
        <div className='local-container'>
          <div className='local-main'>
            <button type='button' className='local-btn' onClick={onClose}>
              X
            </button>
            <div className='local-set'>
              <img
                className='local-img'
                src={localimg}
                alt='지역로고'
                width='20px'
                height='25px'
              />
              <span className='local-select'>지역 선택</span>
            </div>
            <div className='local-menu'>
              <ul>
                {local.length > 0 &&
                  local.map((el) => {
                    return (
                      <li className='local-list' key={el.name}>
                        {el.name}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Local;
