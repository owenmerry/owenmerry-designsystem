import React from 'react'
import PropTypes from 'prop-types'
import { iconList } from '../../../helpers/icons'

const Icon = (props) => {
  const iconTags = iconList
  const iconTagName = iconTags[props.type]
  return (
    <span>{iconTagName}</span>
  )
}

Icon.propTypes = {
  type: PropTypes.string
}

Icon.defaultProps = {
  type: ''
}

export default Icon
