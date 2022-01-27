import React from 'react';
import './ButtonDarkMode.css';
import PropTypes from 'prop-types';

function ButtonDarkMode({ className, toggleDarkMode }) {
  return <div className={className}><button onClick={toggleDarkMode} type="button">Dark mode</button></div>;
}

ButtonDarkMode.propTypes = {
  className: PropTypes.string,
  toggleDarkMode: PropTypes.func.isRequired,
};

ButtonDarkMode.defaultProps = {
  className: '',
};

export default ButtonDarkMode;
