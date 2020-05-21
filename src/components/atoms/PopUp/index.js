import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { PopUpStyle } from './styles';
import { Icon } from '../../index';

const PopUp = (props) => {
  const showProp = props.show;

  // state
  const [stateShowPopUp, setStateShowPopUp] = useState(showProp);

  useEffect(() => {
    setStateShowPopUp(props.show);
  }, [showProp]);

  const hidePopUp = () => {
    props.onPopUpHidden();
    setStateShowPopUp(false);
  };

  return (<PopUpStyle>
    {stateShowPopUp && (
      <div className='box'>
        <div className='overlay' onClick={hidePopUp} />
        <div className='close' onClick={hidePopUp}><Icon type='close' /></div>
        <div className='panel'>
          {props.children}
        </div>
      </div>
    )}
  </PopUpStyle>);
};

PopUp.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  show: PropTypes.bool,
  onPopUpHidden: PropTypes.func,
};

PopUp.defaultProps = {
};

export default PopUp;
