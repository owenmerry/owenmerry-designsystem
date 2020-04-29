import React from 'react';
import PropTypes from 'prop-types';
import { LoadingStyle } from './styles';

const Text = (props) => {
  return (
    <LoadingStyle {...props} />
  );
};

Text.propTypes = {
  text: PropTypes.string,
  block: PropTypes.bool,
};

Text.defaultProps = {
};

export default Text;
