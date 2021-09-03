import React, { Component } from 'react'
import ParticlesBg from 'particles-bg'
import aboutImg from '../../assets/123.png'
import './jumbo.css'

export class Erctoken extends Component {
    render() {
        return (
            <div id='secondWrapper'>
                <div id='deskCob'>
                    <ParticlesBg color="#ff0000" num={100} type="cobweb" />
                </div>
                <div id='mobiCob'>
                    <ParticlesBg color="#ff0000" num={30} type="cobweb" />
                </div>
                <div>
                    <div id='ercImages'>
                        <img src={aboutImg} className='ercAboutImg'/>
                    </div>
                </div>
                <div id='jumboText'>
                    <h2>What is ERC20 Token ICO?</h2>
                    <p>Our Platform is built for Ethereum Blockchain ERC20 Token ICO.</p>
                    <h2>Why?</h2>
                    <p>As of January 2018, there were more than 21,000 ERC20 token contracts.Among the most successful ERC20 token sales are EOS, Bancor, Qash and Bankex raising over $70 Million each.</p>
                </div>
            </div>
        )
    }
}

export default Erctoken
