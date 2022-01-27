import React from 'react';
import PropTypes from 'prop-types';
import LogoImage from './logo.png';

function Logo({ className }) {
  return (
    <div className={className}>
      <img src={LogoImage} alt={className} width="150px" height="150px" />
    </div>
  );
}

Logo.propTypes = {
  className: PropTypes.string,
};

Logo.defaultProps = {
  className: '',
};

export default Logo;
