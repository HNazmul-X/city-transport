import React from 'react';
import { Route, Switch } from 'react-router';
import Destination from '../Destination/Destination';
import Home from '../Home/Home';
import Login from "../Login/login"

const MyRouter = () => {
    return (
        <>
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/destination">
                <Destination/>
            </Route>
            <Route exact path="/login">
                <Login/>
            </Route>
        </Switch>
            
        </>
    );
};

export default MyRouter;