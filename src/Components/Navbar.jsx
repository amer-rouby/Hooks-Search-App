import React from 'react';
import {NavLink} from "react-router-dom"
const Navbar = () => {
    return ( 
        <div>
            <nav>
                <h3>The Cocktail DB</h3>
                <div className="navb">
                    <NavLink className="navbar-brand mb-0 ml-4" style={{color: "#000"}} to="/">Home</NavLink>
                    <NavLink className="navbar-brand mb-0 ml-4" style={{color: "#000"}}to="/about">About</NavLink>
                </div>
            </nav>
        </div>
     );
}
 
export default Navbar;