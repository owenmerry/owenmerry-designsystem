import React from 'react';
import PropTypes from 'prop-types';
import { HeadingStyle } from './styles';
import { Loading } from '../../index';

const Heading = (props) => {
  const isLoading = !!props.loading;

  return isLoading ? (
    <HeadingStyle>
      <h1><Loading width='250px' height='60px' /></h1>
    </HeadingStyle>
  ) : (
    <HeadingStyle>
      <h1>{props.text}</h1>
    </HeadingStyle>
  );
};

Heading.propTypes = {
  text: PropTypes.string,
  loading: PropTypes.bool,
};

Heading.defaultProps = {
};

export default Heading;
