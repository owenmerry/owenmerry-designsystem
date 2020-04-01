import React from 'react';
import {
  FaSlidersH,
  FaBoxes,
  FaShareSquare,
} from 'react-icons/fa';
import PropTypes from 'prop-types';
import { MenuStyle } from './styles';

const MenuHorizontal = props => {
  // const menuItems = props.items;
  const isDarkStyle = props.dark;
  const isLightStyle = props.light;
  const addClassDark = isDarkStyle ? `menu-dark` : ``;
  const addClassLight = isLightStyle ? `menu-light` : ``;
  const addClassAlign = props.align ? props.align : `left`;
  const menuItems = props.items;
  const hasItems = menuItems && menuItems.length > 0;

  return (
    <MenuStyle>
      { hasItems ? (
        <ul className={`${addClassAlign} ${addClassDark} ${addClassLight}`}>
          {menuItems.map((item, index) => (
            <li key={index}><a href={item.url}>{item.name}</a></li>
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
  // page: PropTypes.string,
};

MenuHorizontal.defaultProps = {};

export default MenuHorizontal;
