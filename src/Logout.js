import React, {useState} from "react";
import { Redirect, useLocation} from "react-router-dom";
import {Button} from "@mui/material";

export default function Logout() {
    const { state } = useLocation();
    const { from } = state || { from: { pathname: "/" } };
    const [redirectToReferrer, setRedirectToReferrer] = useState(true);

    const logout = () => {
        // localStorage.setItem('hasAuth', false)

        fakeAuth.authenticate(() => {
            setRedirectToReferrer(false);
        });
    };

    if (redirectToReferrer) {
        return <Redirect to={from} />;
    }

    return (
        <div className='logout'>
            <p>You can log out</p>
            <Button variant="contained" color="success" onClick={logout}>Log out</Button>

        </div>
    );
}

/* A fake authentication function */
export const fakeAuth = {
    isAuthenticated: true,
    authenticate(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};