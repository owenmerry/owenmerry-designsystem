import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { MoreDropStyle } from './styles';
import { MenuHorizontal, Icon } from '../../../index';

// animation
import { motion, AnimatePresence } from 'framer-motion';
import { animateDropdown } from './animations';
import { normalTransition } from '../../../helpers/animations';

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
      {stateShowMenu &&
        <div className='overlay' onClick={toggleMenu} />
      }
      <AnimatePresence>
        {stateShowMenu &&
        <motion.div
          className='menu-drop'
          variants={animateDropdown}
          initial='closed'
          exit='closed'
          animate={stateShowMenu ? 'open' : 'closed'}
          transition={normalTransition}
        >
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
        </motion.div>
        }
      </AnimatePresence>
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
