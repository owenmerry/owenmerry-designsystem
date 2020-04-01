import React from 'react';
import PropTypes from 'prop-types';
import { HeaderStyle } from './styles';
import MenuHorizontal from '../../molecules/MenuHorizontal/index';

const Header = props => (
  <HeaderStyle>
    <div className='logo'>
      <a>
        <img src='http://www.webshare.me/images/app/webshare-logo.svg' />
      </a>
    </div>

    <MenuHorizontal {...props.menuSettings} />
  </HeaderStyle>
);

Header.propTypes = {
  page: PropTypes.string,
};

Header.defaultProps = {};

export default Header;
