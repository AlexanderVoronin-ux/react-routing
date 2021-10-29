import React from "react";
import { Redirect, Route, useLocation} from "react-router-dom";
import {fakeAuth} from "./Login";

const PublicRoute = ({ component: Component, ...rest }) => {
    const location = useLocation();

    // const hasAuth = !!localStorage.getItem('hasAuth') || fakeAuth.isAuthenticated
    const hasAuth = fakeAuth.isAuthenticated

    return (
        <Route {...rest}>
            {hasAuth === true
                ? <Redirect to={{ pathname: "/logout", state: { from: location } }} />
                : <Component />
            }
        </Route>
    );
};

export default PublicRoute;