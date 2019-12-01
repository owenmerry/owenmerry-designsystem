import React from 'react';
import { Hero } from 'owenmerry-designsystem';

export function ComponentsPage() {
    return (
      <div>
        <h2>Hero</h2>
        <Hero
          title='The Desert'
          paragraph='A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.'
          buttonLabel='Join Now'
        ></Hero>
        <Hero
          title='The Desert 2'
          paragraph='A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart.'
          buttonLabel='Join Now'
        ></Hero>
      </div>
    );
  }