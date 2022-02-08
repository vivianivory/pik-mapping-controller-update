import { Square } from '@mui/icons-material';
import React, { Component } from 'react';

import map2fullimg from '../assets/pik2fullpage/maplegend2.png'
import HomeButton from '../Commons/Components/HomeButton';
import NavigationButtons from '../Commons/Components/NavigationButtons/navigationbuttons.component';

import './map.style.css';

interface IProps {

}

interface IState {

}

class Map2 extends Component<IProps, IState> {

  render() {
    return (
      <div className="page-wrapper map animate__animated animate__fadeIn">
        <div className="fullpage-image-wrapper map">
          <img className="fullpage-image" src={map2fullimg} />
        </div>
        <div className="page-contents">
            <NavigationButtons leftHref='/map' rightHref='/externalfacilities' disableExitButton/>
        </div>
      </div>
    );
  }
  
}

export default Map2;