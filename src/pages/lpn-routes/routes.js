import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import login from '../lpn-auth/login';
import PrivateRoute from '../lpn-common/privateRoute';
import Home from '../lpn-home/home';
import UserDashboard from '../lpn-user/dashboard';

export default function RoutingLPN() {
    return (
        <Router>
            <Switch>
                <PrivateRoute exact path='/dashboard' component={UserDashboard} />
                <Route exact path='/' component={Home} />
                <Route path='/login' component={login} />
                <Route component={Error} />
            </Switch>
        </Router>
    )
}