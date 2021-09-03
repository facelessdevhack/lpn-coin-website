import React, { Component } from 'react'
import Jumbo from './jumbo'
import Erctoken from './ercToken';
import Roadmap from './roadmap';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import '../lpn-home/home.css';
import logo from '../../assets/logo.png';
import ChartSection from '../lpn-chart/chartSection';
import ReactContactForm from 'react-mail-form';
import AccordianComp from './accordian';
import {connect} from 'react-redux';
import { loadFaq } from '../lpn-actions/auth';
import PropTypes from 'prop-types';

export class NewHome extends Component {
    state = {
        faqData: []
    }
    static propTypes = {
        faqs: PropTypes.array
    }
    componentDidMount() {
        this.props.loadFaq()
        setInterval(() => this.setState({
            faqData: this.props.faqs
        }), 400)
    }
    render() {
        return (
            <div style={{backgroundColor: '#013162'}}>
                <Navbar bg="dark"  variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand id='webName' href="#home">
                        <img src={logo} />mazo
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/" style={{color: 'white', padding: '20px', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px', }}>Home</Nav.Link>
                            <Nav.Link href="/whitepaper" style={{color: 'white',  padding: '20px', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px', }}>Whitepaper</Nav.Link>
                            <Nav.Link href="/login" style={{color: 'white',  padding: '20px 40px', borderRadius: '40px', border: '1px solid #77d102', }}>Login</Nav.Link>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Jumbo />
                <Erctoken />
                <ChartSection />
                <Roadmap />
                <h1 style={{color: 'white', textAlign: 'center',margin: '20px'}}>FAQS</h1>
                {this.state.faqData.map(faq => (
                    <AccordianComp 
                        title={faq.question}
                        content={faq.answers}
                    />
                ))}
                <div id='contactWrapper'>
                    <h1>Contact Us</h1>
                    <ReactContactForm to="admin@amazotoken.com" className='contact' />
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    faqs: state.auth.faqs
})
export default connect(mapStateToProps,{loadFaq})(NewHome)
