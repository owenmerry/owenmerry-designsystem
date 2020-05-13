import React from 'react';
import PropTypes from 'prop-types';
import { HeroStyle } from './styles';
import {Button, Link} from '../../index';
import MenuHorizontal from '../../molecules/MenuHorizontal/index';

const Hero = props => {
  const style = props.styleType;
  return (
    <HeroStyle {...props}>
      <div className='menu-top'>
        <MenuHorizontal {...props.menuTopSettings} />
      </div>
      <div className='text'>
        <h1>{props.title}</h1>
        <p>{props.paragraph}</p>
        <Link url={props.buttonUrl}>
          <Button fontColor='white'>{props.buttonLabel}</Button>
        </Link>
      </div>
    </HeroStyle>
  );
};

Hero.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.string,
  buttonLabel: PropTypes.string,
  buttonUrl: PropTypes.string,
};

Hero.defaultProps = {};

export default Hero;
