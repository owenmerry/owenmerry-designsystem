import React from 'react';
import PropTypes from 'prop-types';
import { colors } from '../../../helpers/settings';
import Icon from '../Icon';
import { ButtonStyle } from './styles';

const Button = (props) => {
  const showIcon = props.icon || false;
  const iconStart = props.iconStart || false;
  const isSecondary = props.secondary;
  const colorBackground = (isSecondary ? props.fontColor : false) || props.backgroundColor || colors.primary;
  const colorFont = props.fontColor || colors.primaryText;
  const addClassSecondary = isSecondary ? `button-secondary` : ``;
  const addClassCircle = props.circle ? `button-circle` : ``;
  const addClassNoText = props.children ? `` : `button-no-text`;

  return (
    <ButtonStyle
      backgroundColor={colorBackground}
      fontColor={colorFont}
      fontSize={props.fontSize}
      disabled={props.disabled}
      className={`${addClassSecondary} ${addClassCircle} ${addClassNoText}`}
    >
      {showIcon && iconStart ? (
        <span className='button--icon-before'>
          <Icon type={props.icon} />
        </span>
      ) : (
        ''
      )}

      {props.children ? (
        <span>{props.children}</span>
      ) : (
        ''
      )}

      {showIcon && !iconStart ? (
        <span className='button--icon-after'>
          <Icon type={props.icon} />
        </span>
      ) : (
        ''
      )}
    </ButtonStyle>
  );
};

Button.propTypes = {
  fontSize: PropTypes.number,
  fontColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  disabled: PropTypes.boolean,
  children: PropTypes.string,
  icon: PropTypes.string,
  iconStart: PropTypes.boolean,
  circle: PropTypes.boolean,
  secondary: PropTypes.boolean
};

Button.defaultProps = {
  fontSize: 12,
  disabled: false
};

export default Button;
