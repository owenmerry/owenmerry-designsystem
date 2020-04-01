import React from 'react';
import PropTypes from 'prop-types';
import { HeadingStyle } from './styles';

const Heading = (props) => {
  return (
    <HeadingStyle>
      <h1>{props.text}</h1>
    </HeadingStyle>
  );
};

Heading.propTypes = {
  text: PropTypes.string,
};

Heading.defaultProps = {
};

export default Heading;
