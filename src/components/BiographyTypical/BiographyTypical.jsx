import React from 'react';
import PropTypes from 'prop-types';
import Typical from 'react-typical';
import './BiographyTypical.css';

function BiographyTypical({ className }) {
  return (

    <Typical
      id="about"
      className={className}
      loop={Infinity}
      wrapper="p"
      steps={[
        'Je suis un développeur Web Fullstack JS 💻',
        2000,
        'Je suis un papa poule 🧑‍🍼',
        2000,
        'Je suis un coureur du Dimanche 👟',
        2000,
      ]}
    />

  );
}

BiographyTypical.propTypes = {
  className: PropTypes.string,
};

BiographyTypical.defaultProps = {
  className: '',
};

export default BiographyTypical;
