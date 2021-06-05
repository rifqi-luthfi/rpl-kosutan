import React, {useContext}  from 'react'
import {
    BrowserRouter as RouterComp,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { GlobalContext } from './context/GlobalContext';
import Header from './layout/Header';
import HeaderLogin from './layout/HeaderLogin';
import Home from './page/Home';
import KostList from './page/KostList';
import Login from './page/Login';
import Register from './page/Register';
import DetailKost from './page/DetailKost';
import Footer from './layout/Footer';
import PostKost from './page/PostKost';

const LoggedInRoute = ({ children, ...rest }) => {
    // protected route, digunakan untuk component yang hanya dapat 
    // diakses oleh logged in user

    // ambil state isUserLoggedIn dari global context
    const { isUserLoggedIn } = useContext(GlobalContext);
    return (
      <Route
        {...rest}
        render={({ location }) =>
        
          // apabila user logged in maka render children
          isUserLoggedIn? (
            children
          ) : (
            // redirect ke login apabila user belum logged in
            <Redirect to={{ pathname: "/login", state: { from: location } }} />
          )
        }
      ></Route>
    );
  };

const NotLoggedInRoute = ({ children, ...rest }) => {
    // protected route, digunakan untuk component yang hanya dapat 
    // diakses oleh user belum logged in

    // ambil state isUserLoggedIn dari global context
    const { isUserLoggedIn } = useContext(GlobalContext);
    return (
        <Route
        {...rest}
        render={({ location }) =>
            // apabila baru first render, {}
            isUserLoggedIn.constructor === Object? (
                children
            ) : 
            // apabila baru user belum logged in
            !isUserLoggedIn ? (
                children
            ) : (
                // redirect ke root apabila user sudah logged in
                <Redirect to={{ pathname: "/", state: { from: location } }} />
            )
        }
        ></Route>
    );
};
const Router = () => {
    // ambil state isUserLoggedIn dari global context
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
                <Route path='/kostlist/:city?'>
                    {
                        isUserLoggedIn? 
                        <HeaderLogin/> : <Header />  
                    }
                    <KostList />
                </Route>
                <Route path='/kosts/:id'>
                    <Header/>
                    <DetailKost/>
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
