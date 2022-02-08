import React, { Component } from 'react';

import leftnavbtn from '../../../assets/misc/leftbtn.png';
import homenavbtn from '../../../assets/misc/homebtn.png';
import exitnavbtn from '../../../assets/misc/exitbtn.png';
import rightnavbtn from '../../../assets/misc/rightbtn.png';

import './navigationbuttons.style.css';
import { Button, createTheme, IconButton, PaletteColorOptions } from '@mui/material';

interface IProps {
    leftHref?: string;
    exitHref?: string;
    rightHref?: string;
    disableLeftButton?: boolean;
    disableHomeButton?: boolean;
    disableExitButton?: boolean;
    disableRightButton?: boolean;
}

interface IState {
}

class NavigationButtons extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
        }
    }

    private loadPage(href?: string) {
        setTimeout(() => {
            window.location.assign(`${href}`)
        }, 500);
    }

    render(): React.ReactNode {
        return (
        <div className='nav-wrapper'>
            {this.props.disableLeftButton ? 
                <img alt='disabled-left-nav' src={leftnavbtn} className='disabled-nav'/> 
            : 
                <Button onClick={() => this.loadPage(this.props.leftHref)}>
                    <img alt='left-nav' src={leftnavbtn} />
                </Button>
            }
            {this.props.disableHomeButton ? 
                <img alt='disabled-home-nav' src={homenavbtn} className='disabled-nav'/> 
            : 
                <Button onClick={() => this.loadPage('/')}>
                    <img alt='home-nav' src={homenavbtn} />
                </Button>
            }
            {this.props.disableExitButton ? 
                <img alt='disabled-exit-nav' src={exitnavbtn} className='disabled-nav'/>
            : 
                <Button onClick={() => this.loadPage(this.props.exitHref)}>
                    <img alt='exit-nav' src={exitnavbtn} />
                </Button>
            }
            {this.props.disableRightButton ? 
                <img alt='disabled-right-nav' src={rightnavbtn} className='disabled-nav'/>
            : 
                <Button onClick={() => this.loadPage(this.props.rightHref)}>
                    <img alt='right-nav' src={rightnavbtn} />
                </Button>
            }
        </div>
        );
    }
  
}

export default NavigationButtons;
