import React from 'react';
import { Route, Switch } from 'react-router';
import Destination from '../Destination/Destination';
import Home from '../Home/Home';
import Login from "../Login/login"
import PrivateRoute from './PrivateRoute';

const MyRouter = () => {
    return (
        <>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <PrivateRoute exact path="/destination/:transportId">
                <Destination/>
            </PrivateRoute>
            <Route exact path="/login">
                <Login/>
            </Route>
        </Switch>
            
        </>
    );
};

export default MyRouter;