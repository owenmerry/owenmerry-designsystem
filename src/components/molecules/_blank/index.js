import React from 'react';
import PropTypes from 'prop-types';
import { TextStyle } from './styles';

const Text = (props) => {
  return (
    <TextStyle>
      <h1>{props.text}</h1>
    </TextStyle>
  );
};

Text.propTypes = {
  text: PropTypes.string,
};

Text.defaultProps = {
};

export default Text;
