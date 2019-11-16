import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { HeaderStyle } from './styles';
import MenuHorizontal from '../../molecules/MenuHorizontal/index';

const Header = props => (
  <HeaderStyle>
    <div className="logo">
      <Link href="/live-links/all">
        <a>
          <img src="../../static/images/app/ct-logo-white.png" />
        </a>
      </Link>
    </div>

    <MenuHorizontal page={props.page} />
  </HeaderStyle>
);

Header.propTypes = {
  page: PropTypes.string,
};

Header.defaultProps = {};

export default Header;
