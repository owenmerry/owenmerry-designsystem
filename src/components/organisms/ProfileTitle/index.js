import React from 'react';
import PropTypes from 'prop-types';
import { ProfileTitleStyle } from './styles';
import { Text } from '../../index';

const ProfileTitle = (props) => {
  const isLoading = !!props.loading;

  return (
    <ProfileTitleStyle>
      <Text
        title={props.title}
        titleTextTop={props.titleTextTop}
        titleTextBottom={props.titleTextBottom}
        titleColor='black'
        loading={isLoading}
      />
    </ProfileTitleStyle>
  );
};

ProfileTitle.propTypes = {
  title: PropTypes.string,
  titleTextTop: PropTypes.string,
  titleTextBottom: PropTypes.string,
  loading: PropTypes.bool,
};

ProfileTitle.defaultProps = {
};

export default ProfileTitle;
