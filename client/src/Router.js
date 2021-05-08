import React, {useContext}  from 'react'
import {
    BrowserRouter as RouterComp,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { GlobalContext } from './context/GlobalContext';
import Footer from './layout/Footer';
import Header from './layout/Header';
import HeaderLogin from './layout/HeaderLogin';
import Home from './page/Home';
import KostList from './page/KostList';
import Login from './page/Login';
import Register from './page/Register';
import PostKost from './page/PostKost';

const LoggedInRoute = ({ children, ...rest }) => {
    const { isUserLoggedIn } = useContext(GlobalContext);
    return (
      <Route
        {...rest}
        render={({ location }) =>
   
          isUserLoggedIn? (
            children
          ) : (
            <Redirect to={{ pathname: "/login", state: { from: location } }} />
          )
        }
      ></Route>
    );
  };

const NotLoggedInRoute = ({ children, ...rest }) => {
    const { isUserLoggedIn } = useContext(GlobalContext);
    return (
        <Route
        {...rest}
        render={({ location }) =>
            // if isUserLoggedIn or isAdmin still an object (initialized)
            isUserLoggedIn.constructor === Object? (
                children
            ) : // if user not logged in and its not admin
            !isUserLoggedIn ? (
                children
            ) : (
                <Redirect to={{ pathname: "/", state: { from: location } }} />
            )
        }
        ></Route>
    );
};
const Router = () => {
    const { isUserLoggedIn } = useContext(GlobalContext);

    return (
        <RouterComp>
            <Switch>
                <Route exact path='/'>
                    {
                        isUserLoggedIn? 
                        <HeaderLogin/> : <Header />  
                    }
                    <Home />
                </Route>
                <Route exact path='/home'>
                    {
                        isUserLoggedIn? 
                        <HeaderLogin/> : <Header />  
                    }
                    <Home />
                </Route>
                <Route exact path='/kostlist'>
                    {
                        isUserLoggedIn? 
                        <HeaderLogin/> : <Header />  
                    }
                    <KostList />
                </Route>
                <NotLoggedInRoute exact path='/login'>
                    <Header/>
                    <Login />
                </NotLoggedInRoute>
                <NotLoggedInRoute exact path='/register'>
                    <Header/>
                    <Register />
                </NotLoggedInRoute>
        


            </Switch>
        </RouterComp>

    )
}

export default Router
