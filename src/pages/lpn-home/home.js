import React from 'react';
// import Navbar from '../lpn-navigation/navigation';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import back from '../../assets/bg.jpg';
import './home.css';
import logo from '../../assets/logo.png';
import {Button, Typography} from '@material-ui/core';
// import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import ChartSection from '../lpn-chart/chartSection';
import ERCToken from './ercToken';
import Roadmap from './advantages';
import SubForm from './subForm';
import {
    BrowserView,
    MobileView
  } from "react-device-detect";
import aboutBg from '../../assets/about-bg.jpg';
import bgTwo from '../../assets/bgtwo.jpg'

const styles = {
    paperContainer: {
        backgroundImage: `url(${back})`
    }
};



class Home extends React.Component {
    render() {
        return (
            <div>
                {/* <div id='navWrapper'>
                    <Navbar />
                </div> */}
                <BrowserView>
                <Navbar id='navbar' bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand id='webName' href="#home">
                            <img src={logo} />mazo
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                {/* <Container style={{height: '60vh'}}>
                    <Row>
                        <Col>1 of 1</Col>
                    </Row>
                </Container> */}
                <img src={back} id='background'/>
                    <div id='jumboTronWrapper'>
                        <div id='leftJumbo'>
                            <h1>Amazo ICO is Launching on <br/>02-09-2021</h1>
                            <p>A Global Leader In The Domain Of Real Estate, Transportation And Forex Trading.</p>
                            <div>
                                <Button variant="contained" id='buyBtn' href='#InitialOffering'>
                                    ICO OFFERING
                                </Button>
                            </div>
                        </div>
                        <div id='rightJumbo'>
                            <div id='timerAnimation'>
                                <div class="showcase">
                                    <div class="loader loader-classic"></div>
                                </div>
                                <div class="showcase-two">
                                    <div class="loader-two loader-classic-two"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                <div>
                    <ERCToken />
                </div>
                <div>
                    <ChartSection />
                </div>
                <div id='InitialOffering'>
                    <Roadmap />
                </div>
                <div>
                    <SubForm />
                </div>
                </BrowserView>
                <MobileView>
                    <Navbar id='navbar' bg="light" expand="lg">
                        <Container>
                            <Navbar.Brand id='webName' href="#home">
                                <img src={logo} />mazo
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Link</Nav.Link>
                                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown> */}
                            </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <Container style={{height: "fit-content", border: '1px solid red', backgroundImage: `url(${back})`, paddingTop: '135px', display: 'flex', flexDirection:'column', justifyContent: 'space-around'}}>
                        <Row>
                            <Col>
                                <Typography style={{color: 'white', marginBottom: '20px'}} variant='h2'>Amazo ICO is Launching on <br/>02-09-2021</Typography >
                                <Typography variant='p' style={{color: 'white'}}>A Global Leader In The Domain Of Real Estate, Transportation And Forex Trading.</Typography>
                                <div style={{marginTop: '10px', marginBottom: '30px'}}>
                                    <Button variant="contained" id='buyBtn' href='#InitialOffering'>
                                        ICO OFFERING
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <Container style={{height: 'fit-content', border: '1px solid blue',  backgroundImage: `url(${aboutBg})`, paddingTop: '80px', paddingBottom: '80px'}}>
                        <Row>
                            <div id=''>
                                <Col>
                                    <Typography style={{color: '#77d102', marginBottom: '20px', textAlign: 'center', fontFamily: 'Poppins'}} variant='h2'>What is ERC20 Token ICO?</Typography >
                                    <Typography variant='p' style={{color: 'white'}}>Our Platform is built for Ethereum Blockchain ERC20 Token ICO.</Typography>
                                    <Typography style={{color: '#77d102', marginBottom: '20px',marginTop: '40px', textAlign: 'center', fontFamily: 'Poppins'}} variant='h2'>Why?</Typography >
                                    <Typography variant='p' style={{color: 'white'}}>
                                        As of January 2018, there were more than 21,000 ERC20 token contracts.
                                        We Built this Template because Ethereum ECO system is the most popular Platform.
                                        Among the most successful ERC20 token sales are EOS, Bancor, Qash and Bankex raising over $70 Million each.
                                    </Typography>
                                </Col>
                            </div>
                        </Row>
                    </Container>
                    <Container style={{height: 'fit-content', border: '1px solid blue',  backgroundImage: `url(${aboutBg})`, paddingTop: '80px', paddingBottom: '80px'}}>
                        <Row>
                            <Col>
                                <ChartSection />
                            </Col>
                        </Row>
                    </Container>
                    <Container style={{height: 'fit-content', border: '1px solid blue',  backgroundImage: `url(${bgTwo})`, paddingTop: '80px', paddingBottom: '80px'}}>
                        <Row>
                            <Col>
                                <Roadmap />
                            </Col>
                        </Row>
                    </Container>
                </MobileView>
            </div>
        )
    }
}
export default Home;