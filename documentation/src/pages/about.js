import React from 'react';
import {
  CallToAction,
  Features,
  Pricing,
  Articles,
  Header,
  Gallery,
} from 'owenmerry-designsystem';

export function AboutPage() {


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
        <Articles />
        <CallToAction
          title='Free Trial'
          paragraph='dfvdvf er veqv e qrv evqev eq v vad va sdvsd vsd vasdv'
          buttonLabel='Sign Up Now'
        ></CallToAction>
        <Features />
        <Pricing />
        <Gallery />
        <CallToAction
          title='Free Trial'
          paragraph='dfvdvf er veqv e qrv evqev eq v vad va sdvsd vsd vasdv'
          buttonLabel='Sign Up Now'
        ></CallToAction>
      </div>
    );
  }
