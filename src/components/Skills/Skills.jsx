import React from 'react';
import './Skills.css';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';
import skillsElement from '../../data/data-skills';

function Skills({ className, title, description }) {
  return (
    <div className={className}>
      <img
        src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2014/png/iconmonstr-cpu-2.png&r=113&g=125&b=151"
        alt="chip icon"
        width="70px"
        height="70px"
      />
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
