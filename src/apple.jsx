import React from 'react';
import PropTypes from 'prop-types';

const Apple = ({ className, children, ...rest }) => (
  <apple
    className={ className ? `apple-${className}` : 'apple' }
    { ...rest }
  >
    { children }
  </apple>
);

Apple.propTypes = {
  className: PropTypes.string
};

export default Apple;
