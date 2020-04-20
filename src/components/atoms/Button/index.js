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
  const onClick = props.onClick;

  return (
    <ButtonStyle
      backgroundColor={colorBackground}
      fontColor={colorFont}
      fontSize={props.fontSize}
      disabled={props.disabled}
      className={`${addClassSecondary} ${addClassCircle} ${addClassNoText}`}
      onClick={onClick}
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
  disabled: PropTypes.bool,
  children: PropTypes.string,
  icon: PropTypes.string,
  iconStart: PropTypes.bool,
  circle: PropTypes.bool,
  secondary: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  fontSize: 12,
  disabled: false
};

export default Button;
