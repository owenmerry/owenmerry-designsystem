import React from 'react';
import {
  Hero,
  CallToAction,
  Features,
  Pricing,
  Articles,
  Header,
} from 'owenmerry-designsystem';

export function HomePage() {


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
        <Hero
          title='Component Library'
          paragraph='With hundreds of components to choose from you can design anything '
          buttonLabel='Get started'
        ></Hero>
        <CallToAction
          title='Get started for free'
          paragraph='This is the most easiest and customizable react component library'
          buttonLabel='Build your wesite'
        ></CallToAction>
        <Features />
        <Pricing />
        <Articles />
        <CallToAction
          title='Free Trial'
          paragraph='dfvdvf er veqv e qrv evqev eq v vad va sdvsd vsd vasdv'
          buttonLabel='Sign Up Now'
        ></CallToAction>
      </div>
    );
  }
