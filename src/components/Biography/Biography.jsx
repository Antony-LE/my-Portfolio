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
      <div className={className}>
        <span>Après une carrière de 10 ans dans la relation client et le commerce, j'ai poursuivi une formation de développeur Web Fullstack JavaScript avec une spécialité REACT au sein de l'organisme O'clock.</span>
        <span> Passionné de nouvelles technologies, mes précédentes expériences commerciales et managériales m’ont permis d’acquérir des compétences utiles dans le monde du développement. A savoir la maitrise de l’anglais dans un contexte professionnel, la résistance au stress et l’art de négocier avec des clients ayant des exigences techniques précises et des deadlines courtes.</span>
        <span>Ayant évolué dans un environnement technique lors de ma précédente expérience j’ai apprécié pouvoir identifier et proposer des solutions viables à mes clients. Manager confirmé, j’ai pour habitude de diffuser une communication continuelle, efficace et bienveillante.</span>
      </div>
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
