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
        'Je suis aussi un papa poule 🧑‍🍼',
        2000,
        'Un coureur du Dimanche 👟',
        2000,
        'Et un grand amateur de 🍣🤤 ',
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

export default React.memo(BiographyTypical);
