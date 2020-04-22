import React from 'react';
import PropTypes from 'prop-types';
import { TextBlockStyle } from './styles';
import Text from '../../atoms/Text/index';

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
  paragraph: PropTypes.string,
  dark: PropTypes.bool,
};

TextBlock.defaultProps = {
};

export default TextBlock;
