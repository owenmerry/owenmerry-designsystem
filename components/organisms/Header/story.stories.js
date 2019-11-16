import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs/react';

import Header from './index';

// Menu
storiesOf('Organisms/Header', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const name = text('Name', 'Arunoda Susiripala');
    const age = number('Age', 89);

    return <Header />;
  })
  .add('Selected', () => <Header page="/build-link" />);
