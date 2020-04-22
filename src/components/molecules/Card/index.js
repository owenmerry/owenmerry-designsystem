import React from 'react';
import { FaShareSquare } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { CardStyle } from './styles';
import Button from '../../atoms/Button/index';
import moment from 'moment';

const Card = (props) => {
  const { isNew } = props;
  const isLoading = !!props.loading;
  const linkTarget = props.linkTarget ? { target: '_blank' } : {};
  const hideLink = !!props.hideLink;
  const hideViewLink = !!props.hideViewLink;
  const cardLink = props.link || '';
  const imageRoundBorder = props.imageRoundBorder ? ' image-roundborder' : '';
  const timeStampRelative = moment(props.timestamp).fromNow();

  return isLoading ? (
    <CardStyle
      padding={props.padding}
      shadowLarge={props.shadowLarge}
      imageHeight={props.imageHeight}
      width={props.width}
    >
      <a target='_target'>
        <div className='card card-loading'>
          <div className='description-top'>
            <div className='title'>
              <span className='loading-text' />
            </div>
          </div>
          <div className={'image ' + imageRoundBorder} />
          <div className='description'>
            <div className='subtitle'>
              <span className='loading-text' />
              <span className='loading-text' />
            </div>
          </div>
        </div>
      </a>
    </CardStyle>
  ) : (
    <CardStyle
      image={props.image}
      padding={props.padding}
      shadowLarge={props.shadowLarge}
      imageHeight={props.imageHeight}
      width={props.width}
    >
      {/* <a href={cardLink} {...linkTarget}> */}
      <div className='card'>
        <div className='description-top'>
          <div className='title'>{timeStampRelative}</div>
        </div>
        <div className={'image ' + imageRoundBorder}>
          {hideViewLink ? (
            ''
          ) : (
            <Button>
              <FaShareSquare /> View Link
            </Button>
          )}
          {isNew ? <div className='label-fixture'>NEW</div> : ''}
        </div>
        <div className='description'>
          {props.title ? (
            <div className='title'>{props.title}</div>) : ''}
          <div className='subtitle'>{props.subtitle}</div>
          {hideLink ? (
            ''
          ) : (
            <div className='subtitle'>{cardLink.substring(0, 40)}...</div>
          )}
        </div>
      </div>
      {/* </a> */}
    </CardStyle>
  );
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
  imageHeight: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  link: PropTypes.string,
  padding: PropTypes.bool,
  /** show label highlighting there is a fixture */
  hasFixture: PropTypes.bool,
  shadowLarge: PropTypes.bool,
  width: PropTypes.string,
};

Card.defaultProps = {
  loading: false,
  linkTarget: false,
  hideLink: true,
  hideViewLink: true,
  padding: true,
  hasFixture: false
};

export default Card;
