import React from 'react';
import PropTypes from 'prop-types';

function Logo({ className }) {
  return (
    <div className={className}>
      <img src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2013/png/iconmonstr-code-2.png&r=255&g=255&b=255" alt={className} width="100px" height="100px" />
    </div>
  );
}

Logo.propTypes = {
  className: PropTypes.string,
};

Logo.defaultProps = {
  className: '',
};

export default Logo;