import React from 'react';
import PropTypes from 'prop-types';
import './Title.css';

function Title({ className, title }) {
  return (
    <div className={className}>
      <img
        id="home"
        alt="chip icon"
        width="5px"
        height="5px"
      />
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

export default React.memo(Title);
