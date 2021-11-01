import React, {useState} from "react";
import { Redirect, useLocation} from "react-router-dom";
import {Button} from "@mui/material";

export default function Login() {
    const { state } = useLocation();
    const { from } = state || { from: { pathname: "/" } };
    const [redirectToReferrer, setRedirectToReferrer] = useState(false);

    const login = () => {
        localStorage.setItem('hasAuth', true)

        fakeAuth.authenticate(() => {
            setRedirectToReferrer(true);
        });
    };

    if (redirectToReferrer) {
        return <Redirect to={from} />;
    }

    return (
        <div className='login'>
            <p>You must log in to view the page {from.pathname}</p>
            <Button variant="contained" color="success" onClick={login}>Log in</Button>

        </div>
    );
}

/* A fake authentication function */
export const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100);
    },
    logout(cb) {
        this.isAuthenticated = false;
        if(cb) {
            setTimeout(cb, 100);
        }
    }
};