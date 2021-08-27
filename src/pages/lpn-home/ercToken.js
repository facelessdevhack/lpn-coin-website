import React, { Component } from 'react'
import aboutImg from '../../assets/about-img2.png';
import greenEth from '../../assets/green-ethereum1.png';
import aboutBg from '../../assets/about-bg.jpg';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';

export class ERCToken extends Component {
    render() {
        return (
            <Container id='ercWrapper'>
                <img src={aboutBg} id='background'/>
                <div id='ercContainer'>
                    <div id='col6'>
                        <div id='col6Inner'>
                            <div id='ercImages'>
                                <img src={aboutImg} className='ercAboutImg'/>
                                <img src={greenEth} className='ercEth' />
                            </div>
                        </div>
                    </div>
                    <div id='col6'>
                        <div id='col6Inner' className="col6Text">
                            <div>
                                <h2 className='sectionHeading'>
                                What is ERC20 Token ICO?
                                </h2>
                                <p className='sectionText'>Our Platform is built for Ethereum Blockchain ERC20 Token ICO.</p>
                                <h2 className='sectionHeading'>
                                    Why?
                                </h2>
                                <p className='sectionText'>
                                    As of January 2018, there were more than 21,000 ERC20 token contracts.<br/>
                                    We Built this Template because Ethereum ECO system is the most popular Platform.<br/>
                                    Among the most successful ERC20 token sales are EOS, Bancor, Qash and Bankex raising over $70 Million each.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        )
    }
}

export default ERCToken
