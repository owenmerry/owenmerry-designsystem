import React from 'react';
import PropTypes from 'prop-types';
import { MenuSlideStyle } from './styles';
import { MenuHorizontal, Icon } from '../../index';
import { motion, AnimatePresence } from 'framer-motion';
import { animateSlide, animateBackground } from './animations';
import { normalTransition } from '../../../helpers/animations';

const MenuSlide = (props) => {
  const showMenu = props.show;

  return (
    <MenuSlideStyle>
      <AnimatePresence>
        {showMenu &&
        <div>
          <motion.div
            className='background-close'
            onClick={props.closeButton}
            variants={animateBackground}
            initial='closed'
            exit='closed'
            animate={showMenu ? 'open' : 'closed'}
          />
          <motion.div
            className='slide'
            variants={animateSlide}
            initial='closed'
            exit='closed'
            animate={showMenu ? 'open' : 'closed'}
            transition={normalTransition}
          >
            <div className='holder'>
              <div className='close' onClick={props.closeButton}><Icon type='close' /></div>
              <MenuHorizontal
                {...props.menuSettings}
                isVertical />
            </div>
          </motion.div>
        </div>
        }
      </AnimatePresence>
    </MenuSlideStyle>
  );
};

MenuSlide.propTypes = {
  menuSettings: PropTypes.object,
  closeButton: PropTypes.func,
  show: PropTypes.bool,
};

MenuSlide.defaultProps = {
};

export default MenuSlide;
