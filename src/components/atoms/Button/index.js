import React from 'react'
import PropTypes from 'prop-types'
import { colors } from '../../../helpers/settings'
import Icon from '../Icon'
import { ButtonStyle } from './styles'

const Button = (props) => {
  const showIcon = props.icon || false
  const iconStart = props.iconStart || false
  const addClassSecondary = props.secondary && `button-secondary`
  const addClassCircle = props.circle && `button-circle`

  return (
    <ButtonStyle
      backgroundColor={props.backgroundColor}
      fontColor={props.fontColor}
      fontSize={props.fontSize}
      disabled={props.disabled}
      className={`${addClassSecondary} ${addClassCircle}`}
    >
      {showIcon && iconStart ? (
        <Icon type={props.icon} />
      ) : (
        ''
      )}
      {props.children}
      {showIcon && !iconStart ? (
        <Icon type={props.icon} />
      ) : (
        ''
      )}
    </ButtonStyle>
  )
}

Button.propTypes = {
  fontSize: PropTypes.number,
  fontColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  disabled: PropTypes.boolean,
  children: PropTypes.string,
  icon: PropTypes.string,
  iconStart: PropTypes.boolean
}

Button.defaultProps = {
  fontSize: 12,
  fontColor: 'white',
  backgroundColor: colors.blue,
  disabled: false
}

export default Button
