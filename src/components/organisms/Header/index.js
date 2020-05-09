import React from 'react';
import PropTypes from 'prop-types';
import { HeaderStyle } from './styles';
import MenuHorizontal from '../../molecules/MenuHorizontal/index';
import { Wrapper } from '../../index';

const Header = props => {
  const getLogoURL = props.logoURL || 'http://www.webshare.me/images/app/webshare-logo.svg';

  return (
    <HeaderStyle showBorder={props.showBorder} backgroundColor={props.backgroundColor}>
      <Wrapper>
        <div className='menu-wrapper'>
          <div className='logo'>
            <a href='/'>
              <img src={getLogoURL} />
            </a>
          </div>
          <div className='menu'>
            <MenuHorizontal {...props.menuSettings} />
          </div>
        </div>
      </Wrapper>
    </HeaderStyle>
  );
};

Header.propTypes = {
  page: PropTypes.string,
  logoURL: PropTypes.string,
  menuSettings: PropTypes.object,
  backgroundColor: PropTypes.string,
  showBorder: PropTypes.bool,
};

Header.defaultProps = {};

export default Header;
