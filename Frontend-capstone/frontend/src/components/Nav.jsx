import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <ul>
                <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/login" activeClassName="active">Login</NavLink></li>
                <li><NavLink to="/visit" activeClassName="active">Visit</NavLink></li>
                <li><NavLink to="/appreciate" activeClassName="active">Appreciate</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;