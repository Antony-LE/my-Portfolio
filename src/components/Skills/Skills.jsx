import React from 'react';
import './Skills.css';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';
import skillsElement from '../../data/data-skills';
import checkedIcon from '../../images/icon-checked.png';
import chipIcon from '../../images/icon-skills.png';

function Skills({ className, title, description }) {
  return (
    <div className={className}>
      <img
        id="skills"
        src={chipIcon}
        alt="chip icon"
      />
      <h2>{title}</h2>
      <span>{description}</span>
      <ul>
        {skillsElement.map((skill) => (
          <li key={uniqid()}>
            <img src={checkedIcon} alt="checked icon" height="20px" width="20px" />
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

export default React.memo(Skills);
