import React from "react";
import {Link, Route, Switch} from "react-router-dom";
import Category from './Category';
import Products from "./Products";
import {Contacts} from './Contacts'
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import {Button} from "@mui/material";

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
                </ul>
            </nav>
<Switch>
    <Route exact path="/"><Home /></Route>
    <Route path="/login"><Login /></Route>
    <PrivateRoute path="/category" component={Category}/>
    <PrivateRoute path="/products" component={Products}/>
    <PrivateRoute path="/contacts" component={Contacts}/>

</Switch>
        </div>
    );
}