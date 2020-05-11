import React from 'react';
import PropTypes from 'prop-types';
import { InputStyle } from './styles';
import { Loading } from '../../index';

const showInput = (props, ref) => {
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
const Input = props => <InputStyle {...props}>{showInput(props)}</InputStyle>;

Input.propTypes = {
  /** which input to show eg. select, text, checkbox, etc.. */
  type: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
