import React from 'react';
import PropTypes from 'prop-types';
import { InputStyle } from './styles';

const showInput = (props) => {
  let input = '';

  if (props.type === 'checkbox') {
    input = (
      <input
        type="checkbox"
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
        type="text"
        name={props.name}
        className={props.className}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
    );
  }

  return input;
};
const Input = props => <InputStyle>{showInput(props)}</InputStyle>;

Input.propTypes = {
  /** which input to show eg. select, text, checkbox, etc.. */
  type: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;
