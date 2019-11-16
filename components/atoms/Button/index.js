import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { colors } from '../../../helpers/settings';

const ButtonStyle = styled.button`
  font-family: 'Arial';
  background-color: ${props => props.backgroundColor};
  color: ${props => props.fontColor};
  padding: 13px 38px;
  border-radius: 10px;
  font-size: ${props => props.fontSize}px;
  font-weight: 600;
  box-shadow: 0px 0px 8px 4px rgba(255, 255, 255, 0.1);
  text-align: center;
  cursor: pointer;
  display: inline-block;
  :disabled {
    background-color: #dcdcdc;
    color: white;
  }
`;
const Button = (props) => {
  const disabled = props.disabled || false;

  return (
    <ButtonStyle
      backgroundColor={props.backgroundColor}
      fontColor={props.fontColor}
      fontSize={props.fontSize}
      disabled={props.disabled}
    >
      {props.children}
    </ButtonStyle>
  );
};

Button.propTypes = {
  fontSize: PropTypes.number,
  fontColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  disabled: PropTypes.boolean,
};

Button.defaultProps = {
  fontSize: 12,
  fontColor: 'white',
  backgroundColor: colors.blue,
  disabled: false,
};

export default Button;
