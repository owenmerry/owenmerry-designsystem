import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { HeaderStyle } from './styles';
import MenuHorizontal from '../../molecules/MenuHorizontal/index';
import { Wrapper, MenuSlide } from '../../index';

const Header = props => {
  const getLogoURL = props.logoURL || 'http://webshare.me/webshare-logo.svg';

  // state
  const [stateMenuMobile, setStateMenuMobile] = useState(false);

  const hideMenuMobile = () => {
    setStateMenuMobile(false);
  };

  const showMenuMobile = () => {
    setStateMenuMobile(true);
  };

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
            <MenuHorizontal menuClicked={showMenuMobile} {...{
              light: true,
              align: 'right',
              items: [
                {icon: 'menu', ref: 'menu'},
              ]
            }} />
          </div>
        </div>
        <MenuSlide show={stateMenuMobile} closeButton={hideMenuMobile} menuSettings={{
          menuClicked: props.menuClicked,
          ...props.menuSettings
        }} />
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
  sticky: PropTypes.bool,
};

Header.defaultProps = {};

export default Header;
