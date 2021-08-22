import React from "react";
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../lpn-actions/auth';
import './login.css';
import logo from '../../assets/logo.png';
import { Button } from "@material-ui/core";

class Login extends React.Component {
    state = {
        email: "",
        password: ""
    }
    static propTypes = {
        login: PropTypes.func.isRequired,
        jwt: PropTypes.string,
        isAuthenticated: PropTypes.bool.isRequired
    }
    onSubmit = e => {
        e.preventDefault();
        this.props.login(this.state.email,
            this.state.password);
    };
    onChange = e => this.setState({
        [e.target.name]: e.target.value
    });
    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to='/dashboard' />
        } else {
        const { email, password } = this.state;
        return (
            <>
                    <form onSubmit={this.onSubmit}>
                        <div id='login-wrapper'>
                            <div id='overlay'>
                                <div id='logo-wrapper'>
                                    <img src={logo} />
                                </div>
                                <div id='login-welcometext'>
                                    <p>Member Login</p>
                                </div>
                                <div id='login-input'>
                                    <p>Email address</p>
                                    <input value={email} name='email' onChange={this.onChange} id='login-email' placeholder='input your email address' />
                                    <p>Password</p>
                                    <input type='password' id='login-email' onChange={this.onChange} value={password} name="password" placeholder='input your password' />
                                </div>
                                <div id='login-btn-wrapper'>
                                    <Button variant="contained" color="primary" value="LOGIN" type="submit">
                                        Login
                                    </Button>
                                    {/* <Link><p>Forgot Password?</p></Link> */}
                                </div>
                                {/* <div id='login-create-wrapper'>
                                    <p>Don't have an account?</p>
                                    <Link to='/register'><button>Create</button></Link>
                                </div> */}
                            </div>
                        </div>
                    </form>
            </>
        );
    }
    }
}

const mapStateToProps = state => ({
    jwt: state.auth.jwt,
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login);