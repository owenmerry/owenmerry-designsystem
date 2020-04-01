import React from 'react';
import PropTypes from 'prop-types';
import { CallToActionStyle } from './styles';
import Button from '../../atoms/Button/index';

const CallToAction = props => (
  <CallToActionStyle>
    <div className='text'>
      <h2>{props.title}</h2>
      <p>{props.paragraph}</p>
      <Button secondary fontColor='white'>{props.buttonLabel}</Button>
    </div>
  </CallToActionStyle>
);

CallToAction.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.string,
  buttonLabel: PropTypes.string,
};

CallToAction.defaultProps = {};

export default CallToAction;
