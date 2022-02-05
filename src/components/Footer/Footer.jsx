import React from 'react';
import './Footer.css';
import PropTypes from 'prop-types';

function Footer({ className }) {
  return (
    <div className={className}>
      <span>
        ©
        {' '}
        {new Date().getFullYear()}
        {' '}
        design by Antony LE
      </span>
    </div>
  );
}

Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: '',
};

export default React.memo(Footer);
