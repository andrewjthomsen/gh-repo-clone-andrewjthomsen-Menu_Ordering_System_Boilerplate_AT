/*import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Signup from './auth/Signup';
import Signin from './auth/Signin';
import Activate from './auth/Activate';
import Admin from './core/Admin';
import Private from './core/Private';
import AdminRoute from './auth/AdminRoute';
import privateRoute from './auth/privateRoute';



const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/auth/activate/:token" exact component={Activate} />
                <privateRoute path="/private" exact component={Private} />   // private route will be enabled only if user is authenticated.
                <AdminRoute path="/admin" exact component={Admin} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;*/