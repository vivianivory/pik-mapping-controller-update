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

  private loadPage(href?: string) {
    setTimeout(() => {
        window.location.assign(`${href}`)
    }, 500);
  }

  render() {
    return (
      <div className="page-wrapper map">
        <div className="fullpage-image-wrapper map">
          <img alt='map-legend' className="fullpage-image animate__animated animate__fadeIn" src={mapfullimg} />
        </div>
        <div className="page-contents">
          <div className='top-menu'>
            <div className="hanging-menu map-menu">
              <Button 
                id='logo' className="information-link" onClick={() => this.loadPage('/map2')} /> 
            </div>
            {/* <div className='map-menu'>
              <button className='animated-btn information-link'>
                <div className='span'></div>
                <div className='span'></div>
              </button>
            </div> */}
          </div>
          <NavigationButtons leftHref='/information' rightHref='/map2' disableExitButton/>
        </div>
      </div>
    );
  }
  
}

export default Map;
