import React from 'react';

import { storiesOf } from '@storybook/react';
import Menu from './index';

// Card
storiesOf('Molecules/Menu', module)
  .add('Default', () => <Menu />)
  .add('Selected', () => <Menu section="search" />);
