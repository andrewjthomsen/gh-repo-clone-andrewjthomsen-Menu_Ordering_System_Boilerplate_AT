/*import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Signup from './auth/Signup';
import Signin from './auth/Signin';
import Activate from './auth/Activate';
import Private from './core/Private';
import privateRoute from './auth/privateRoute';
import Admin from './core/Admin';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/auth/activate/:token" exact component={Activate} />
                <privateRoute path="/private" exact component={Private} />   // private route will be enabled only if user is authenticated.
                <Route path="/signin" exact component={Signin} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;*/