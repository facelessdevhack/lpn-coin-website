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
    MobileOnlyView,
    TabletView
  } from "react-device-detect";
import aboutBg from '../../assets/about-bg.jpg';
import bgTwo from '../../assets/bgtwo.jpg'
import Footer from '../lpn-footer/footer';

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
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/login">Login</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
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
                <TabletView style={{scrollbarWidth: 0}}>
                <Navbar id='navbar' bg="dark" variant="dark" expand="sm">
                        <Container>
                            <Navbar.Brand id='webName' href="#home">
                                <img src={logo} />mazo
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto" style={{color: 'white', display: 'flex', justifyContent: 'space-around', width: '100%', padding: '20px', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px', }}>
                                <Nav.Link href="/" style={{color: 'white', fontFamily: 'Poppins', fontSize: '3vw', textAlign: 'center'}}>Home</Nav.Link>
                                <Nav.Link href="/" style={{color: 'white', fontFamily: 'Poppins', fontSize: '3vw', textAlign: 'center'}}>Whitepaper</Nav.Link>
                                <Nav.Link href="/login" style={{color: 'white', fontFamily: 'Poppins', fontSize: '3vw', textAlign: 'center'}}>Login</Nav.Link>
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
                    <Container style={{height: "fit-content", maxWidth: '100vw', backgroundImage: `url(${back})`, paddingTop: '255px', paddingBottom: '130px', paddingLeft: '60px', display: 'flex', flexDirection:'column', justifyContent: 'space-around'}}>
                        <Row>
                            <Col>
                                <Typography style={{color: 'white', marginBottom: '20px'}} variant='h2'>Amazo ICO is Launching on <br/>02-09-2021</Typography >
                                <Typography variant='h5' style={{color: 'white'}}>A Global Leader In The Domain Of Real Estate, Transportation And Forex Trading.</Typography>
                                <div style={{marginTop: '80px', marginBottom: '30px'}}>
                                    <Button variant="contained" id='buyBtn' href='#InitialOffering'>
                                        ICO OFFERING
                                    </Button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                    <Container style={{height: 'fit-content', maxWidth: '100vw', backgroundImage: `url(${aboutBg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', padding: '150px'}}>
                        <Row>
                            <div id=''>
                                <Col>
                                    <Typography style={{color: '#77d102', marginBottom: '20px', textAlign: 'center', fontFamily: 'Poppins'}} variant='h2'>What is ERC20 Token ICO?</Typography >
                                    <Typography variant='h5' style={{color: 'white', textAlign: 'center'}}>Our Platform is built for Ethereum Blockchain ERC20 Token ICO.</Typography>
                                    <Typography style={{color: '#77d102', marginBottom: '20px',marginTop: '40px', textAlign: 'center', fontFamily: 'Poppins'}} variant='h2'>Why?</Typography >
                                    <Typography variant='h5' style={{color: 'white', textAlign: 'center'}}>
                                        As of January 2018, there were more than 21,000 ERC20 token contracts.
                                        We Built this Template because Ethereum ECO system is the most popular Platform.
                                        Among the most successful ERC20 token sales are EOS, Bancor, Qash and Bankex raising over $70 Million each.
                                    </Typography>
                                </Col>
                            </div>
                        </Row>
                    </Container>
                    <Container style={{height: 'fit-content', maxWidth:'100vw', backgroundImage: `url(${aboutBg})`, padding: '25px', paddingBottom: '100px', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                        <Row>
                            <Col>
                                <ChartSection />
                            </Col>
                        </Row>
                    </Container>
                    <Container style={{height: 'fit-content', maxWidth: '100vw', backgroundImage: `url(${bgTwo})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', paddingBottom: '50px'}}>
                        <Row>
                            <Col>
                                <Roadmap />
                            </Col>
                        </Row>
                    </Container>
                    <Container style={{height: 'fit-content', maxWidth: '100vw', backgroundImage: `url(${bgTwo})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', paddingTop: '50px', paddingBottom: '50px'}}>
                        <Row>
                            <Col>
                                <SubForm />
                            </Col>
                        </Row>
                    </Container>
                    <Container style={{backgroundImage: `url(${bgTwo})`, textAlign: 'center', maxWidth: '100vw', padding: '2vw', borderTop: '1px solid white'}}>
                        <Row>
                            <Col>
                                <Footer />
                            </Col>
                        </Row>
                    </Container>
                </TabletView>
                <MobileOnlyView>
                    <Navbar id='navbar' bg="dark" variant="dark" expand="lg" style={{width: '100vw'}}>
                        <Container>
                            <Navbar.Brand id='webName' href="/">
                                <img src={logo} />mazo
                            </Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav" style={{color: 'white'}}>
                            <Nav className="me-auto" style={{color: 'white', backgroundColor: 'rgba(0,0,0,0.3)', padding: '20px', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px', }}>
                                <Nav.Link href="/" style={{color: 'black', fontFamily: 'Poppins', fontSize: '3vw', backgroundColor: 'rgba(255,255,255,0.8)',borderRadius: '10px',marginBottom: '5px', padding: '10px'}}>Home</Nav.Link>
                                <Nav.Link href="/" style={{color: 'white', fontFamily: 'Poppins', fontSize: '3vw', textAlign: 'center'}}>Whitepaper</Nav.Link>
                                <Nav.Link href="/login" style={{color: 'black', fontFamily: 'Poppins', fontSize: '3vw', backgroundColor: 'rgba(255,255,255,0.8)',borderRadius: '10px',marginBottom: '5px', padding: '10px'}}>Login</Nav.Link>
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
                    <Container style={{height: "fit-content", maxWidth: '100vw', backgroundImage: `url(${back})`, paddingTop: '135px', display: 'flex', flexDirection:'column', justifyContent: 'space-around'}}>
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
                    <Container style={{height: 'fit-content', maxWidth: '100vw', backgroundImage: `url(${aboutBg})`, paddingTop: '80px', paddingBottom: '80px'}}>
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
                    <Container style={{height: 'fit-content', maxWidth:'100vw', backgroundImage: `url(${aboutBg})`, paddingTop: '80px', paddingBottom: '80px'}}>
                        <Row>
                            <Col>
                                <ChartSection />
                            </Col>
                        </Row>
                    </Container>
                    <Container style={{height: 'fit-content', maxWidth: '100vw', backgroundImage: `url(${bgTwo})`, paddingTop: '80px', paddingBottom: '80px'}}>
                        <Row>
                            <Col>
                                <Roadmap />
                            </Col>
                        </Row>
                    </Container>
                    <Container style={{height: 'fit-content', maxWidth: '100vw', backgroundImage: `url(${bgTwo})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', paddingBottom: '50px'}}>
                        <Row>
                            <Col>
                                <SubForm />
                            </Col>
                        </Row>
                    </Container>
                    <Container style={{backgroundImage: `url(${bgTwo})`, textAlign: 'center', maxWidth: '100vw', padding: '2vw', borderTop: '1px solid white'}}>
                        <Row>
                            <Col>
                                <Footer />
                            </Col>
                        </Row>
                    </Container>
                </MobileOnlyView>
            </div>
        )
    }
}
export default Home;