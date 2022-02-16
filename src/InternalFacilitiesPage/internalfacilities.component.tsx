import React, { Component } from 'react';
import { Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';

import internalfullimg from '../assets/pik2fullpage/internalfacilities.png';

import InternalFacilitiesDetail from './internalfacilitiesdetail.component';

import './internalfacilities.style.css';
import NavigationButtons from '../Commons/Components/NavigationButtons/navigationbuttons.component';
import { Button } from '@mui/material';

interface IPathParams {
}

interface IProps extends RouteComponentProps<IPathParams> {
}

interface IState {

}

class InternalFacilities extends Component<IProps, IState> {

  render(): React.ReactNode {
    const internalpath = this.props.match.path;

    return (
      <Switch>
        <Route exact path={internalpath}>
          <div className="page-wrapper internal">
            <div className="fullpage-image-wrapper internalfacilities">
              <img alt='internal' className="fullpage-image animate__animated animate__fadeIn" src={internalfullimg} />
            </div>
            <div className="page-contents">
              <div className='middle-menu internal-menu'>
                <div className='internal-links-wrapper'>
                  <a className='internal-link tradecenter-link' href={`${internalpath}/tradecenter`}>
                    <Button className="tradecenter-link-space" id='logo-slower'/>
                  </a>
                  <a className='internal-link clubhouse-link' href={`${internalpath}/clubhouse`}>
                    <Button className="clubhouse-link-space" id='logo-slower'/>
                  </a>
                  <a className='internal-link galleryoftokyo-link' href={`${internalpath}/fargallery`}>
                    <Button className="galleryoftokyo-link-space" id='logo-slower'/>
                  </a>
                </div>
              </div>
              <NavigationButtons disableLeftButton disableExitButton disableRightButton />
            </div>
          </div>
        </Route>
        <Route path={`${internalpath}/:detailName`} component={InternalFacilitiesDetail}/>
      </Switch>
      
    );
  }
  
}

export default withRouter(InternalFacilities);
