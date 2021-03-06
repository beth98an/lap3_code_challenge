import React from "react";
import { NavLink } from 'react-router-dom';
import './index.css';

export const Navbar = () => {
    // let navigate = useNavigate();
    return (
        <nav>
            <NavLink className="home-link" to="/">Home</NavLink>
            <NavLink activeclassname="active" to="/search">Repositories</NavLink>

            {/* <button id="back-button" onClick={() => navigate(-1)}>Back</button> */}

        </nav>
    );
};

export default Navbar;
