import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { MenuStyle } from './styles';

const Menu = props => (
  <MenuStyle>
    <div className="title top">Pages</div>

    <div className="link">
      <Link href="/live-links/all">
        <a className={props.section === 'all' ? 'selected' : ''}>All Pages</a>
      </Link>
    </div>

    <div className="link">
      <Link href="/live-links/search">
        <a className={props.section === 'search' ? 'selected' : ''}>Search Page</a>
      </Link>
    </div>

    <div className="link">
      <Link href="/live-links/car-search">
        <a className={props.section === 'car-search' ? 'selected' : ''}>
          Car Search Results Page
        </a>
      </Link>
    </div>

    <div className="link">
      <Link href="/live-links/car-details">
        <a className={props.section === 'car-details' ? 'selected' : ''}>
          Car Details Page
        </a>
      </Link>
    </div>

    <div className="link">
      <Link href="/live-links/confirmation">
        <a className={props.section === 'confirmation' ? 'selected' : ''}>
          Confirmation Page
        </a>
      </Link>
    </div>

    <div className="link">
      <Link href="/live-links/insurance">
        <a className={props.section === 'insurance' ? 'selected' : ''}>Insurance Page</a>
      </Link>
    </div>
  </MenuStyle>
);

Menu.propTypes = {
  section: PropTypes.string,
};

Menu.defaultProps = {};

export default Menu;
