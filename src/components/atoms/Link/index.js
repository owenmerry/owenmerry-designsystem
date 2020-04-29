import React from 'react';
import PropTypes from 'prop-types';
import { LinkStyle } from './styles';

const Text = (props) => {
  const openNewWindow = !!props.newWindow;
  const targetType = openNewWindow ? '_target' : '_self';
  return (
    <LinkStyle>
      {props.url ? (
        <a href={props.url} target={targetType}>
          {props.children}
        </a>
      ) : (
        <React.Fragment>
          {props.children}
        </React.Fragment>
      )}
    </LinkStyle>
  );
};

Text.propTypes = {
  url: PropTypes.string,
  newWindow: PropTypes.bool,
  children: PropTypes.element,
};

Text.defaultProps = {
};

export default Text;
