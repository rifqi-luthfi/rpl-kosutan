import React from 'react'
import {
    BrowserRouter as RouterComp,
    Switch,
    Route,
} from "react-router-dom";
import Home from './page/Home';
import Login from './page/Login';
import Register from './page/Register';

const Router = () => {
    return (
        <RouterComp>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/login'>
                    <Login />
                </Route>
                <Route exact path='/register'>
                    <Register />
                </Route>
            </Switch>
        </RouterComp>
    )
}

export default Router
