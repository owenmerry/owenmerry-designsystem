import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../../molecules/Menu';
import MenuDynamic from '../../molecules/MenuDynamic';
import Header from '../Header';

import { LayoutStyle, GlobalStyle } from './styles';

const Layout = (props) => {
  const showMenu = !props.hideMenu;

  return (
    <LayoutStyle>
      <GlobalStyle whiteColor />
      <div className="app">
        <div className="header">
          <Header page={props.page} />
        </div>
        <div className="content">
          {showMenu ? (
            <div className="menu">
              {props.layout === undefined || props.layout === 'live-link' ? (
                <Menu links={props.links} section={props.section} />
              ) : (
                ''
              )}
              {props.layout === 'component' ? (
                <MenuDynamic section={props.section} />
              ) : (
                ''
              )}
            </div>
          ) : (
            ''
          )}
          <div className="viewer">
            <div className="viewer-holder">{props.children}</div>
          </div>
        </div>
      </div>
    </LayoutStyle>
  );
};

Layout.propTypes = {
  hideMenu: PropTypes.bool,
  page: PropTypes.string,
  layout: PropTypes.string,
  links: PropTypes.object,
  section: PropTypes.string,
};

Layout.defaultProps = {
  hideMenu: false,
  layout: 'live-link',
};

export default Layout;
