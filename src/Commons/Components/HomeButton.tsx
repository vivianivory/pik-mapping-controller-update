import { Button } from "@mui/material";
import React, { Component, ReactNode } from "react";

import homebtnwhite from '../../assets/misc/homebtnwhite.png';

interface IProps {
    redirectUrl?: string;
}

interface IState {

}

class HomeButton extends Component <IProps, IState> {

    private goHome(href?: string) {
        setTimeout(() => {
            if(href) {
                window.location.assign(`${href}`)
            } else {
                window.location.assign(`/`)
            }
        }, 500);
    }

    render(): ReactNode {
        return (
            <div className='homebtn-icon'>
                <Button onClick={() => this.goHome(this.props.redirectUrl)}>
                        <img alt='home-button' src={homebtnwhite} />
                </Button>
            </div>
        )
    }
}

export default HomeButton;