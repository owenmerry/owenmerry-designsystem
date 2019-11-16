import React from 'react';

import { storiesOf } from '@storybook/react';
import MenuHorizontal from './index';

// Menu
storiesOf('Molecules/Menu Horizontal', module)
  .add('Default', () => <MenuHorizontal />)
  .add('Selected', () => <MenuHorizontal page="/build-link" />);
