import React from 'react';
import PropTypes from 'prop-types';
import './Logo.css';
import logoPicture from '../../images/logo.png';

function Logo({ className }) {
  return (
    <div className={className}>
      <img src={logoPicture} alt="logo" />
    </div>
  );
}

Logo.propTypes = {
  className: PropTypes.string,
};

Logo.defaultProps = {
  className: '',
};

export default React.memo(Logo);
