import React from 'react';
import { Link } from 'react-router-dom';


// Must import react-router-dom in order to create links within the navbar to navigate between pages
function NavBar() {
    return (
        <div>
            <nav className="navbar">
                <div className="name">Melanie Schellberg</div>
                <ul className ="links">
                    <li>
                        <Link to="/">About me</Link>
                    </li>
                    <li>
                        <Link to="/Portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="Resume">Resume</Link>
                    </li>
                    <li>
                        <Link to="Contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;