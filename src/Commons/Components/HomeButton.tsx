import { Button } from "@mui/material";
import React, { Component, ReactNode } from "react";

import homebtnwhite from '../../assets/misc/homebtnwhite.png';

interface IProps {

}

interface IState {

}

class HomeButton extends Component <IProps, IState> {
    constructor(props: IProps) {
        super(props)
    }

    private goHome() {
        setTimeout(() => {
            window.location.assign(`/`)
        }, 500);
    }

    render(): ReactNode {
        return (
            <div className='homebtn-icon'>
                <Button onClick={() => this.goHome()}>
                        <img src={homebtnwhite} />
                </Button>
            </div>
        )
    }
}

export default HomeButton;