import React, { Component } from 'react'
import bgTwo from '../../assets/bgtwo.jpg'

export class Roadmap extends Component {
    render() {
        return (
            <div style={{height: '100vh'}}>
                <img src={bgTwo} id='bgSectionTwo' />
                {/* <div id='tokenSaleDes'>
                    <h1>What is a Token Sale?</h1>
                    <p>A token sale, sometimes referred to as an ICO, is form of crowd funding for digital currency-related projects. In token sales, purch - asers buy units of a new currency in exchange for legal tender or other digital currencies, such as Bitcoin or Ethereum.</p>
                </div> */}
                <div id='tokenTitleWrapper'>
                    <h1 id='tokenHeading'>Roadmap</h1>
                    <p id='tokenSubtitle'>We have big plans for the future of Request.</p>
                </div>
                <div id='roadmapWrap'>
                    <div id='roadmapPoints'>
                        <div class="roadmapTextWrapper">
				    			<div class="roadmapSingleLine">
					    			<div class="roadmapFirstText">January<span class="tm-gr-ball"></span></div>
					    			<div class="roadmapSecondText">Lunch of the project</div>
					    		</div>
					    		<div class="roadmapSingleLine">
					    			<div class="roadmapFirstText">March<span class="tm-gr-ball"></span></div>
					    			<div class="roadmapSecondText">Blockchain reputational module implementation</div>
					    		</div>
					    		<div class="roadmapSingleLine">
					    			<div class="roadmapFirstText">June<span class="tm-gr-ball"></span></div>
					    			<div class="roadmapSecondText">Inventory Management Systems</div>
					    		</div>
					    		<div class="roadmapSingleLine">
					    			<div class="roadmapFirstText">September<span class="tm-gr-ball"></span></div>
					    			<div class="roadmapSecondText">Major partnerships in entertainment industry</div>
					    		</div>
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
        )
    }
}

export default Roadmap
