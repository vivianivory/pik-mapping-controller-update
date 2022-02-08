import React, { Component } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import HomeButton from "../Commons/Components/HomeButton";

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
    constructor(props: IProps) {
        super(props);
    }

    render(): React.ReactNode {
        return (
            <div className="page-wrapper unittype animate__animated animate__fadeIn">
                <div className="fullpage-image-wrapper unittype">
                    <img className="fullpage-image" src={smarthome} />
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