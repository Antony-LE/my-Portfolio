import React from 'react';
import './ButtonDarkMode.css';
import PropTypes from 'prop-types';

function ButtonDarkMode({ className, toggleDarkMode, darkmode }) {
  return <button className={className} onClick={toggleDarkMode} type="button">{darkmode ? 'Bright Mode' : 'Dark Mode'}</button>;
}

ButtonDarkMode.propTypes = {
  className: PropTypes.string,
  toggleDarkMode: PropTypes.func.isRequired,
  darkmode: PropTypes.bool,
};

ButtonDarkMode.defaultProps = {
  className: '',
  darkmode: false,
};

export default React.memo(ButtonDarkMode);
