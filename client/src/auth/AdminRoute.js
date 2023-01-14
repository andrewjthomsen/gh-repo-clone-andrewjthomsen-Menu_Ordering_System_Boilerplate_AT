import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {isAuth} from './helpers';

const AdminRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={
        props => isAuth() && isAuth().role === 'admin' ? (
            // if user is authenticated and role is admin, return component
            <Component {...props} />
        ) : (
            // Otherwise redirect to signin
            <Redirect
                to={{
                    pathname: '/admin',
                    state: {from: props.location}
                }}
            />

        )
    }
    ></Route>
);

export default AdminRoute;