import React from 'react';
import './ButtonCV.css';
import PropTypes from 'prop-types';

function ButtonCV({ className }) {
  return <a className={className} href="./AntonyLE-CV.pdf" target="_blank">Télécharger mon CV PDF</a>;
}

ButtonCV.propTypes = {
  className: PropTypes.string,
};

ButtonCV.defaultProps = {
  className: '',
};

export default ButtonCV;
