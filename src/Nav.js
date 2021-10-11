import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ dogs }) => {
    const dogLinks = dogs.map(dog => (
        <li><NavLink key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`}>
            {dog.name}
        </NavLink></li >
    ))
    return (
        <ul>
            <li><NavLink exact to="/dogs">Home</NavLink></li>
            {dogLinks}
        </ul>
    )
}

export default NavBar;