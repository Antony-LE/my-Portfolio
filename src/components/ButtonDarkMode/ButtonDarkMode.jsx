import React from 'react';
import './ButtonDarkMode.css';
import PropTypes from 'prop-types';

function ButtonDarkMode({ className, toggleDarkMode }) {
  return <button className={className} onClick={toggleDarkMode} type="button">Bright mode !</button>;
}

ButtonDarkMode.propTypes = {
  className: PropTypes.string,
  toggleDarkMode: PropTypes.func.isRequired,
};

ButtonDarkMode.defaultProps = {
  className: '',
};

export default ButtonDarkMode;
