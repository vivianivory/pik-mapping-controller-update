import React, { Component, ReactNode } from "react";
import { Hexagon } from "@mui/icons-material";

import homepagefullimg from "../assets/pik2fullpage/homepage.png";

import mapbtn from '../assets/homepagemenus/map.png';
import informationbtn from '../assets/homepagemenus/information.png';
import externalbtn from '../assets/homepagemenus/external.png';
import animationbtn from '../assets/homepagemenus/animation.png';
import internalbtn from '../assets/homepagemenus/internal.png';
import unittypebtn from '../assets/homepagemenus/unittype.png';


import "./homepage.style.css";
import { Button } from "@mui/material";

interface IProps {}

interface IState {}

class Homepage extends Component<IProps, IState> {

  private loadPage(href?: string) {
    setTimeout(() => {
        window.location.assign(`${href}`)
    }, 500);
  }

  render(): ReactNode {
    return (
      <div className="page-wrapper homepage animate__animated animate__fadeIn">
        <div className="fullpage-image-wrapper">
          <img className="fullpage-image" src={homepagefullimg} />
        </div>
        <div className="page-contents homepage-content">
          <div className="homepage-menus-wrapper">
            {/* <div className='homepage-menus-first-row'>
              <a href="/map">
                <Hexagon className="homepage-hexagon map-hexagon" />
              </a>
              <a href="/externalfacilities">
                <Hexagon className="homepage-hexagon external-hexagon" />
              </a>
              <a href="/internalfacilities">
                <Hexagon className="homepage-hexagon internal-hexagon" />
              </a>
            </div>
            <div className='homepage-menus-second-row'>
              <a href="/information">
                <Hexagon className="homepage-hexagon information-hexagon" />
              </a>
              <Hexagon className="homepage-hexagon blank-hexagon" />
              <a href="/unittype">
                <Hexagon className="homepage-hexagon unittype-hexagon" />
              </a>
            </div> */}
            <div className="homepage-menus-column first-column">
              <Button className="homepage-buttons" onClick={() => this.loadPage(`/map`)}>
                <div className="homepage-menu-bullet">
                  <img src={mapbtn} />
                </div>
              </Button>
              <Button className="homepage-buttons" onClick={() => this.loadPage(`/information`)}>
                <div className="homepage-menu-bullet">
                  <img src={informationbtn} />
                </div>
              </Button>
            </div>
            <div className="homepage-menus-column second-column">
              <Button className="homepage-buttons" onClick={() => this.loadPage(`/externalfacilities`)}>
                <div className="homepage-menu-bullet">
                  <img src={externalbtn} />
                </div>
              </Button>
              <Button className="homepage-buttons" onClick={() => this.loadPage(`/video/animation`)}>
                <div className="homepage-menu-bullet">
                  <img src={animationbtn} />
                </div>
              </Button>
            </div>
            <div className="homepage-menus-column third-column">
              <Button className="homepage-buttons" onClick={() => this.loadPage(`/internalfacilities`)}>
                <div className="homepage-menu-bullet">
                  <img src={internalbtn} />
                </div>
              </Button>
              <Button className="homepage-buttons" onClick={() => this.loadPage(`/unittype`)}>
                <div className="homepage-menu-bullet">
                  <img src={unittypebtn} />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Homepage;
