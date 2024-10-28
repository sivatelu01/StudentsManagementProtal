// src/components/Navbar.js
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar" aria-label="Main Navigation">
            <div>
                <NavLink to="/students">
                    Student List
                </NavLink>
                <NavLink to="/add-student">
                    Register Student
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
