import React from 'react';
import PropTypes from 'prop-types';
import { TextStyle } from './styles';

const Text = (props) => {
  const addDarkClass = props.dark ? 'dark' : '';
  const paragraphArray = typeof props.paragraph === 'string' ? [props.paragraph] : props.paragraph;
  return (
    <TextStyle>
      <div className={`${addDarkClass}`}>
        <h1>{props.title}</h1>
        {paragraphArray.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </TextStyle>
  );
};

Text.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
  dark: PropTypes.bool,
};

Text.defaultProps = {
};

export default Text;
