import React from 'react';
import PropTypes from 'prop-types';
import { TextBlockStyle } from './styles';
import { Text } from '../../index';

const TextBlock = (props) => {
  const addDarkClass = props.dark ? 'dark' : '';
  return (
    <TextBlockStyle {...props}>
      <div className={`holder ${addDarkClass}`}>
        <div className='text'>
          <Text
            title={props.title}
            paragraph={props.paragraph}
            dark={props.dark}
          />
        </div>
      </div>
    </TextBlockStyle>
  );
};

TextBlock.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
  dark: PropTypes.bool,
};

TextBlock.defaultProps = {
};

export default TextBlock;
