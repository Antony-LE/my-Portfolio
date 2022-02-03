import './Navbar.css';
import PropTypes from 'prop-types';
import React from 'react';
import uniqid from 'uniqid';
import navbarElements from '../../data/data-navbar';

function Navbar({ className }) {
  return (
    <nav className={className}>
      <ul>
        {navbarElements.map((navbarElement) => (
          <li key={uniqid()}>
            <a href={navbarElement.ancre}>{navbarElement.element}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Navbar.propTypes = {
  className: PropTypes.string,
};

Navbar.defaultProps = {
  className: '',
};

export default Navbar;
