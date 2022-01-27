import React from 'react';
import './ProfilePicture.css';
import PropTypes from 'prop-types';

function ProfilePicture({ className }) {
  return (
    <div className={className}>
      <img src="./maPhoto.png" alt={className} height="300px" width="300px" />
    </div>
  );
}

ProfilePicture.propTypes = {
  className: PropTypes.string,
};

ProfilePicture.defaultProps = {
  className: '',
};

export default ProfilePicture;
