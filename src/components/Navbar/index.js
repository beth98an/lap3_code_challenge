import React from "react";
import { NavLink } from 'react-router-dom';
import './index.css';

export const Navbar = () => {
    // let navigate = useNavigate();
    return (
        <nav>
<<<<<<< HEAD
            <NavLink className="home-link" to="true">Home</NavLink>
            <NavLink activeClassName="active" to="/search">Search</NavLink>
=======
            <NavLink className="home-link" to="/">Home</NavLink>
            <NavLink activeclassname="active" to="/search">Search</NavLink>
>>>>>>> 02987e5776e46426a0035eb237f085c97e803614

            {/* <button id="back-button" onClick={() => navigate(-1)}>Back</button> */}

        </nav>
    );
};

export default Navbar;
