import React from 'react';
import './ProfilePicture.css';
import PropTypes from 'prop-types';

function ProfilePicture({ className, sourcePix }) {
  return (
    <div className={className}>
      <img src={sourcePix} alt={className} height="250px" width="250px" />
    </div>
  );
}

ProfilePicture.propTypes = {
  className: PropTypes.string,
  sourcePix: PropTypes.string,
};

ProfilePicture.defaultProps = {
  className: '',
  sourcePix: '',
};

export default ProfilePicture;
