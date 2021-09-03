import React, { Component } from 'react'
import  './jumbo.css';
import ParticlesBg from 'particles-bg';

export class Roadmap extends Component {
    render() {
        return (
            <div id='roadmapWrapper'>
                <div id='deskCob'>
                    <ParticlesBg color="#ff0000" num={100} type="cobweb" />
                </div>
                <div id='mobiCob'>
                    <ParticlesBg color="#ff0000" num={30} type="cobweb" />
                </div>
                <div id='roadmapHeading'>
                    <h2>ICO OFFERING</h2>
                    <p>We have big plans for the future</p>
                </div>
                <div id='roadmapInner'>
                    <p>19/08/2021 To 03/09/2021</p>
                    <p>Pre-Launching ICO (Initial Coin Offering) @ $0.5 USD</p>
                </div>
                <div id='roadmapInner'>
                    <p>04/09/2021 To 25/09/2021</p>
                    <p>Officially Launcing ICO @ $0.85 USD</p>
                </div>
                <div id='roadmapInner'>
                    <p>26/09/2021 To 15/10/2021</p>
                    <p>Post Launch @ $1.25 USD</p>
                </div>
                <div id='roadmapInner'>
                    <p>16/10/2021 To 05/11/2021</p>
                    <p>Coin Value @ $1.5 USD</p>
                </div>
            </div>
        )
    }
}

export default Roadmap
