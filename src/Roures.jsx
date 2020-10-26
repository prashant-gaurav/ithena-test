import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {PrivateRoute} from './screens/PrivateRoute';
import login from './screens/auth/login'
import register from './screens/auth/register'
import home from './screens/home'
import addMovies from './screens/home/create'


const publicRoutes = [
    {
        path: '/',
        screen: login,
    },
    {
        path: '/sign-up',
        screen: register,
    },
    // {
    //     path: '/t2',
    //     // exact: true,
    //     screen: home,
    // },
    // {
    //     path: '/t1',
    //     // exact: true,
    //     screen: addMovies,
    // },

];


const privateRoute = [
    {
        path: '/home',
        exact: true,
        screen: home,
    },
    {
        path: '/add',
        // exact: true,
        screen: addMovies,
    },
];

const Routers = () => {
    return (
        <Router>
            {publicRoutes.map(route => (
                <Route exact path={route.path} component={route.screen}/>
            ))}
            {privateRoute.map(route => (
                <PrivateRoute path={route.path} component={route.screen}/>
            ))}
        </Router>
    );
}
export default Routers
