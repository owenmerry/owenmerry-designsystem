import React from 'react';
import PropTypes from 'prop-types';
import { HeroStyle } from './styles';

const Hero = props => (
  <HeroStyle>
    <h1>{props.title}</h1>
    <p>{props.paragraph}</p>
  </HeroStyle>
);

Hero.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.string,
};

Hero.defaultProps = {};

export default Hero;
