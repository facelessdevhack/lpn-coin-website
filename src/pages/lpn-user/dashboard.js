import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './dashboard.css'
import { logout, loadUser } from '../lpn-actions/auth';
import { 
    Button, 
    Card, 
    CardHeader, 
    Box, 
    Typography, 
    Tab, 
    Tabs,
    Avatar,
    IconButton,
    CardMedia,
    CardContent
} from '@material-ui/core';
import profile from '../../assets/pp.png';
import {
    AccountBalanceWallet,
    MonetizationOnRounded
} from '@material-ui/icons';
import {
    BrowserView,
    MobileOnlyView
} from 'react-device-detect';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}


class UserDashboard extends Component {
    state = {
        user: [],
        value: 0
    }
    static propTypes = {
        userData: PropTypes.array
    }
    componentDidMount() {
        setInterval(() => this.setState({user: this.props.userData}), 100)
        setTimeout(() => console.log(this.state.user), 1500)
        setTimeout(() => this.props.loadUser(), 1000)
        
    }
    handleChange = (event, newValue) => {
        this.setState({
            value: newValue
        });
      };
    logout = () => {
        this.props.logout();
        this.props.history.push('/')
    }
    referralCopy = () => {
        navigator.clipboard.writeText('Copy this text to clipboard');
        alert("Copied")
    }
    render() {
        return (
            <>
            <BrowserView>
                <div id="dashboardWrapper">
                    <div id='dashboardLeft'>
                        <div id='leftInfo'>
                            <img src={profile} />
                            <span>Welcome Back,</span>
                            <h4>{this.state.user.name}</h4>
                        </div>
                        <div>
                            <div className="rightBtns">
                                <button>Dashboard</button>
                            </div>
                            <div className="rightBtns">
                                <button>Buy Tokens</button>
                            </div>
                            <div className="rightBtns">
                                <button>Refferals</button>
                            </div>
                            <div className="rightBtns">
                                <button>Profile</button>
                            </div>
                            <div className="rightBtns">
                                <button onClick={this.logout}>Logout</button>
                            </div>
                        </div>
                    </div>
                    <div id='dashboardRight'>
                        <div id='rightTopBar'>
                            <div id='tokenAmount'>
                                <div className='amountInner'>
                                    <p>{this.state.user.tokenAmount}</p>
                                    <span>Tokens</span>
                                </div>
                            </div>
                            <div id='tokenAmount'>
                                <div className='amountInner'>
                                    <p>200</p>
                                    <span>Bonus Tokens</span>
                                </div>
                            </div>
                            <div id='tokenAmount'>
                                <div className='amountInner'>
                                    <p>{parseInt(this.state.user.tokenAmount) + parseInt(this.state.user.bonus)}</p>
                                    <span>Total Tokens</span>
                                </div>
                            </div>
                        </div>
                        <div id='rightRefferalBar'>
                                <div id='referralLine'>
                                    <p>Referral code</p>
                                    <button onClick={this.referralCopy}>{this.state.user.referral}</button>
                                </div>
                            </div>
                    </div>
                </div>
            </BrowserView>
            <MobileOnlyView>
            <div id='dashboardWrapper' >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={this.state.value}
                    onChange={this.handleChange}
                    aria-label="Vertical tabs example"
                    style={{marginTop: 38}}
                >
                    <Tab label="Dashboard" {...a11yProps(0)} />
                    <Tab label="Buy Token" {...a11yProps(1)} />
                    <Tab label="Purchase Summary" {...a11yProps(2)} />
                    <Tab label="Refferals" {...a11yProps(3)} />
                    <Tab label="Settings" {...a11yProps(4)} />
                    <Tab label="Support" {...a11yProps(5)} />
                    <Tab label="Logout" {...a11yProps(6)} />
                </Tabs>
                <TabPanel value={this.state.value} index={0}>
                    <div>
                        <div>
                            <h2>Dashboard</h2>
                        </div>
                        <div>
                            <div id='DashboardContainer'>
                                <Card className='DashboardWrapper'>
                                    <CardHeader
                                        avatar={
                                        <Avatar aria-label="recipe" className='DashboardAvatar'>
                                            <AccountBalanceWallet />
                                        </Avatar>
                                        }
                                        action={
                                        <IconButton aria-label="settings">
                                        </IconButton>
                                        }
                                        title="Amazo Token Balance"
                                        subheader={this.state.user.tokenAmount}
                                    />
                                    <CardMedia
                                        className='DashboardMedia'
                                        image="/static/images/cards/paella.jpg"
                                        title="Paella dish"
                                    />
                                </Card>
                                <Card className='DashboardWrapperTwo'>
                                    <CardHeader
                                        avatar={
                                        <Avatar aria-label="recipe" className='DashboardAvatar'>
                                            <MonetizationOnRounded />
                                        </Avatar>
                                        }
                                        action={
                                        <IconButton aria-label="settings">
                                        </IconButton>
                                        }
                                        title="Referral Bonus"
                                        subheader="$0"
                                    />
                                    <CardMedia
                                        className='DashboardMedia'
                                        image="/static/images/cards/paella.jpg"
                                        title="Paella dish"
                                    />
                                </Card>
                                {/* <Card className='DashboardWrapperTwo'>
                                    <CardHeader
                                        avatar={
                                        <Avatar aria-label="recipe" className='DashboardAvatar'>
                                            <MonetizationOnRounded />
                                        </Avatar>
                                        }
                                        action={
                                        <IconButton aria-label="settings">
                                        </IconButton>
                                        }
                                        title="Token Amount"
                                        subheader="100"
                                    />
                                    <CardMedia
                                        className='DashboardMedia'
                                        image="/static/images/cards/paella.jpg"
                                        title="Paella dish"
                                    />
                                </Card> */}
                            </div>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel value={this.state.value} index={1}>
                    Item Two
                </TabPanel>
                <TabPanel value={this.state.value} index={2}>
                    Item Three
                </TabPanel>
                <TabPanel value={this.state.value} index={3}>
                    Item Four
                </TabPanel>
                <TabPanel value={this.state.value} index={4}>
                    Item Five
                </TabPanel>
                <TabPanel value={this.state.value} index={5}>
                    Item Six
                </TabPanel>
                <TabPanel value={this.state.value} index={6}>
                    <Button variant="contained" color="primary" onClick={() => this.logout()}>
                            Logout
                        </Button>
                </TabPanel>
                </div>
            </MobileOnlyView>
            </>
        )
    }
}
const mapStateToProps = state => ({
    userData: state.auth.userData
})
export default connect(mapStateToProps, { logout, loadUser })(UserDashboard)