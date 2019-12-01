import React from 'react';
import PropTypes from 'prop-types';
import { MenuStyle } from './styles';

const Menu = props => (
  <MenuStyle>
    <div className='title top'>Pages</div>

    <div className='link'>
      <a className={props.section === 'all' ? 'selected' : ''}>All Pages</a>
    </div>

    <div className='link'>
      <a className={props.section === 'search' ? 'selected' : ''}>Search Page</a>
    </div>

    <div className='link'>
      <a className={props.section === 'car-search' ? 'selected' : ''}>
          Car Search Results Page
      </a>
    </div>

    <div className='link'>
      <a className={props.section === 'car-details' ? 'selected' : ''}>
          Car Details Page
      </a>
    </div>

    <div className='link'>
      <a className={props.section === 'confirmation' ? 'selected' : ''}>
          Confirmation Page
      </a>
    </div>

    <div className='link'>
      <a className={props.section === 'insurance' ? 'selected' : ''}>Insurance Page</a>
    </div>
  </MenuStyle>
);

Menu.propTypes = {
  section: PropTypes.string,
};

Menu.defaultProps = {};

export default Menu;
