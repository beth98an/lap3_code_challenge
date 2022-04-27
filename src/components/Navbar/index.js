import React from "react";
import { NavLink } from 'react-router-dom';
import './index.css';

export const Navbar = () => {
    // let navigate = useNavigate();
    return (
        <nav>
            <NavLink className="home-link" to="/">Home</NavLink>
<<<<<<< HEAD
            <NavLink activeclassname="active" to="/search">Repos</NavLink>
=======
            <NavLink activeclassname="active" to="/search">Repositories</NavLink>
>>>>>>> 228352cfa5ee00a862b17b460bb66b702891472f

            {/* <button id="back-button" onClick={() => navigate(-1)}>Back</button> */}

        </nav>
    );
};

export default Navbar;
