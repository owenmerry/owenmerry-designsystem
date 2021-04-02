import React from 'react';
import PropTypes from 'prop-types';
import { InputStyle } from './styles';
import { Loading, Icon } from '../../index';

const showInput = (props) => {
  const isLoading = props.loading;
  let input = '';

  if (props.type === 'checkbox') {
    input = (
      <input
        type='checkbox'
        name={props.name}
        className={props.className}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
    );
  } else if (props.type === 'textarea') {
    input = (
      <textarea
        name={props.name}
        className={props.className}
        placeholder={props.placeholder}
        onChange={props.onChange}
      >{props.value}</textarea>
    );
  } else if (props.type === 'password') {
    input = (
      <input
        type='password'
        name={props.name}
        className={props.className}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
    );
  } else if (props.type === 'select') {
    input = (
      <select>
        <option>-- Select --</option>
      </select>
    );
  } else {
    input = (
      <input
        type='text'
        name={props.name}
        ref={props.ref}
        className={props.className}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
    );
  }

  // loading style
  const inputLoading = (
    <Loading alignMiddle className={props.className} width='200px' height='45px' />
  );

  return isLoading ? inputLoading : input;
};

const Input = props => {
  // functions
  const clearButton = () => {
    props.clearClick && props.clearClick();
  };

  return (<InputStyle {...props}>
    <span className='wrap'>
      {props.clearShow && !props.loading && (
        <span onClick={clearButton} className='clear-icon'><Icon type='close-circle' /></span>
      )}
      {showInput(props)}
    </span>
  </InputStyle>);
};

Input.propTypes = {
  /** which input to show eg. select, text, checkbox, etc.. */
  type: PropTypes.string,
  width: PropTypes.string,
  clearShow: PropTypes.bool,
  clearClick: PropTypes.func,
  loading: PropTypes.bool,
  small: PropTypes.bool,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
