import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from '../../index';
import { TextStyle } from './styles';

const Text = (props) => {
  return (
    <TextStyle>
      <Heading text={props.text} />
    </TextStyle>
  );
};

Text.propTypes = {
  text: PropTypes.string,
};

Text.defaultProps = {
};

export default Text;
