import React from 'react'
import {
    BrowserRouter as RouterComp,
    Switch,
    Route,
} from "react-router-dom";
import DetailKost from './page/DetailKost';
import Home from './page/Home';
import Login from './page/Login';
import Register from './page/Register';
import PostKost from './page/PostKost';

const Router = () => {
    return (
        <RouterComp>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/home'>
                    <Home />
                </Route>
                <Route exact path='/login'>
                    <Login />
                </Route>
                <Route exact path='/register'>
                    <Register />
                </Route>
                <Route path='/detail/:id'>
                    <DetailKost />
                </Route>
                <Route path='/postkost'>
                    <PostKost />
                </Route>
            </Switch>
        </RouterComp>
    )
}

export default Router
