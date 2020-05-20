import React, {useState} from 'react';
import { FaShareSquare } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { CardStyle } from './styles';
import { Button, Link, Loading, MoreDrop } from '../../index';
import moment from 'moment';

const Card = (props) => {
  const { isNew } = props;
  const isLoading = !!props.loading;
  const newWindow = !!props.linkNewWindow;
  const hideLink = !!props.hideLink;
  const hideViewLink = !!props.hideViewLink;
  const cardLink = props.link || '';
  const imageRoundBorder = props.imageRoundBorder ? ' image-roundborder' : '';
  const timeStampRelative = moment(props.timestamp).fromNow();

  return isLoading ? (
    <CardStyle {...props} >
      <div className='card card-loading'>
        <div className='description-top'>
          <div className='title'>
            <Loading />
          </div>
        </div>
        {props.imageShow && (
          <div className={'image ' + imageRoundBorder} />
        )}
        <div className='description'>
          {props.title && (
            <div className='title'><Loading width='150px' /></div>
          )}
          {props.subtitle && (
            <div className='subtitle'>
              <Loading block width='250px' marginBottom='10px' />
              <Loading block width='250px' />
            </div>
          )}
        </div>
      </div>
    </CardStyle>
  ) : (
    <CardStyle {...props}>
      <div className='card'>
        <div className='description-top'>
          <div className='title'>{timeStampRelative}</div>
          <div className='menu'>
            <MoreDrop itemId={props.id} {...props.moreMenuSettings} />
          </div>
        </div>
        {props.imageShow && (
          <Link url={cardLink} newWindow={newWindow}>
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
          </Link>
        )}
        <Link url={cardLink} newWindow={newWindow}>
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
        </Link>
      </div>
    </CardStyle>
  );
};

Card.propTypes = {
  /** show loading state */
  loading: PropTypes.bool,
  /** open in new window */
  linkNewWindow: PropTypes.bool,
  /** hide roll over button */
  hideLink: PropTypes.bool,
  hideViewLink: PropTypes.bool,
  image: PropTypes.string,
  imageHeight: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  link: PropTypes.string,
  marginBottom: PropTypes.string,
  /** show label highlighting there is a fixture */
  hasFixture: PropTypes.bool,
  shadowLarge: PropTypes.bool,
  width: PropTypes.string,
  timestamp: PropTypes.string,
  imageRoundBorder: PropTypes.bool,
  imageShow: PropTypes.bool,
  id: PropTypes.number,
  moreMenuSettings: PropTypes.object,
};

Card.defaultProps = {
  loading: false,
  linkTarget: false,
  hideLink: true,
  hideViewLink: true,
  hasFixture: false,
  imageShow: true,
};

export default Card;
