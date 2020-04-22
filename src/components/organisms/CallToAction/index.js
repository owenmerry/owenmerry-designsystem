import React from 'react';
import PropTypes from 'prop-types';
import { CallToActionStyle } from './styles';
import Button from '../../atoms/Button/index';

const CallToAction = props => {
  const lightFontColor = props.light ? 'black' : 'white';
  const linkTarget = props.linkExternal ? '_blank' : '_self';
  return (
    <CallToActionStyle {...props}>
      <div className='text'>
        <h2>{props.title}</h2>
        <p>{props.paragraph}</p>
        <a href={props.href} target={linkTarget}>
          <Button secondary fontColor={lightFontColor}>
            {props.buttonLabel}
          </Button>
        </a>
      </div>
    </CallToActionStyle>
  );
};

CallToAction.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.string,
  buttonLabel: PropTypes.string,
  light: PropTypes.bool,
  linkExternal: PropTypes.bool,
  href: PropTypes.bool,
};

CallToAction.defaultProps = {};

export default CallToAction;
