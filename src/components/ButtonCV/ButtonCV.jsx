import React from 'react';
import './ButtonCV.css';
import PropTypes from 'prop-types';

function ButtonCV({ className }) {
  return <a className={className} href="./AntonyLE-CV.pdf">Télécharger mon cv PDF</a>;
}

ButtonCV.propTypes = {
  className: PropTypes.string,
};

ButtonCV.defaultProps = {
  className: '',
};

export default ButtonCV;
