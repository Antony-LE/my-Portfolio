import React from 'react';
import './Projects.css';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';
import projectsData from '../../data/data-projects';

function Projects({ className }) {
  return (
    <div className={className}>
      {projectsData.map((project) => (
        <section key={uniqid()}>
          <h2>{project.title}</h2>
          <h3>{project.subtitle}</h3>
          <span>{project.description}</span>
          <img src={project.image} alt={project.title} />
        </section>
      ))}
    </div>
  );
}

Projects.propTypes = {
  className: PropTypes.string,
};

Projects.defaultProps = {
  className: '',
};

export default Projects;
