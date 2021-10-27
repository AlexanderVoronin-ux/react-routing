import React from "react";
import {Link, Route, useParams, useRouteMatch} from "react-router-dom";
import {Button} from "@mui/material";

const Item = () => {
    const { name } = useParams();

    return (
        <div>
            <h3>{name}</h3>
        </div>
    );
}

const Category = () => {
    const { url, path } = useRouteMatch();

    return (
        <div>
            <ul>
                <li>
                    <Button variant="contained" disableElevation>
                        <Link to={`${url}/shoes`}>Shoes</Link>
                    </Button>

                </li>
                <li>
                    <Button variant="contained" disableElevation>
                       <Link to={`${url}/boots`}>Boots</Link>
                    </Button>
                </li>
                <li>
                    <Button variant="contained" disableElevation>
                       <Link to={`${url}/footwear`}>Footwear</Link>
                   </Button>
                </li>
            </ul>
            <Route path={`${path}/:name`}>
                <Item />
            </Route>
        </div>
    );
};

export default Category;