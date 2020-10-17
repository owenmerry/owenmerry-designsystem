import React from 'react';
import {
  Hero,
  CallToAction,
  Features,
  Pricing,
  Articles,
  Header,
  Gallery,
  Login,
} from 'owenmerry-designsystem';

export function LoginPage() {

const googleSignedIn = (profile) => {
  console.log('Google sign in', profile);
};


    return (
      <div>
        <Header menuSettings={
          {
            items: [
              {name:'Home',url:'/'},
              {name:'About',url:'/about'},
              {name:'Components',url:'/components'},
              {name:'Atoms',url:'/atoms'},
              {name:'Example',url:'/example'},
              {name:'Login',url:'/login'},
            ]
          }
        }/>

        <Login
          showGoogleSignIn={true}
          onGoogleLogin={googleSignedIn}
          googleClientId='996626440039-7ranq95afc7hdb3bfgir5g2da8i0mb4e.apps.googleusercontent.com'
          onLogin={(info) => console.log('login', info)}
          />
        <CallToAction
          title='Free Trial'
          paragraph='dfvdvf er veqv e qrv evqev eq v vad va sdvsd vsd vasdv'
          buttonLabel='Sign Up Now'
        ></CallToAction>
      </div>
    );
  }
