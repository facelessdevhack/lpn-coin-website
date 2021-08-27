import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import login from '../lpn-auth/login';
import PrivateRoute from '../lpn-common/privateRoute';
import Home from '../lpn-home/home';
import UserDashboard from '../lpn-user/dashboard';
import Whitepaper from '../lpn-whitepaper/whitepaper';

export default function RoutingLPN() {
    return (
        <Router>
            <Switch>
                <PrivateRoute exact path='/dashboard' component={UserDashboard} />
                <Route exact path='/' component={Home} />
                <Route path='/login' component={login} />
                <Route path='/whitepaper' component={Whitepaper} />
                <Route component={Error} />
            </Switch>
        </Router>
    )
}