import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/styles.css';

const Header = () => {
  return (
    <header>
      <div className="logo">LOGESH KRISHNAN</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact="true" activeClassName="active-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active-link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" activeClassName="active-link">
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/education" activeClassName="active-link">
              Education
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active-link">
              Contact Me
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;