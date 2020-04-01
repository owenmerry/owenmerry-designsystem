import React from 'react';
import PropTypes from 'prop-types';
import { HeroStyle } from './styles';
import Button from '../../atoms/Button/index';
import MenuHorizontal from '../../molecules/MenuHorizontal/index';

const Hero = props => (
  <HeroStyle>
    <div className='menu-top'>
      <MenuHorizontal {...props.menuTopSettings} />
    </div>
    <div className='text'>
      <h1>{props.title}</h1>
      <p>{props.paragraph}</p>
      <Button secondary fontColor='white'>{props.buttonLabel}</Button>
    </div>
  </HeroStyle>
);

Hero.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.string,
  buttonLabel: PropTypes.string,
};

Hero.defaultProps = {};

export default Hero;
