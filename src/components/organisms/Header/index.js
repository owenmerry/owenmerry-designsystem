import React from 'react';
import PropTypes from 'prop-types';
import { HeaderStyle } from './styles';
import MenuHorizontal from '../../molecules/MenuHorizontal/index';
import { Wrapper } from '../../index';

const Header = props => {
  const getLogoURL = props.logoURL || 'http://www.webshare.me/images/app/webshare-logo.svg';

  return (
    <HeaderStyle {...props}>
      <Wrapper>
        <div className='menu-wrapper'>
          <div className='logo'>
            <a href='/'>
              <img src={getLogoURL} />
            </a>
          </div>
          <div className='menu'>
            <MenuHorizontal menuClicked={props.menuClicked} {...props.menuSettings} />
          </div>
          <div className='menu-mobile'>
            <MenuHorizontal menuClicked={props.menuClicked} {...{
              light: true,
              align: 'right',
              items: [
                {name: 'Menu', ref: '/links'},
              ]
            }} />
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
  menuClicked: PropTypes.bool,
};

Header.defaultProps = {};

export default Header;
