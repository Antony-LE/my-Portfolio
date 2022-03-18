/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import './Projects.css';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';
import projectsData from '../../data/data-projects';

function Projects({ className }) {
  return (
    <div>
      {/* <img
        id="projets"
        src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2013/png/iconmonstr-code-2.png&r=113&g=125&b=151"
        alt="logo developement"
        width="70px"
        height="70px"
      /> */}
      <h2>Mes Projets</h2>
      {/* <span id="subtitle">🚧🚧🚧🚨  Under Contructions  🚨🚧 🚧 🚧 </span> */}
      <div className={className}>
        {projectsData.map((project) => (
          <section key={uniqid()}>
            <h3>{project.title}</h3>
            <h4>{project.subtitle}</h4>
            <span>{project.description}</span>
            <a href={project.link} target="_blank" rel="noreferrer">
              <img src={require(`../../assets/${project.image}`)} alt={project.title} />
              {' '}
            </a>
          </section>
        ))}
      </div>

    </div>
  );
}

Projects.propTypes = {
  className: PropTypes.string,
};

Projects.defaultProps = {
  className: '',
};

export default React.memo(Projects);
