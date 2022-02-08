import React, { Component } from 'react';

import informationfullimg from '../assets/pik2fullpage/besttownship.png';
import playvideoimg from '../assets/misc/playvideobtn.png';
import nextbtnimg from '../assets/misc/nextbtn.png';

import './information.style.css';
import NavigationButtons from '../Commons/Components/NavigationButtons/navigationbuttons.component';

interface IProps {

}

interface IState {

}

class Information extends Component<IProps, IState> {

  render() {
    return (
      <div className="page-wrapper information animate__animated animate__fadeIn">
        <div className="fullpage-image-wrapper information">
          <img className="fullpage-image" src={informationfullimg} />
        </div>
        <div className="page-contents topbottom-menu-wrapper info-menus-wrapper">
          <NavigationButtons disableLeftButton disableExitButton rightHref='/map' />
        </div>
      </div>
    );
  }
  
}

export default Information;
