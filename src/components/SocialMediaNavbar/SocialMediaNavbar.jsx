/* eslint-disable max-len */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import './SocialMediaNavbar.css';
import uniqid from 'uniqid';
import socialMediaNavbarElements from '../../data/data-socialMediaNavbar';

function SocialMediaNavbar({ className }) {
  return (
    <div className={className}>
      {socialMediaNavbarElements.map((socialMediaNavbarElement) => (
        <a key={uniqid()} href={socialMediaNavbarElement.link} target="_blank" rel="noreferrer">
          <img src={socialMediaNavbarElement.icone} alt={className} width="35px" height="35px" />
        </a>
      ))}
    </div>
  );
}

SocialMediaNavbar.propTypes = {
  className: PropTypes.string,
};

SocialMediaNavbar.defaultProps = {
  className: '',
};

SocialMediaNavbar.propTypes = {};

export default SocialMediaNavbar;
