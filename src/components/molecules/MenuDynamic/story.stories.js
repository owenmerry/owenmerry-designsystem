import React from 'react';

import { storiesOf } from '@storybook/react';
import MenuDynamic from './index';

// Card
storiesOf('Molecules/MenuDynamic', module)
  .add('Default', () => <MenuDynamic />)
  .add('Selected', () => <MenuDynamic section="components" />);
