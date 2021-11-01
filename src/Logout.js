import React, {useState} from "react";
import { Redirect, useLocation} from "react-router-dom";
import {Button} from "@mui/material";
import {fakeAuth} from "./Login";

export default function Logout() {
    const logout = () => {
        localStorage.removeItem('hasAuth')

        fakeAuth.logout()

    };

    return (
        <div className='logout'>
            <p>You can log out</p>
            <Button variant="contained" color="success" onClick={logout}>Log out</Button>

        </div>
    );
}
