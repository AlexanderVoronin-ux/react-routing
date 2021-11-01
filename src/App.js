import React from "react";
import {Link, Route, Switch} from "react-router-dom";
import Category from './Category';
import Products from "./Products";
import {Contacts} from './Contacts'
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import {Button} from "@mui/material";
import Logout from "./Logout";
import PublicRoute from "./PublicRoute";

const Home = (props) => {
    console.log(props);
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}


export default function App() {
    return (
        <div className="header">
            <nav className="navbar">
                <ul>
                    <li>
                        <Button variant="contained" disableElevation>
                        <Link to="/">Home</Link>
                        </Button>
                    </li>
                    <li>
                        <Button variant="contained" disableElevation>
                        <Link to="/category">Category</Link>
                        </Button>
                    </li>
                    <li>
                        <Button variant="contained" disableElevation>
                        <Link to="/products">Products</Link>
                        </Button>
                    </li>
                    <li>
                        <Button variant="contained" disableElevation>
                        <Link to="/contacts">Contacts</Link>
                        </Button>
                    </li>
                    <li>
                        <Button variant="contained" disableElevation>
                        <Link to="/login">Login</Link>
                        </Button>
                    </li>
                    <li>
                        <Button variant="contained" disableElevation>
                        <Link to="/logout">Logout</Link>
                        </Button>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route exact path="/" component={Home}/>
                <PublicRoute path="/login" component={Login} />
                <PrivateRoute path="/logout" component={Logout}/>
                <PrivateRoute path="/category" component={Category}/>
                <PrivateRoute path="/products" component={Products}/>
                <PrivateRoute path="/contacts" component={Contacts}/>

            </Switch>
        </div>
    );
}