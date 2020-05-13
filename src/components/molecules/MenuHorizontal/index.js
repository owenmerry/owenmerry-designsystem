import React from 'react';
import PropTypes from 'prop-types';
import { MenuStyle } from './styles';
import { Link } from '../../index';

const MenuHorizontal = props => {
  // const menuItems = props.items;
  const isDarkStyle = props.dark;
  const isLightStyle = props.light;
  const addClassDark = isDarkStyle ? `menu-dark` : ``;
  const addClassLight = isLightStyle ? `menu-light` : ``;
  const addClassAlign = props.align ? props.align : `left`;
  const menuItems = props.items;
  const hasItems = menuItems && menuItems.length > 0;
  const addStyleClass = () => {
    let styleClass = '';
    if (props.style === 'background') {
      styleClass = styleClass + 'menu-background';
    }
    return styleClass;
  };

  const menuClicked = (ref) => {
    console.log(`clicked ${ref}`);
    if (props.menuClicked) {
      props.menuClicked({ref: ref});
    };
  };

  return (
    <MenuStyle>
      { hasItems ? (
        <ul className={`${addStyleClass()} ${addClassAlign} ${addClassDark} ${addClassLight}`}>
          {menuItems.map((item, index) => (
            <li key={index} className={item.selected ? 'selected' : ''}>
              <span className='link' onClick={() => menuClicked(item.ref)}>
                <Link url={item.url}>
                  {item.name}
                </Link>
              </span>
            </li>
          )
          )}
        </ul>
      ) : (
        ''
      )}
    </MenuStyle>
  );
};

MenuHorizontal.propTypes = {
  menuClicked: PropTypes.func,
};

MenuHorizontal.defaultProps = {};

export default MenuHorizontal;
