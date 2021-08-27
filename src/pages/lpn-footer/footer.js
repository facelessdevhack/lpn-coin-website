import React, { Component } from 'react'
import {Typography} from '@material-ui/core';
import {
    BrowserView,
    TabletView,
    MobileOnlyView
} from 'react-device-detect';
export class Footer extends Component {
    render() {
        return (
            <div>
                <Typography variant='p' style={{color: 'white', fontSize: '2.5vw'}}>All Rights are reserved By Amazo Group Organization (UAE).</Typography>
            </div>
        )
    }
}

export default Footer
