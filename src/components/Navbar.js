import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <h1 className="navbar-brand" >Melanie Schellberg</h1>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li>
        <Link to="/about" className="nav-link" >About</Link>
      </li>
      <li>
        <Link to="/portfolio" className="nav-link">Portfolio</Link>
      </li>
      <li>
        <Link to="/resume" className="nav-link">Resume</Link>
      </li>
      <li>
        <Link to="/contact" className="nav-link">Contact</Link>
      </li>
    </ul>
  </div>
</nav>
    )
}

export default Navbar