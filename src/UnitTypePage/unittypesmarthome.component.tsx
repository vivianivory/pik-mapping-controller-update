import React, { Component } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import smarthome from '../assets/pik2fullpage/smarthome.png';

import NavigationButtons from "../Commons/Components/NavigationButtons/navigationbuttons.component";

interface IPathParams {
    unitType: string;
}

interface IProps extends RouteComponentProps<IPathParams> {
}

interface IState {
    unitType: string;
}

class UnitTypeSmartHome extends Component<IProps, IState> {

    render(): React.ReactNode {
        return (
            <div className="page-wrapper unittype">
                <div className="fullpage-image-wrapper unittype">
                    <img alt='unit type smarthome' className="fullpage-image animate__animated animate__fadeIn" src={smarthome} />
                </div>
                <div className="page-contents">
                    <NavigationButtons
                        leftHref={`/unittype/details/${this.props.match.params.unitType}/photo`}
                        rightHref={`/unittype/details/${this.props.match.params.unitType}`}
                        exitHref='/unittype'
                    />
                </div>
            </div>
        )
    }
}

export default withRouter(UnitTypeSmartHome);