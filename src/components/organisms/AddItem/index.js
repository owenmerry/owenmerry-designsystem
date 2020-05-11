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
        <Button loading={isLoading} onClick={showForm}>Add</Button>
      ) : (
        <div>
          <Input
            inline
            value={inputLink}
            onChange={e => setInputLink(e.target.value)}
            placeholder='Paste website link here' />
          <Button onClick={addLink}>Add Link</Button>
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
};

AddItem.defaultProps = {
};

export default AddItem;
