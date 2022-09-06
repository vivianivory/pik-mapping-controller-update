import React, { Component } from "react";

import informationfullimg from "../assets/pik2fullpage/besttownship.jpg";

import "./information.style.css";
import NavigationButtons from "../Commons/Components/NavigationButtons/navigationbuttons.component";

interface IProps {}

interface IState {}

class Information extends Component<IProps, IState> {
  render() {
    return (
      <div className="page-wrapper information">
        <div className="fullpage-image-wrapper information">
          <img
            alt="information"
            className="fullpage-image animate__animated animate__fadeIn"
            src={informationfullimg}
          />
        </div>
        <div className="page-contents topbottom-menu-wrapper info-menus-wrapper">
          <NavigationButtons
            disableLeftButton
            disableExitButton
            rightHref="/map"
          />
        </div>
      </div>
    );
  }
}

export default Information;
