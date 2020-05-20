import React from 'react';
import PropTypes from 'prop-types';
import { LoadingStyle } from './styles';

const Loading = (props) => {
  return (
    <LoadingStyle {...props} />
  );
};

Loading.propTypes = {
  text: PropTypes.string,
  block: PropTypes.bool,
};

Loading.defaultProps = {
};

export default Loading;
