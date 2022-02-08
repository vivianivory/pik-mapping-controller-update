import React, { Component } from 'react';
import { Button } from '@mui/material';

import mapfullimg from '../assets/pik2fullpage/maplegend.png'
import NavigationButtons from '../Commons/Components/NavigationButtons/navigationbuttons.component';

import './map.style.css';

interface IProps {

}

interface IState {

}

class Map extends Component<IProps, IState> {

  render() {
    return (
      <div className="page-wrapper map animate__animated animate__fadeIn">
        <div className="fullpage-image-wrapper map">
          <img alt='map-legend' className="fullpage-image" src={mapfullimg} />
        </div>
        <div className="page-contents">
          <div className='top-menu'>
            <div className="hanging-menu map-menu">
              <Button className="information-link" href='/map2' />
            </div>
          </div>
          <NavigationButtons leftHref='/information' rightHref='/map2' disableExitButton/>
        </div>
      </div>
    );
  }
  
}

export default Map;
