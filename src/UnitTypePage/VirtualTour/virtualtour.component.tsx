import React, { Component } from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import HomeButton from '../../Commons/Components/HomeButton';

interface IPathParams {
  unitType: string;
}

interface IProps extends RouteComponentProps<IPathParams> {
}

interface IState {
  unitTypeVTLink: string;
}

class VirtualTour extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state={
      unitTypeVTLink: ''
    }
  }

  componentDidMount() {
    if(this.props.match.params.unitType === 'studio') {
      this.setState({unitTypeVTLink: "https://my.matterport.com/show/?m=fjkNe2PMrqu"});
    } else if (this.props.match.params.unitType === '2br') {
      this.setState({unitTypeVTLink: "https://my.matterport.com/show/?m=e7c3yxgz9xm"});
    }
  }

  render() {
    return (
      <div className="page-wrapper unittype animate__animated animate__fadeIn">
        <div className="virtual-tour-wrapper">
          <iframe id="showcase"
            src={this.state.unitTypeVTLink}
            width="100%"
            height="100%"
            allow="xr-spatial-tracking"
            allowFullScreen />
        </div>
        <div className="page-contents virtualtour-home">
          <div className='top-menu'>
              <div className="topright-menu">
                  <HomeButton />
              </div>
          </div>
        </div>
      </div>
    );
  }
  
}

export default withRouter(VirtualTour);
