import React from 'react';
import Link from 'next/link';
import {
  FaSlidersH,
  FaBoxes,
  FaSitemap,
  FaShareSquare,
  FaUserCircle,
} from 'react-icons/fa';
import PropTypes from 'prop-types';
import { MenuStyle } from './styles';

const MenuHorizontal = props => (
  <MenuStyle>
    <div class="menu-links">
      <div className="link">
        <Link href="/live-links/all">
          <a className={props.page === '/live-links' ? 'selected' : ''}>
            <FaShareSquare /> Live Links
          </a>
        </Link>
      </div>

      <div className="link">
        <Link href="/build-link">
          <a className={props.page === '/build-link' ? 'selected' : ''}>
            <FaSlidersH /> Build Link
          </a>
        </Link>
      </div>

      <div className="link">
        <Link href="/components/buttons">
          <a className={props.page === '/components' ? 'selected' : ''}>
            <FaBoxes /> Components
          </a>
        </Link>
      </div>
    </div>
  </MenuStyle>
);

MenuHorizontal.propTypes = {
  page: PropTypes.string,
};

MenuHorizontal.defaultProps = {};

export default MenuHorizontal;
