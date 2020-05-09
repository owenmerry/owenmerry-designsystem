import React from 'react';
import PropTypes from 'prop-types';
import { WrapperStyle } from './styles';

const Wrapper = (props) => {
  return (
    <WrapperStyle>
      <div className='box'>
        {props.children}
      </div>
    </WrapperStyle>
  );
};

Wrapper.propTypes = {
};

Wrapper.defaultProps = {
};

export default Wrapper;
