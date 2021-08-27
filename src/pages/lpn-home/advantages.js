import React, { Component } from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import bgTwo from '../../assets/bgtwo.jpg'

export class Roadmap extends Component {
    render() {
        return (
            <>
                <BrowserView>
                    <div style={{height: '100vh'}}>
                        <img src={bgTwo} id='bgSectionTwo' />
                        {/* <div id='tokenSaleDes'>
                            <h1>What is a Token Sale?</h1>
                            <p>A token sale, sometimes referred to as an ICO, is form of crowd funding for digital currency-related projects. In token sales, purch - asers buy units of a new currency in exchange for legal tender or other digital currencies, such as Bitcoin or Ethereum.</p>
                        </div> */}
                        <div id='tokenTitleWrapper'>
                            <h1 id='tokenHeading'>ICO OFFERING</h1>
                            <p id='tokenSubtitle'>We have big plans for the future</p>
                        </div>
                        <div id='roadmapWrap'>
                            <div id='roadmapPoints'>
                                <div class="roadmapTextWrapper">
                                        <div class="roadmapSingleLine">
                                            <div class="roadmapFirstText">19/08/2021 To 02/09/2021<span class="tm-gr-ball"></span></div>
                                            <div class="roadmapSecondText">Pre-Launching ICO (Initial Coin Offering) @ $0.5 USD</div>
                                        </div>
                                        <div class="roadmapSingleLine">
                                            <div class="roadmapFirstText">03/09/2021 To 17/09/2021<span class="tm-gr-ball"></span></div>
                                            <div class="roadmapSecondText">Officially Launcing ICO @ $0.9 USD</div>
                                        </div>
                                        <div class="roadmapSingleLine">
                                            <div class="roadmapFirstText">18/09/2021 To 02/10/2021<span class="tm-gr-ball"></span></div>
                                            <div class="roadmapSecondText">Post Launch @ $1.4 USD</div>
                                        </div>
                                        {/* <div class="roadmapSingleLine">
                                            <div class="roadmapFirstText">September<span class="tm-gr-ball"></span></div>
                                            <div class="roadmapSecondText">Major partnerships in entertainment industry</div>
                                        </div> */}
                                    </div>
                            </div>
                            <div id='roadmapRight'>
                                <div class="showcase-roadmap">
                                    <div class="loader-roadmap loader-classic-roadmap"></div>
                                </div>
                                <div class="roadmapGreenText">2021</div>
                            </div>
                        </div>
                    </div>
                </BrowserView>
                <MobileView>
                    <div>
                        <div id='tokenTitleWrapper'>
                            <h1 id='tokenHeading'>ICO OFFERING</h1>
                            <p id='tokenSubtitle'>We have big plans for the future</p>
                        </div>
                        <div id='roadmapWrap'>
                            <div id='roadmapPoints'>
                                <div class="roadmapTextWrapper">
                                        <div class="roadmapSingleLine">
                                            <div class="roadmapFirstText">19/08/2021 To 02/09/2021<span class="tm-gr-ball"></span></div>
                                            <div class="roadmapSecondText">Pre-Launching ICO (Initial Coin Offering) @ $0.5 USD</div>
                                        </div>
                                        <div class="roadmapSingleLine">
                                            <div class="roadmapFirstText">03/09/2021 To 17/09/2021<span class="tm-gr-ball"></span></div>
                                            <div class="roadmapSecondText">Officially Launcing ICO @ $0.9 USD</div>
                                        </div>
                                        <div class="roadmapSingleLine">
                                            <div class="roadmapFirstText">18/09/2021 To 02/10/2021<span class="tm-gr-ball"></span></div>
                                            <div class="roadmapSecondText">Post Launch @ $1.4 USD</div>
                                        </div>
                                        {/* <div class="roadmapSingleLine">
                                            <div class="roadmapFirstText">September<span class="tm-gr-ball"></span></div>
                                            <div class="roadmapSecondText">Major partnerships in entertainment industry</div>
                                        </div> */}
                                    </div>
                            </div>
                            <div id='roadmapRight'>
                                <div class="showcase-roadmap">
                                    <div class="loader-roadmap loader-classic-roadmap"></div>
                                </div>
                                <div class="roadmapGreenText">2021</div>
                            </div>
                        </div>
                    </div>
                </MobileView>
            </>
        )
    }
}

export default Roadmap
