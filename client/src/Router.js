import React, {useContext}  from 'react'
import {
    BrowserRouter as RouterComp,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

// non-admin components
import { GlobalContext } from './context/GlobalContext';
import Header from './layout/Header';
import HeaderLogin from './layout/HeaderLogin';
import Home from './page/Home';
import KostList from './page/KostList';
import Login from './page/Login';
import Register from './page/Register';
import DetailKost from './page/DetailKost';
import Checkout from './page/Checkout'
import HeaderPemilik from './layout/HeaderPemilik';
import History from './page/History'


// admin components
import Dashboard from './page/admin/Dashboard';
import PostKost from './page/admin/PostKost';
import DetailKostAdmin from './page/admin/DetailKost';

const LoggedInRoute = ({ children, ...rest }) => {
    // protected route, digunakan untuk component yang hanya dapat 
    // diakses oleh logged in user

    // ambil state isUserPenyewa dari global context
    
    const { isUserPenyewa } = useContext(GlobalContext);
    return (
      <Route
        {...rest}
        render={({ location }) =>
        
          // apabila user logged in maka render children
          isUserPenyewa? (
            children
          ) : (
            // redirect ke login apabila user belum logged in
            <Redirect to={{ pathname: "/login", state: { from: location } }} />
          )
        }
      ></Route>
    );
  };
  const LoggedInRoutePemilik = ({ children, ...rest }) => {
    // protected route, digunakan untuk component yang hanya dapat 
    // diakses oleh logged in user

    // ambil state isUserPenyewa dari global context
    
    const { isUserPemilik } = useContext(GlobalContext);
    return (
      <Route
        {...rest}
        render={({ location }) =>
        
          // apabila user logged in maka render children
          isUserPemilik? (
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

    // ambil state isUserPenyewa dari global context
    const { isUserPenyewa, isUserPemilik } = useContext(GlobalContext);

    return (
        <Route
        {...rest}
        render={({ location }) =>
            // apabila baru first render, {}
            isUserPenyewa.constructor === Object? (
                children
            ) : 
            // apabila baru user belum logged in
            !isUserPenyewa && !isUserPemilik ? (
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
    // ambil state isUserPenyewa dari global context
    const { isUserPenyewa, isUserPemilik } = useContext(GlobalContext);
    let header;
    if (isUserPenyewa) { header = <HeaderLogin/> }
    if (isUserPemilik) { header = <HeaderPemilik /> }
    if (!isUserPenyewa && !isUserPemilik) { header = <Header /> }

    return (
        <RouterComp>
            <Switch>
                <Route exact path='/'>
                    {header}
                    <Home />
                </Route>
                <Route exact path='/home'>
                    {header}
                    <Home />
                </Route>
                <Route path='/kostlist/:city?'>
                    {header}
                    <KostList />
                </Route>
                <Route exact path='/kosts/:id'>
                    {header}
                    <DetailKost/>
                </Route>
                <LoggedInRoute exact path="/kosts/book/:id" >
                    {header}
                    <Checkout />
                </LoggedInRoute>

                <LoggedInRoute exact path="/history" >
                    {header}
                    <History />
                </LoggedInRoute>
                
                <LoggedInRoutePemilik exact path="/dashboard">
                    {header}
                    <Dashboard />
                </LoggedInRoutePemilik>

                <LoggedInRoutePemilik exact path="/dashboard/kost/add">
                    {header}
                    <PostKost />
                </LoggedInRoutePemilik>

                <LoggedInRoutePemilik exact path="/dashboard/kost/detail/:id">
                    {header}
                    <DetailKostAdmin />
                </LoggedInRoutePemilik>

                <LoggedInRoutePemilik exact path="/dashboard/kost/edit/:id">
                    {header}
                    <PostKost type='edit' />
                </LoggedInRoutePemilik>
                
                <NotLoggedInRoute exact path='/login'>
                    {header}
                    <Login />
                </NotLoggedInRoute>
                <NotLoggedInRoute exact path='/register'>
                    {header}
                    <Register />
                </NotLoggedInRoute>
        
            </Switch>
        </RouterComp>

    )
}

export default Router
