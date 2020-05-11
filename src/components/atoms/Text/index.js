import React from 'react';
import PropTypes from 'prop-types';
import { TextStyle } from './styles';
import { Heading, Loading } from '../../index';

const Text = (props) => {
  const isLoading = props.loading;
  const addDarkClass = props.dark ? 'dark' : '';
  const paragraphArray = typeof props.paragraph === 'string' ? [props.paragraph] : props.paragraph;
  const isParagraphArray = typeof props.paragraph === 'object';
  return isLoading ? (
    <TextStyle {...props}>
      <div className={`loading ${addDarkClass}`}>
        <div className='title'>
          {props.titleTextTop && (<div className='smalltext'><Loading width='100px' /></div>)}
          <Heading loading title={props.title} />
          {props.titleTextBottom && (<div className='smalltext'><Loading width='100px' /></div>)}
        </div>
        <div className='paragraphs'>
          {isParagraphArray && paragraphArray.map((item, index) => (
            <p key={index}><span className='loading-text' /></p>
          ))}
        </div>
      </div>
    </TextStyle>
  ) : (
    <TextStyle {...props}>
      <div className={`${addDarkClass}`}>
        <div className='title'>
          {props.titleTextTop && (<div className='smalltext'>{props.titleTextTop}</div>)}
          <Heading text={props.title} />
          {props.titleTextBottom && (<div className='smalltext'>{props.titleTextBottom}</div>)}
        </div>
        <div className='paragraphs'>
          {isParagraphArray && paragraphArray.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </TextStyle>
  );
};

Text.propTypes = {
  title: PropTypes.string,
  titleTextTop: PropTypes.string,
  titleTextBottom: PropTypes.string,
  titleColor: PropTypes.string,
  paragraph: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  dark: PropTypes.bool,
  loading: PropTypes.bool,
};

Text.defaultProps = {
};

export default Text;
