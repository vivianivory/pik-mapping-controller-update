import React, { Component } from 'react';
import { Switch, Route, RouteComponentProps, withRouter } from 'react-router-dom';
import { Circle } from '@mui/icons-material';

import bullet1 from '../assets/externalbullets/1.png';
import bullet2 from '../assets/externalbullets/2.png';
import bullet3 from '../assets/externalbullets/3.png';
import bullet4 from '../assets/externalbullets/4.png';
import bullet5 from '../assets/externalbullets/5.png';
import bullet6 from '../assets/externalbullets/6.png';
import bullet7 from '../assets/externalbullets/7.png';
import bullet8 from '../assets/externalbullets/8.png';
import bullet9 from '../assets/externalbullets/9.png';
import bullet10 from '../assets/externalbullets/10.png';
import bulletprasmul from '../assets/externalbullets/prasmul.png';


import externalfullimg from '../assets/pik2fullpage/externalfacilities.png';

import ExternalFacilitiesDetail from './externalfacilitiesdetail.component';

import './externalfacilities.style.css';
import NavigationButtons from '../Commons/Components/NavigationButtons/navigationbuttons.component';
import { Button } from '@mui/material';

interface IPathParams {
}

interface IProps extends RouteComponentProps<IPathParams> {
}

interface IState {

}

class ExternalFacilities extends Component<IProps, IState> {

  private loadPage(href?: string) {
    setTimeout(() => {
        window.location.assign(`${href}`)
    }, 500);
  }

  private loadPagewithAnimation(href?: string) {
    setTimeout(() => {
        window.location.assign(`${href}`)
    }, 1000);
  }

  render(): React.ReactNode {
    const externalpath = this.props.match.path;

    return (
      <Switch>
        <Route exact path={externalpath}>
          <div className="page-wrapper external animate__animated animate__fadeIn">
            <div className="fullpage-image-wrapper externalfacilities">
              <img alt='external' className="fullpage-image" src={externalfullimg} />
            </div>
            <div className="page-contents">
              <div className='top-menu'>
                <div className="tophanging-menu external-menu-bullet">
                  <Button id='logo-softer' className="main-circle-button" onClick={() => this.loadPage(`/internalfacilities`)}>
                      <Circle className="main-circle"/>
                  </Button>
                </div>
              </div>
              <div className='middle-menu external-menus'>
                <div className="external-left-group-menus">
                  <div className="three-menus-column">
                    <Button className="external-buttons click-effect" onClick={() => this.loadPagewithAnimation(`${externalpath}/details/1`)}>
                      <div className="external-menu-bullet">
                        <img alt='bullet1' src={bullet1} />
                      </div>
                    </Button>
                    <div className="external-menu-bullet">
                      <Button className="external-buttons click-effect" onClick={() => this.loadPagewithAnimation(`${externalpath}/details/2`)}>
                        <div className="external-menu-bullet">
                          <img alt='bullet2' src={bullet2} />
                        </div>
                      </Button>
                    </div>
                    <div className="external-menu-bullet">
                      <Button className="external-buttons click-effect" onClick={() => this.loadPagewithAnimation(`${externalpath}/details/3`)}>
                        <div className="external-menu-bullet">
                          <img alt='bullet3' src={bullet3} />
                        </div>
                      </Button>
                    </div>
                  </div>
                  <div className="three-int-menus-column prasmul">
                    <div className="external-menu-bullet prasmul">
                      <div className="external-menu-bullet prasmul">
                        <img alt='bulletprasmul' src={bulletprasmul} />
                      </div>
                    </div>
                    <div className="external-menu-bullet">
                      <Button className="external-buttons click-effect" onClick={() => this.loadPagewithAnimation(`${externalpath}/details/4`)}>
                        <div className="external-menu-bullet">
                          <img alt='bullet4' src={bullet4} />
                        </div>
                      </Button>
                    </div>
                    <div className="external-menu-bullet">
                      <Button className="external-buttons click-effect" onClick={() => this.loadPagewithAnimation(`${externalpath}/details/5`)}>
                        <div className="external-menu-bullet">
                          <img alt='bullet5' src={bullet5} />
                        </div>
                      </Button>
                    </div>
                    
                  </div>
                </div>
                <div className="external-right-group-menus">
                  <div className="two-menus-column">
                    <div className="external-menu-bullet">
                      <Button className="external-buttons click-effect" onClick={() => this.loadPagewithAnimation(`${externalpath}/details/6`)}>
                        <div className="external-menu-bullet">
                          <img alt='bullet6' src={bullet6} />
                        </div>
                      </Button>
                    </div>
                    <div className="external-menu-bullet">
                      <Button className="external-buttons click-effect" onClick={() => this.loadPagewithAnimation(`${externalpath}/details/7`)}>
                        <div className="external-menu-bullet">
                          <img alt='bullet7' src={bullet7} />
                        </div>
                      </Button>
                    </div>
                  </div>
                  <div className="three-menus-column">
                    <div className="external-menu-bullet">
                      <Button className="external-buttons click-effect" onClick={() => this.loadPagewithAnimation(`${externalpath}/details/8`)}>
                        <div className="external-menu-bullet">
                          <img alt='bullet8' src={bullet8} />
                        </div>
                      </Button>
                    </div>
                    <div className="external-menu-bullet">
                      <Button className="external-buttons click-effect" onClick={() => this.loadPagewithAnimation(`${externalpath}/details/9`)}>
                        <div className="external-menu-bullet">
                          <img alt='bullet9' src={bullet9} />
                        </div>
                      </Button>
                    </div>
                    <div className="external-menu-bullet">
                      <Button className="external-buttons click-effect" onClick={() => this.loadPagewithAnimation(`${externalpath}/details/10`)}>
                        <div className="external-menu-bullet">
                          <img alt='bullet10' src={bullet10} />
                        </div>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <NavigationButtons disableLeftButton disableExitButton disableRightButton />
            </div>
          </div>
        </Route>
        <Route path={`${externalpath}/details/:detailIndex`} component={ExternalFacilitiesDetail}/>
      </Switch>
    );
  }
  
}

export default withRouter(ExternalFacilities);
