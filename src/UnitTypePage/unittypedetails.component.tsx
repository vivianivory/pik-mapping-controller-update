import React, { Component } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import HomeButton from "../Commons/Components/HomeButton";

import ffstudio from '../assets/pik2fullpage/ffstudio.png';
import ff2br from '../assets/pik2fullpage/ff2br.png';
import LeftRightButton from "../Commons/Components/LeftRightButton";
import NavigationButtons from "../Commons/Components/NavigationButtons/navigationbuttons.component";

interface IPathParams {
    unitType: string;
}

interface IProps extends RouteComponentProps<IPathParams> {
}

interface IState {
    ffdetailsimg: string;
}

class UnitTypeDetails extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            ffdetailsimg: ''
        }
    }

    componentDidMount() {
        console.log(this.props)
        if(this.props.match.params.unitType === 'studio') {
            this.setState({ffdetailsimg: ffstudio});
        } else if (this.props.match.params.unitType === '2br') {
            this.setState({ffdetailsimg: ff2br});
        }
    }

    render(): React.ReactNode {
        return (
            <div className="page-wrapper unittype animate__animated animate__fadeIn">
                <div className="fullpage-image-wrapper unittype">
                    <img className="fullpage-image" src={this.state.ffdetailsimg} />
                </div>
                <div className="page-contents">
                    <NavigationButtons
                        leftHref={`/unittype/details/${this.props.match.params.unitType}/smarthome`}
                        rightHref={`/unittype/details/${this.props.match.params.unitType}/photo`}
                        exitHref='/unittype'
                    />
                </div>
            </div>
        )
    }
}

export default withRouter(UnitTypeDetails);