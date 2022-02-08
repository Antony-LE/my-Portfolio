import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';
import Navbar from '../Navbar/Navbar';
import Logo from '../Logo/Logo';
import SocialMediaNavbar from '../SocialMediaNavbar/SocialMediaNavbar';

function Header({ className, darkmode }) {
  return (
    <div className={className}>
      <Navbar className={`${darkmode ? 'navbar' : 'navbar-alt-style'}`} darkmode={darkmode} />
      <Logo className="logo" />
      <SocialMediaNavbar className="socialMediaNavbar" />
    </div>
  );
}
Header.propTypes = {
  className: PropTypes.string,
  darkmode: PropTypes.bool,
};

Header.defaultProps = {
  className: '',
  darkmode: false,
};

export default React.memo(Header);
