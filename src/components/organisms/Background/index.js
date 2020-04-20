import React from 'react';
import PropTypes from 'prop-types';
import { BackgroundStyle } from './styles';

const Background = props => {
  const hasAngle = props.style === 'angle' ? 'angle' : '';

  return (
    <BackgroundStyle
      color={props.color}
      height={props.height}
      className={hasAngle}
    />
  );
};

Background.propTypes = {
  style: PropTypes.string,
  height: PropTypes.string,
  color: PropTypes.string,
};

Background.defaultProps = {};

export default Background;
