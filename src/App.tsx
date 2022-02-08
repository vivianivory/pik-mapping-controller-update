import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Homepage/homepage.component';
import Map from './MapPage/map.component';
import Information from './InformationPage/information.component';
import InternalFacilities from './InternalFacilitiesPage/internalfacilities.component';
import ExternalFacilities from './ExternalFacilitiesPage/externalfacilities.component';
import UnitType from './UnitTypePage/unittype.component';
import Map2 from './MapPage/map2.component';
import VideoPage from './UnitTypePage/VideoPage/videopage.component';

interface IProps {

}

interface IState {

}

class App extends Component<IProps, IState> {
  render() {
    return (
      <div className="App">
        <Router>
            <Switch>
                <Route exact path='/' component={Homepage} />
                <Route path='/map' component={Map} />
                <Route path='/map2' component={Map2} />
                <Route path='/externalfacilities' component={ExternalFacilities}/>
                <Route path='/video/:pageType' component={VideoPage}/>
                <Route path='/internalfacilities' component={InternalFacilities}/>
                <Route path='/information' component={Information}/>
                <Route path='/unittype' component={UnitType} />
            </Switch>
        </Router>
      </div>
    );
  }
  
}

export default App;
