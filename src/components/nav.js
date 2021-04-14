import React from 'react';
import { Link } from 'react-router-dom';

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
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="resume">Resume</Link>
                    </li>
                    <li>
                        <Link to="contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;