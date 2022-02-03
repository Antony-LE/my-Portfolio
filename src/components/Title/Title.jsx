import React from 'react';
import PropTypes from 'prop-types';
import './Title.css';

function Title({ className, title }) {
  return (
    <div id="home" className={className}>
      <h1>{title}</h1>
    </div>
  );
}

Title.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
};

Title.defaultProps = {
  className: '',
};

export default Title;
