import React from 'react';
import PropTypes from 'prop-types';
import { MenuStyle } from './styles';
import { Link, Icon } from '../../index';

const MenuHorizontal = props => {
  // const menuItems = props.items;
  const isDarkStyle = props.dark;
  const isLightStyle = props.light;
  const addClassDark = isDarkStyle ? `menu-dark` : ``;
  const addClassLight = isLightStyle ? `menu-light` : ``;
  const addClassAlign = props.align ? props.align : `left`;
  const addClassSize = props.size ? props.size : `normal`;
  const addClassBorder = props.seperator ? 'seperator-' + props.seperator : ``;
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
    if (props.menuClicked) {
      props.menuClicked({ref: ref});
    };
  };

  return (
    <MenuStyle {...props}>
      { hasItems ? (
        <ul className={`${addStyleClass()} ${addClassBorder} ${addClassSize} ${addClassAlign} ${addClassDark} ${addClassLight}`}>
          {menuItems.map((item, index) => item && (
            <li key={index} className={`${item.selected ? 'selected' : ''} ${index === 0 ? 'top' : ''}`}>
              <span className='link' onClick={() => menuClicked(item.ref)}>
                <Link url={item.url}>
                  {item.icon && (<Icon type={item.icon} />)}
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
  isVertical: PropTypes.bool,
  size: PropTypes.string,
  seperator: PropTypes.string,
};

MenuHorizontal.defaultProps = {};

export default MenuHorizontal;
