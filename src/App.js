import React from "react";
import {Link, Route, Switch} from "react-router-dom";
import Category from './Category';
import Products from "./Products";
import {Button} from "@mui/material";

const Home = (props) => {
    console.log(props);
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}
const Contacts = () => (
    <div>
        <h2>Contacts</h2>
    </div>
);

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
    <Route path="/category"><Category /></Route>
    <Route path="/products"><Products /></Route>
    <Route path="/contacts"><Contacts /></Route>
    <Route path="/:id">
        <p>Отображаемый текст по id при динамической  маршрутизации</p>
    </Route>

</Switch>
        </div>
    );
}