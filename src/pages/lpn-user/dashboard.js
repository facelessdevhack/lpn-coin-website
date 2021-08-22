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
import {
    AccountBalanceWallet,
    MonetizationOnRounded
} from '@material-ui/icons';

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
    render() {
        return (
            // <div id="userWrapper">
            //         <div id='userInfo'>
            //             <h1>Name: {this.state.user.name}</h1>
            //             <h4>Member ID: AMAZO-00000000{this.state.user.id}</h4>
            //             <h4>Father's Name: {this.state.user.fatherName}</h4>
            //             <h4>Email Address: {this.state.user.email}</h4>
            //             <h4>Phone Number: {this.state.user.phone}</h4>
            //             <h4>City: {this.state.user.city}</h4>
            //             <h4>Country: {this.state.user.country}</h4>
            //             <h4>Aadhar Number: {this.state.user.aadhar}</h4>
            //             <h4>Allotment Date: {this.state.user.allotmentDate}</h4>
            //             <h4>Token Amount: {this.state.user.tokenAmount}</h4>
            //         </div>
            //         <div>
                        
            //         </div>
            // </div>
            // <div id='dashboardWrapper'>
            //     <div id='dashboardContainer'>
            //         <div id='dashboardMenu'>
            //             <div>
            //                 <ul>
            //                     <li>Dashboard</li>
            //                     <li>Buy Token</li>
            //                     <li>Purchase Summary</li>
            //                     <li>Settings</li>
            //                     <li>Logout</li>
            //                 </ul>
            //             </div>
            //             <div>

            //             </div>
            //         </div>
            //         <p>This is the Dashboard</p>
            //     </div>
            // </div>
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
        )
    }
}
const mapStateToProps = state => ({
    userData: state.auth.userData
})
export default connect(mapStateToProps, { logout, loadUser })(UserDashboard)