import React from 'react';
import { 
  Hero,
  CallToAction,
  Features,
  Pricing,
  Articles,
  Header,
  Gallery,
} from 'owenmerry-designsystem';

export function LandingPage() {
    return (
      <div>
        <h2>Landing Page</h2>
        <Header menuSettings={
          {
            items: [
              {name:'Home',url:'/home'},
              {name:'About',url:'/about'},
              {name:'Work',url:'/work'},
              {name:'Contact',url:'/contact'},
            ]
          }
        }/>
        <Hero
          title='Build Sites With Ease'
          paragraph='dfv dvadv sadvsd vsdv sdv sdv sdvadfvda vad v dv sdvsd vsd v advs dv sadv dsav'
          buttonLabel='Sign Up Now'
        ></Hero>
        <CallToAction
          title='Free Trial'
          paragraph='dfvdvf er veqv e qrv evqev eq v vad va sdvsd vsd vasdv'
          buttonLabel='Sign Up Now'
        ></CallToAction>
        <Features />
        <Pricing />
        <Articles />
        <CallToAction
          title='Free Trial'
          paragraph='dfvdvf er veqv e qrv evqev eq v vad va sdvsd vsd vasdv'
          buttonLabel='Sign Up Now'
        ></CallToAction>
        <Gallery />
      </div>
    );
  }