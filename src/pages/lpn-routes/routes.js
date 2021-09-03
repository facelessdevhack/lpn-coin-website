import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import NewHome from '../home/home';
import login from '../lpn-auth/login';
import PrivateRoute from '../lpn-common/privateRoute';
import UserDashboard from '../lpn-user/dashboard';
import Whitepaper from '../lpn-whitepaper/whitepaper';

export default function RoutingLPN() {
    return (
        <Router>
            <Switch>
                <PrivateRoute exact path='/dashboard' component={UserDashboard} />
                <Route exact path='/' component={NewHome} />
                <Route path='/login' component={login} />
                <Route path='/whitepaper' component={Whitepaper} />
                <Route component={Error} />
            </Switch>
        </Router>
    )
}