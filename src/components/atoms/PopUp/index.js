import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { PopUpStyle } from './styles';
import { Icon } from '../../index';

// animation
import { motion, AnimatePresence } from 'framer-motion';
import { animateBox, animateOverlay, animateClose, animatePanel } from './animations';
import { normalTransition } from '../../../helpers/animations';

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
    <AnimatePresence>
      {stateShowPopUp && <div className='box'>
        <motion.div className='overlay'
          variants={animateOverlay}
          initial='closed'
          animate={stateShowPopUp ? 'open' : 'closed'}
          exit='closed'
          transition={normalTransition}
          onClick={hidePopUp} />
        {/* <motion.div
          className='close'
          variants={animateClose}
          initial='closed'
          exit='closed'
          animate={stateShowPopUp ? 'open' : 'closed'}
          transition={normalTransition}
          onClick={hidePopUp}><Icon type='close' /></motion.div> */}
        <motion.div
          className='panel'
          variants={animatePanel}
          initial='closed'
          exit='closed'
          animate={stateShowPopUp ? 'open' : 'closed'}
          transition={normalTransition}
        >
          {props.children}
        </motion.div>
      </div>
      }
    </AnimatePresence>
  </PopUpStyle>);
};

PopUp.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  show: PropTypes.bool,
  onPopUpHidden: PropTypes.func,
};

PopUp.defaultProps = {
};

export default PopUp;
