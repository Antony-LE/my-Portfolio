/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import './Biography.css';

function Biography({ className }) {
  // eslint-disable-next-line max-len
  // eslint-disable-next-line react/no-unescaped-entities
  return (
    <div>
      <span className={className}>Hello moi c'est Antony ou "Tony", pour les intimes. Après avoir travaillé pendant 10 ans dans le commerce et la relation client pour une grande multinationale, je me suis intéressé au développement Web pour finalement tomber amoureux de ce domaine et en faire mon métier !</span>
    </div>
  );
}

Biography.propTypes = {
  className: PropTypes.string,
};

Biography.defaultProps = {
  className: '',
};

export default React.memo(Biography);
