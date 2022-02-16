import React, { Component } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import fotoffstudio from '../assets/pik2fullpage/fotoffstudio.png';
import fotoff2br from '../assets/pik2fullpage/fotoff2br.png';
import NavigationButtons from "../Commons/Components/NavigationButtons/navigationbuttons.component";

interface IPathParams {
    unitType: string;
}

interface IProps extends RouteComponentProps<IPathParams> {
}

interface IState {
    ffphoto: string;
}

class UnitTypePhoto extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            ffphoto: ''
        }
    }

    componentDidMount() {
        if(this.props.match.params.unitType === 'studio') {
            this.setState({ffphoto: fotoffstudio});
        } else if (this.props.match.params.unitType === '2br') {
            this.setState({ffphoto: fotoff2br});
        }
    }

    render(): React.ReactNode {
        return (
            <div className="page-wrapper unittype">
                <div className="fullpage-image-wrapper unittype">
                    <img alt='unit type' className="fullpage-image animate__animated animate__fadeIn" src={this.state.ffphoto} />
                </div>
                <div className="page-contents">
                    <NavigationButtons
                        leftHref={`/unittype/details/${this.props.match.params.unitType}`}
                        rightHref={`/unittype/details/${this.props.match.params.unitType}/smarthome`}
                        exitHref='/unittype'
                    />
                </div>
            </div>
        )
    }
}

export default withRouter(UnitTypePhoto);