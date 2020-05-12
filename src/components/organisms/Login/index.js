import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { LoginStyle } from './styles';
import { Input, Button, Wrapper } from '../../index';

const Login = (props) => {
  const [stateEmail, setStateEmail] = useState('');
  const [statePassword, setStatePassword] = useState('');

  const runLogin = () => {
    const data = {
      email: stateEmail,
      password: statePassword,
    };
    props.onLogin(data);
  };

  return (
    <Wrapper>
      <LoginStyle>
        <div className='box'>
          <h2>Login to webshare</h2>
          {props.errorText && (
            <div className='error'>{props.errorText}</div>
          )}
          <div className='input-box'>
            <Input
              width='100%'
              value={stateEmail}
              placeholder='Email Address'
              onChange={(e) => setStateEmail(e.target.value)}
            />
          </div>
          <div className='input-box'>
            <Input
              width='100%'
              value={statePassword}
              placeholder='Password'
              onChange={(e) => setStatePassword(e.target.value)}
            />
          </div>
          <div className='button-box'>
            <Button onClick={runLogin}>Login</Button>
          </div>
          <div className='info-box'>
            <p>Don't have an account? <a href='/signup'>Sign up to get started.</a></p>
          </div>
        </div>
      </LoginStyle>
    </Wrapper>
  );
};

Login.propTypes = {
  onLogin: PropTypes.func,
  errorText: PropTypes.string,
};

Login.defaultProps = {
};

export default Login;
