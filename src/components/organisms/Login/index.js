import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import { LoginStyle } from './styles';
import { Input, Button, Wrapper, Alert } from '../../index';
import { initGoogleSignIn, initGoogleSignInOneTap } from './helper';

const Login = (props) => {
  // variables
  const isGoogleSignIn = props.showGoogleSignIn || false;

  // state
  const [stateEmail, setStateEmail] = useState('');
  const [statePassword, setStatePassword] = useState('');

  // functions
  const signedIn = (data) => {
    const profile = data.getBasicProfile();
    const sendData = {
      id: profile.getId(),
      name: profile.getName(),
      email: profile.getEmail(),
      image: profile.getImageUrl(),
      token: data.getAuthResponse().id_token,
      clientId: props.googleClientId,
    };

    props.onGoogleLogin(sendData);
  };
  const signedInOneTap = (data) => {
    props.onGoogleLogin(data);
  };
  const errorCallback = (err) => {
    props.googleErrorCallback ? props.googleErrorCallback(err) : console.log('error callback', err);
  };
  const errorInitCallback = (err) => {
    props.googleInitCallback ? props.googleInitCallback(err) : console.log('init error', err);
  };
  const runLogin = () => {
    const data = {
      email: stateEmail,
      password: statePassword,
    };
    props.onLogin(data);
  };

  // refs
  const refGoogle = useRef();

  useEffect(() => {
    if (isGoogleSignIn) {
      setTimeout(() => {
        initGoogleSignIn(props.googleClientId, refGoogle.current, signedIn, errorCallback, errorInitCallback);
        initGoogleSignInOneTap(props.googleClientId, signedInOneTap);
      }, 100);
    }
  }, []);

  return (
    <Wrapper>
      <LoginStyle>
        <div className='box'>
          <h2>Login to webshare</h2>
          <Alert type='error' text={props.errorText} />
          {isGoogleSignIn &&
            <div ref={refGoogle} className='google-signin'>
              <svg width='16px' height='16px' viewBox='0 0 16 16' version='1.1'> <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'> <g id='btn_google_signin_light_normal' transform='translate(-15.000000, -15.000000)'> <g id='logo_googleg_48dp' transform='translate(15.000000, 15.000000)'> <path d='M15.68,8.18181818 C15.68,7.61454545 15.6290909,7.06909091 15.5345455,6.54545455 L8,6.54545455 L8,9.64 L12.3054545,9.64 C12.12,10.64 11.5563636,11.4872727 10.7090909,12.0545455 L10.7090909,14.0618182 L13.2945455,14.0618182 C14.8072727,12.6690909 15.68,10.6181818 15.68,8.18181818 L15.68,8.18181818 Z' id='Shape' fill='#4285F4' /> <path d='M8,16 C10.16,16 11.9709091,15.2836364 13.2945455,14.0618182 L10.7090909,12.0545455 C9.99272727,12.5345455 9.07636364,12.8181818 8,12.8181818 C5.91636364,12.8181818 4.15272727,11.4109091 3.52363636,9.52 L0.850909091,9.52 L0.850909091,11.5927273 C2.16727273,14.2072727 4.87272727,16 8,16 L8,16 Z' id='Shape' fill='#34A853' /> <path d='M3.52363636,9.52 C3.36363636,9.04 3.27272727,8.52727273 3.27272727,8 C3.27272727,7.47272727 3.36363636,6.96 3.52363636,6.48 L3.52363636,4.40727273 L0.850909091,4.40727273 C0.309090909,5.48727273 0,6.70909091 0,8 C0,9.29090909 0.309090909,10.5127273 0.850909091,11.5927273 L3.52363636,9.52 L3.52363636,9.52 Z' id='Shape' fill='#FBBC05' /> <path d='M8,3.18181818 C9.17454545,3.18181818 10.2290909,3.58545455 11.0581818,4.37818182 L13.3527273,2.08363636 C11.9672727,0.792727273 10.1563636,0 8,0 C4.87272727,0 2.16727273,1.79272727 0.850909091,4.40727273 L3.52363636,6.48 C4.15272727,4.58909091 5.91636364,3.18181818 8,3.18181818 L8,3.18181818 Z' id='Shape' fill='#EA4335' /> <polygon id='Shape' points='0 0 16 0 16 16 0 16' /> </g> </g> </g> </svg>
              Continue with Google
            </div>
          }
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
              type='password'
              width='100%'
              value={statePassword}
              placeholder='Password'
              onChange={(e) => setStatePassword(e.target.value)}
            />
          </div>
          <div className='button-box'>
            <Button onClick={runLogin}>Login</Button><br />
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
  onGoogleLogin: PropTypes.func,
  errorText: PropTypes.string,
  showGoogleSignIn: PropTypes.bool,
  googleClientId: PropTypes.string,
  googleInitCallback: PropTypes.func,
  googleErrorCallback: PropTypes.func,
};

Login.defaultProps = {
};

export default Login;
