import React, { Component } from 'react';
import { Switch, Route, withRouter, RouteComponentProps } from 'react-router-dom';

import { Square } from '@mui/icons-material';

import unittypefullimg from '../assets/pik2fullpage/promoff.png';

import twobrbtn from '../assets/misc/2brbtnimg.png';
import studiobtn from '../assets/misc/studiobtnimg.png';
import video2brbtnimg from '../assets/misc/video2brbtnimg.png';
import videostudiobtnimg from '../assets/misc/videostudiobtnimg.png';

import HomeButton from '../Commons/Components/HomeButton';

import UnitTypeDetails from './unittypedetails.component';
import UnitTypePhoto from './unittypephoto.component';
import VirtualTour from './VirtualTour/virtualtour.component';
import VideoPage from './VideoPage/videopage.component';
import UnitTypeSmartHome from './unittypesmarthome.component';

import './unittype.style.css';
import NavigationButtons from '../Commons/Components/NavigationButtons/navigationbuttons.component';
import { Button } from '@mui/material';

interface IPathParams {
}

interface IProps extends RouteComponentProps<IPathParams> {
}

interface IState {

}

class UnitType extends Component<IProps, IState> {

  private loadPage(href?: string) {
    setTimeout(() => {
        window.location.assign(`${href}`)
    }, 500);
  }

  render(): React.ReactNode {
    const unittypepath = this.props.match.path;

    return (
      <Switch>
        <Route exact path={unittypepath}> 
          <div className="page-wrapper unittype unittype-main animate__animated animate__fadeIn">
              <div className="fullpage-image-wrapper unittype">
                <img className="fullpage-image" src={unittypefullimg} />
              </div>
              <div className="page-contents">
                <div className='top-menu'>
                    <div className="topleft-menu">
                        <HomeButton/>
                    </div>
                </div>
                <div className='middle-menu unittype-menus'>
                  <div className='unittype-links-wrapper studio-links-wrapper'>
                    <Button className="unittype-buttons main-buttons" onClick={() => this.loadPage(`${unittypepath}/details/studio`)}>
                      <div className="unittype-menu">
                        <img src={studiobtn} />
                      </div>
                    </Button>
                    <Button className="unittype-buttons unittype-video-buttons" onClick={() => this.loadPage(`${unittypepath}/video/studio`)}>
                      <div className="unittype-menu">
                        <img src={videostudiobtnimg} />
                      </div>
                    </Button>
                    {/* <a className='details-link' href={`${unittypepath}/details/studio`}>
                      <Square className="studio-link-space" />
                    </a>
                    <a className='virtualtour-link' href={`${unittypepath}/virtualtour/studio`}>
                      <Square className="studiovt-link-space" />
                    </a> */}
                  </div>
                  <div className='unittype-links-wrapper 2br-links-wrapper'>
                    <Button className="unittype-buttons main-buttons" onClick={() => this.loadPage(`${unittypepath}/details/2br`)}>
                      <div className="unittype-menu">
                        <img src={twobrbtn} />
                      </div>
                    </Button>
                    <Button className="unittype-buttons unittype-video-buttons" onClick={() => this.loadPage(`${unittypepath}/video/2br`)}>
                      <div className="unittype-menu">
                        <img src={video2brbtnimg} />
                      </div>
                    </Button>
                    {/* <a className='details-link' href={`${unittypepath}/details/2br`}>
                      <Square className="2br-link-space" />
                    </a>
                    <a className='virtualtour-link' href={`${unittypepath}/virtualtour/2br`}>
                      <Square className="2brvt-link-space" />
                    </a> */}
                  </div>
                </div>
                <NavigationButtons disableLeftButton disableExitButton disableRightButton />
              </div>
          </div>
        </Route>
        <Route exact path={`${unittypepath}/details/:unitType`} component={UnitTypeDetails}/>
        <Route path={`${unittypepath}/details/:unitType/photo`} component={UnitTypePhoto}/>
        <Route path={`${unittypepath}/virtualtour/:unitType`} component={VirtualTour}/>
        <Route path={`${unittypepath}/video/:pageType`} component={VideoPage}/>
        <Route path={`${unittypepath}/details/:unitType/smarthome`} component={UnitTypeSmartHome} />
      </Switch>
    );
  }
  
}

export default withRouter(UnitType);
