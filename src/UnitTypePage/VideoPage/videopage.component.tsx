import React, { Component } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import HomeButton from "../../Commons/Components/HomeButton";

import studiovideo from "../../assets/videos/studio.mp4";
import twobrvideo from "../../assets/videos/twobr.mp4";

import animationvideo from "../../assets/videos/animation.mp4";
import NavigationButtons from "../../Commons/Components/NavigationButtons/navigationbuttons.component";

interface IPathParams {
  pageType: string;
}

interface IProps extends RouteComponentProps<IPathParams> {}

interface IState {
  pageTypeVideo: string;
}

class VideoPage extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      pageTypeVideo: "",
    };
  }

  componentDidMount() {
    if (this.props.match.params.pageType === "studio") {
      this.setState({ pageTypeVideo: studiovideo });
    } else if (this.props.match.params.pageType === "2br") {
      this.setState({ pageTypeVideo: twobrvideo });
    } else if (this.props.match.params.pageType === "animation") {
      this.setState({ pageTypeVideo: animationvideo });
    }
  }

  render() {
    return (
      <div className="page-wrapper unittype animate__animated animate__fadeIn">
        <div className="page-contents video-home">
          {/* <div
            className="top-menu"
            style={{ position: "absolute", zIndex: 5, right: 0 }}
          >
            <div className="topright-menu">
              {this.props.match.params.pageType === "animation" ? (
                <HomeButton redirectUrl="/" />
              ) : (
                <HomeButton redirectUrl="/unittype" />
              )}
            </div>
          </div> */}
          <div className="video-wrapper">
            <video width="100%" height="100%" autoPlay>
              <source src={this.state.pageTypeVideo} type="video/mp4" />
            </video>
          </div>
          <div className="videopage-navigation">
            <NavigationButtons disableLeftButton disableExitButton disableRightButton />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(VideoPage);
