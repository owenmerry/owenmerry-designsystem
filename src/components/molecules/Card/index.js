import React from 'react'
import { FaShareSquare } from 'react-icons/fa'
import PropTypes from 'prop-types'
import { CardStyle } from './styles'
import Button from '../../atoms/Button/index'

const Card = (props) => {
  const { hasFixture } = props
  const isLoading = !!props.loading
  const linkTarget = props.linkTarget ? { target: '_blank' } : {}
  const hideLink = !!props.hideLink
  const hideViewLink = !!props.hideViewLink
  const cardLink = props.link || ''

  return isLoading ? (
    <CardStyle padding={props.padding}>
      <a target='_target'>
        <div className='card card-loading'>
          <div className='image' />
          <div className='description'>
            <div className='title'>
              <span className='loading-text' />
            </div>
            <div className='subtitle'>
              <span className='loading-text' />
            </div>
          </div>
        </div>
      </a>
    </CardStyle>
  ) : (
    <CardStyle image={props.image} padding={props.padding}>
      <a href={cardLink} {...linkTarget}>
        <div className='card'>
          <div className='image'>
            {hideViewLink ? (
              ''
            ) : (
              <Button>
                <FaShareSquare /> View Link
              </Button>
            )}
            {hasFixture ? <div className='label-fixture'>FIXTURE</div> : ''}
          </div>
          <div className='description'>
            <div className='title'>{props.title}</div>
            <div className='subtitle'>{props.subtitle}</div>
            {hideLink ? (
              ''
            ) : (
              <div className='subtitle'>{cardLink.substring(0, 40)}...</div>
            )}
          </div>
        </div>
      </a>
    </CardStyle>
  )
};

Card.propTypes = {
  /** show loading state */
  loading: PropTypes.bool,
  /** open in new window */
  linkTarget: PropTypes.bool,
  /** hide roll over button */
  hideLink: PropTypes.bool,
  hideViewLink: PropTypes.bool,
  image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  link: PropTypes.string,
  padding: PropTypes.bool,
  /** show label highlighting there is a fixture */
  hasFixture: PropTypes.bool
}

Card.defaultProps = {
  loading: false,
  linkTarget: false,
  hideLink: false,
  hideViewLink: false,
  padding: true,
  hasFixture: false
}

export default Card
