import React, { Component } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import helpnbeauty from "../assets/pik2fullpage/helpnbeauty.jpg";
import clubhouse from "../assets/pik2fullpage/pikfit.jpg";
import fargallery from "../assets/pik2fullpage/galleryjauh.jpg";
import neargallery from "../assets/pik2fullpage/gallerydekat.png";

import "./internalfacilities.style.css";
import NavigationButtons from "../Commons/Components/NavigationButtons/navigationbuttons.component";

interface IPathParams {
  detailName: string;
}

interface IProps extends RouteComponentProps<IPathParams> {}

interface IState {
  internalDetailImg: string;
}

class InternalFacilitiesDetail extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      internalDetailImg: "",
    };
  }

  componentDidMount() {
    if (this.props.match.params.detailName === "helpnbeauty") {
      this.setState({ internalDetailImg: helpnbeauty });
    } else if (this.props.match.params.detailName === "clubhouse") {
      this.setState({ internalDetailImg: clubhouse });
    } else if (this.props.match.params.detailName === "fargallery") {
      this.setState({ internalDetailImg: fargallery });
    } else if (this.props.match.params.detailName === "neargallery") {
      this.setState({ internalDetailImg: neargallery });
    }
  }

  render(): React.ReactNode {
    return (
      <div className="page-wrapper internal-detail">
        <div className="fullpage-image-wrapper internalfacilities-detail">
          <img
            alt="internal"
            className="fullpage-image animate__animated animate__fadeIn"
            src={this.state.internalDetailImg}
          />
        </div>
        <div className="page-contents">
          {/* <div className='top-menu internal-detail-top-menu'>
                        <div className="topright-menu">
                            <a className='closedetail-link' href={this.props.match.url.slice(0, this.props.match.url.lastIndexOf('/'))}>
                                <img src={closebtn} style={{width: '3rem'}}/>
                            </a>
                        </div>
                    </div> */}
          {/* <div className='bottom-menu'>
                        <div className='bottomright-menu'>
                            {this.props.match.params.detailName === 'fargallery' ? 
                                <LeftRightButton disableLeftButton rightHref={`${this.props.match.url.slice(0, this.props.match.url.lastIndexOf('/'))}/neargallery`}/>
                            : this.props.match.params.detailName === 'neargallery' ? 
                                <LeftRightButton disableRightButton leftHref={`${this.props.match.url.slice(0, this.props.match.url.lastIndexOf('/'))}/fargallery`}/>
                            : null}
                        </div>
                    </div> */}
          {this.props.match.params.detailName === "fargallery" ? (
            <NavigationButtons
              disableLeftButton
              rightHref={`${this.props.match.url.slice(
                0,
                this.props.match.url.lastIndexOf("/")
              )}/neargallery`}
              exitHref={this.props.match.url.slice(
                0,
                this.props.match.url.lastIndexOf("/")
              )}
            />
          ) : this.props.match.params.detailName === "neargallery" ? (
            <NavigationButtons
              disableRightButton
              leftHref={`${this.props.match.url.slice(
                0,
                this.props.match.url.lastIndexOf("/")
              )}/fargallery`}
              exitHref={this.props.match.url.slice(
                0,
                this.props.match.url.lastIndexOf("/")
              )}
            />
          ) : this.props.match.params.detailName === "helpnbeauty" ||
            this.props.match.params.detailName === "clubhouse" ? (
            <NavigationButtons
              disableLeftButton
              disableRightButton
              exitHref={this.props.match.url.slice(
                0,
                this.props.match.url.lastIndexOf("/")
              )}
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default withRouter(InternalFacilitiesDetail);
