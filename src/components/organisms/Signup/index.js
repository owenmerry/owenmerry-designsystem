import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { SignupStyle } from './styles';
import { Input, Button, Wrapper } from '../../index';

const Signup = (props) => {
  const [stateName, setStateName] = useState('');
  const [stateEmail, setStateEmail] = useState('');
  const [statePassword, setStatePassword] = useState('');

  const runSignup = () => {
    const data = {
      name: stateName,
      email: stateEmail,
      password: statePassword,
    };
    props.onSignup(data);
  };

  return (
    <Wrapper>
      <SignupStyle>
        <div className='box'>
          <h2>Signup to webshare</h2>
          {props.errorText && (
            <div className='error'>{props.errorText}</div>
          )}
          <div className='input-box'>
            <Input
              width='100%'
              value={stateName}
              placeholder='Full Name or Username'
              onChange={(e) => setStateName(e.target.value)}
            />
          </div>
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
            <Button onClick={runSignup}>Create Account</Button>
          </div>
          <div className='info-box'>
            <p>Already have an account? <a href='/login'>Login Here</a></p>
          </div>
        </div>
      </SignupStyle>
    </Wrapper>
  );
};

Signup.propTypes = {
  onSignup: PropTypes.func,
  errorText: PropTypes.string,
};

Signup.defaultProps = {
};

export default Signup;
