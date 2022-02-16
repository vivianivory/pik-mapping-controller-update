import React, { Component } from 'react';
import { Switch, Route, withRouter, RouteComponentProps } from 'react-router-dom';

import unittypefullimg from '../assets/pik2fullpage/promoff.png';

import twobrbtn from '../assets/misc/unittype/2brbg.png';
import studiobtn from '../assets/misc/unittype/studiobg.png';
import twobrcropped from '../assets/misc/unittype/2brcropped.png';
import studiobtncropped from '../assets/misc/unittype/studiocropped.png';
import video2brbtnimg from '../assets/misc/unittype/video2brbtnimg.png';
import videostudiobtnimg from '../assets/misc/unittype/videostudiobtnimg.png';
import videotext from '../assets/misc/unittype/videotext.png';

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
                <img alt='unit type' className="fullpage-image" src={unittypefullimg} />
              </div>
              <div className="page-contents">
                <div className='top-menu unittype-gap'>
                    {/* <div className="topleft-menu ">
                        <HomeButton/>
                    </div> */}
                </div>
                <div className='middle-menu unittype-menus'>
                  <div className='unittype-links-wrapper studio-links-wrapper'>
                    <Button className="unittype-buttons main-buttons" onClick={() => this.loadPage(`${unittypepath}/details/studio`)}>
                      <div className="unittype-menu">
                        <img alt='studio' src={studiobtn} />
                      </div>
                      <img className='cropped-img' alt='studio-cropped' src={studiobtncropped} />
                      <div className='border-studio'>
                        <div className='cropped-img-border'/>
                      </div>
                      
                    </Button>
                    <div className="unittype-buttons unittype-video-buttons">
                      <div className="unittype-menu video-button">
                        <img alt='studio video' src={videostudiobtnimg} />
                      </div>
                      <Button className="studio-video-button-cropped" id='logo' onClick={() => this.loadPage(`${unittypepath}/video/studio`)}> 
                        <img className="video-text" alt='video-text' src={videotext} />
                      </Button>
                    </div>
                  </div>
                  <div className='unittype-links-wrapper 2br-links-wrapper'>
                    <Button className="unittype-buttons main-buttons" onClick={() => this.loadPage(`${unittypepath}/details/2br`)}>
                      <div className="unittype-menu">
                        <img alt='two bedroom' src={twobrbtn} />
                      </div>
                      <img className='cropped-img' alt='studio-cropped' src={twobrcropped} />
                      <div className='border-2br'>
                        <div className='cropped-img-border'/>
                      </div>
                    </Button>
                    <div className="unittype-buttons unittype-video-buttons" >
                      <div className="unittype-menu video-button">
                        <img alt='two bedroom video' src={video2brbtnimg} />
                      </div>
                      <Button className="twobr-video-button-cropped" id='logo' onClick={() => this.loadPage(`${unittypepath}/video/2br`)}>
                        <img className="video-text" alt='video-text' src={videotext} />
                      </Button>
                    </div>
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
