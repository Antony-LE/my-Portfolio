import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';
import Navbar from '../Navbar/Navbar';
import Logo from '../Logo/Logo';
import SocialMediaNavbar from '../SocialMediaNavbar/SocialMediaNavbar';

function Header({ className }) {
  return (
    <div className={className}>
      <Navbar className="navbar" />
      <Logo className="logo" />
      <SocialMediaNavbar className="socialMediaNavbar" />
    </div>
  );
}
Header.propTypes = {
  className: PropTypes.string,
};

Header.defaultProps = {
  className: '',
};

export default Header;
