import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';

function Contact({
  className, title, description,
}) {
  return (
    <div className={className}>
      <h3 id="contact">{title}</h3>
      <span>{description}</span>
      <iframe title={title} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.95428144469!2d2.2768237648721743!3d48.858833535318176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis!5e0!3m2!1sfr!2sfr!4v1643287370116!5m2!1sfr!2sfr" width="600" height="450" loading="lazy" />
    </div>
  );
}

Contact.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

Contact.defaultProps = {
  className: '',
  title: '',
  description: '',
};

export default Contact;
