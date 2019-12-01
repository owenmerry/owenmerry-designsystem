import React from 'react';
import PropTypes from 'prop-types';
import { HeaderStyle } from './styles';
import MenuHorizontal from '../../molecules/MenuHorizontal/index';

const Header = props => (
  <HeaderStyle>
    <div className='logo'>
      <a>
        <img src='../../static/images/app/ct-logo-white.png' />
      </a>
    </div>

    <MenuHorizontal page={props.page} />
  </HeaderStyle>
);

Header.propTypes = {
  page: PropTypes.string,
};

Header.defaultProps = {};

export default Header;
