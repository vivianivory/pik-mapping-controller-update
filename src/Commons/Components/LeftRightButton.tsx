import React, { Component } from 'react';

import leftbtn from '../../assets/misc/arrowleft.png';
import rightbtn from '../../assets/misc/arrowright.png';

interface IProps {
    leftHref?: string;
    rightHref?: string;
    disableLeftButton?: boolean;
    disableRightButton?: boolean;
}

interface IState {
}

class LeftRightButton extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
        <div className="leftrightbtn-wrapper">
            <a href={this.props.leftHref} style={this.props.disableLeftButton ? {opacity: 0} : {opacity: 1}}>
                <img src={leftbtn} className="left-icon"/>
            </a>
            <a href={this.props.rightHref} style={this.props.disableRightButton ? {opacity: 0} : {opacity: 1}}>
                <img src={rightbtn} className="right-icon"/>
            </a>
        </div>
        );
    }
  
}

export default LeftRightButton;
