import React from 'react';
import {Route, useNavigate} from 'react-router-dom';
import {isAuth} from './helpers';

export default function PrivateRoute({ component: Component, ...rest }){

    const navigate = useNavigate();

    return(
        <Route {...rest} render={
            props => isAuth() ? <Component {...props} /> : navigate('/signin')
            }
        >
        </Route>
    )
}
/*
const privateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={
        props => isAuth() ? <Component {...props} /> : <Redirect to={{
            pathname: '/signin',
            state: {from: props.location}
        }}/>
    }>

    </Route>
)

export default privateRoute;*/