import React from 'react';
import {
  FaSlidersH,
  FaBoxes,
  FaShareSquare,
} from 'react-icons/fa';
import PropTypes from 'prop-types';
import { MenuStyle } from './styles';

const MenuHorizontal = props => (
  <MenuStyle>
    <div className='menu-links'>
      <div className='link'>
        <a className={props.page === '/live-links' ? 'selected' : ''}>
          Home
        </a>
      </div>

      <div className='link'>
        <a className={props.page === '/build-link' ? 'selected' : ''}>
          About
        </a>
      </div>

      <div className='link'>
        <a className={props.page === '/components' ? 'selected' : ''}>
          Services
        </a>
      </div>

      <div className='link'>
        <a className={props.page === '/components' ? 'selected' : ''}>
          Contact
        </a>
      </div>
    </div>
  </MenuStyle>
);

MenuHorizontal.propTypes = {
  page: PropTypes.string,
};

MenuHorizontal.defaultProps = {};

export default MenuHorizontal;
