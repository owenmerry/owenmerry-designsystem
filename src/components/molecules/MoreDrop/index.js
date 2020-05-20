import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { MoreDropStyle } from './styles';
import { MenuHorizontal, Icon } from '../../../index';

const MoreDrop = (props) => {
  // state
  const [stateShowMenu, setStateShowMenu] = useState(false);

  const toggleMenu = (e) => {
    setStateShowMenu(!stateShowMenu);
  };

  const hideMenu = (e) => {
    setStateShowMenu(false);
  };

  const menuItemClicked = (ref) => {
    hideMenu();
    props.menuClicked({
      ...ref,
      id: props.itemId,
    });
  };

  return (
    <MoreDropStyle>
      <span onClick={toggleMenu}>
        <Icon type='menu-dots' />
      </span>
      {stateShowMenu && <div className='menu-drop'>
        <MenuHorizontal
          {...{
            light: false,
            size: 'small',
            seperator: 'bordertop-nonefirst',
            items: props.items,
          }}
          isVertical
          menuClicked={(ref) => menuItemClicked(ref)}
        />
      </div>
      }
    </MoreDropStyle>
  );
};

MoreDrop.propTypes = {
  MoreDrop: PropTypes.string,
  items: PropTypes.array,
  menuClicked: PropTypes.func,
  itemId: PropTypes.number,
};

MoreDrop.defaultProps = {
};

export default MoreDrop;
