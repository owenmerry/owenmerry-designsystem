import React from 'react';
import PropTypes from 'prop-types';
import { AlertStyle } from './styles';

const Alert = (props) => {
  return (
    <AlertStyle>
      {props.text && props.type === 'error' && (
        <div className='alert error'>{props.text}</div>
      )}
      {props.text && props.type === 'warning' && (
        <div className='alert warning'>{props.text}</div>
      )}
      {props.text && props.type === 'success' && (
        <div className='alert success'>{props.text}</div>
      )}
    </AlertStyle>
  );
};

Alert.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
};

Alert.defaultProps = {
};

export default Alert;
