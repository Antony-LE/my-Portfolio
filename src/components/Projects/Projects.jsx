import React from 'react';
import './Projects.css';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';
import projectsData from '../../data/data-projects';

function Projects({ className }) {
  return (
    <>
      <h2>Mes Projets</h2>
      <span>🚧🚧🚧🚨  Under Contruction  🚨🚧 🚧 🚧 </span>
      <div className={className}>
        {projectsData.map((project) => (
          <section key={uniqid()}>
            <h3>{project.title}</h3>
            <h4>{project.subtitle}</h4>
            <span>{project.description}</span>
            <img src={project.image} alt={project.title} />
          </section>
        ))}
      </div>

    </>
  );
}

Projects.propTypes = {
  className: PropTypes.string,
};

Projects.defaultProps = {
  className: '',
};

export default Projects;
