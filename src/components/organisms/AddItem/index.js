import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AddItemStyle } from './styles';
import { Button, Input } from '../../index';

const AddItem = (props) => {
  const isLoading = props.loading;
  const [ showInput, setShowInput ] = useState(false);
  const [ inputLink, setInputLink ] = useState('');

  function showForm() {
    setShowInput(true);
  }

  function hideForm() {
    setShowInput(false);
  }

  const addClipboard = async () => {
    const text = await navigator.clipboard.readText();
    if (text) {
      setInputLink(text);
    }
  };

  const addLink = () => {
    props.addItem(inputLink);
    setInputLink('');
  };

  return (
    <AddItemStyle {...props}>
      {!showInput ? (
        <Button
          icon='add'
          iconStart
          loading={isLoading}
          onClick={showForm}
        >{props.buttonLabel}</Button>
      ) : (
        <div>
          <span className='input'>
            <Input
              inline
              value={inputLink}
              onChange={e => setInputLink(e.target.value)}
              placeholder={props.inputPlaceholder}
              clearShow={inputLink !== ''}
              clearClick={() => setInputLink('')}
            />
          </span>
          <span className='button'>
            <Button onClick={addLink}>{props.buttonLabel}</Button>
          </span>
          <span className='button'>
            <Button secondary onClick={hideForm}>Hide</Button>
          </span>
          {/* <Button onClick={addClipboard}>Add Clipboard</Button>
          <Button onClick={hideForm}>Close</Button> */}
        </div>

      )}
    </AddItemStyle>
  );
};

AddItem.propTypes = {
  addItem: PropTypes.func,
  loading: PropTypes.bool,
  inputPlaceholder: PropTypes.string,
  buttonLabel: PropTypes.string,
};

AddItem.defaultProps = {
};

export default AddItem;
