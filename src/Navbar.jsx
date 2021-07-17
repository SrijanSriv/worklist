import React from 'react';
// import Instructions from './Instructions';
import { NavLink } from 'react-router-dom';

const Navbar = () =>{

    return(
        <div className="Nav">
            <div className="Link">
            <NavLink exact activeClassName="active" to="/">List</NavLink>
            <NavLink exact activeClassName="active" to="instructions">Instructions</NavLink>
            </div>
        </div>
    );
};

export default Navbar;