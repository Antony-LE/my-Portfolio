import React from 'react';
import './Skills.css';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';
import skillsElement from '../../data/data-skills';

function Skills({ className, title, description }) {
  return (
    <div className={className}>
      <h2>{title}</h2>
      <span>{description}</span>
      <ul>
        {skillsElement.map((skill) => (
          <li key={uniqid()}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

Skills.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

Skills.defaultProps = {
  className: '',
  title: '',
  description: '',
};

export default Skills;
