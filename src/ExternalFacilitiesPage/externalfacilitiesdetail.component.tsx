import React, { Component } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

// import detailimg1 from '../assets/pik2fullpage/kampungseafood.png';
// import detailimg2 from '../assets/pik2fullpage/shibuya.png';
// import detailimg3 from '../assets/pik2fullpage/lariviera.png';
// import detailimg4 from '../assets/pik2fullpage/northpoint.png';
// import detailimg5 from '../assets/pik2fullpage/tokyomarket.png';

// import detailimg6 from '../assets/pik2fullpage/sekolah.png';
// import detailimg7 from '../assets/pik2fullpage/supermarketkhastiongkok.png';
// import detailimg8 from '../assets/pik2fullpage/asiantown.png';
// import detailimg9 from '../assets/pik2fullpage/tiongbahrumarket.png';
// import detailimg10 from '../assets/pik2fullpage/grandshanghai.png';

// import backbtn from '../assets/misc/backbtn.png';

// import LeftRightButton from '../Commons/Components/LeftRightButton';
import NavigationButtons from "../Commons/Components/NavigationButtons/navigationbuttons.component";

interface IPathParams {
  detailIndex: string;
}

interface IProps extends RouteComponentProps<IPathParams> {}

interface IState {
  leftBtnLink: string;
  rightBtnLink: string;

  externalDetailImg: string;
  detailNamesArray: string[];
}

class ExternalFacilitiesDetail extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      leftBtnLink: "",
      rightBtnLink: "",

      externalDetailImg: "",

      detailNamesArray: [
        "kampungseafood",
        "shibuya",
        "lariviera",
        "tokyomarket",
        "northpoint",
        "sekolah",
        "supermarketkhastiongkok",
        "asiantown",
        "tiongbahrumarket",
        "grandshanghai",
      ],
    };
  }

  async componentDidMount() {
    await import(
      `../assets/pik2fullpage/${
        this.state.detailNamesArray[
          Number(this.props.match.params.detailIndex) - 1
        ]
      }.png`
    ).then((image) => {
      this.setState({ externalDetailImg: image.default });
    });

    this.setState({
      leftBtnLink:
        this.state.detailNamesArray[
          Number(this.props.match.params.detailIndex) - 2
        ],
      rightBtnLink:
        this.state.detailNamesArray[
          Number(this.props.match.params.detailIndex)
        ],
    });
  }

  private getLeftHref(): number {
    if (Number(this.props.match.params.detailIndex) - 1 < 1) {
      return 10;
    } else {
      return Number(this.props.match.params.detailIndex) - 1;
    }
  }

  private getRightHref(): number {
    if (Number(this.props.match.params.detailIndex) + 1 > 10) {
      return 1;
    } else {
      return Number(this.props.match.params.detailIndex) + 1;
    }
  }

  render(): React.ReactNode {
    return (
      <div className="page-wrapper external-detail">
        <div className="fullpage-image-wrapper externalfacilities-detail">
          <img
            alt="external detail"
            className="fullpage-image animate__animated animate__fadeIn"
            src={this.state.externalDetailImg}
          />
        </div>
        <div className="page-contents">
          <NavigationButtons
            leftHref={`${this.props.match.url.slice(
              0,
              this.props.match.url.lastIndexOf("/")
            )}/${this.getLeftHref()}`}
            rightHref={`${this.props.match.url.slice(
              0,
              this.props.match.url.lastIndexOf("/")
            )}/${this.getRightHref()}`}
            exitHref={this.props.match.url.slice(
              0,
              this.props.match.url.lastIndexOf("/details")
            )}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(ExternalFacilitiesDetail);
