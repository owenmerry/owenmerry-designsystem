import React from 'react';
import PropTypes from 'prop-types';
import { MenuSlideStyle } from './styles';
import { MenuHorizontal, Icon } from '../../index';

const MenuSlide = (props) => {
  return (
    <MenuSlideStyle>
      <div className='background-close' onClick={props.closeButton} />
      <div className='slide'>
        <div className='holder'>
          <div className='close' onClick={props.closeButton}><Icon type='close' /></div>
          <MenuHorizontal
            {...props.menuSettings}
            isVertical />
        </div>
      </div>
    </MenuSlideStyle>
  );
};

MenuSlide.propTypes = {
  menuSettings: PropTypes.object,
  closeButton: PropTypes.func,
};

MenuSlide.defaultProps = {
};

export default MenuSlide;
