import React from 'react';

import { storiesOf } from '@storybook/react';
import Layout from './index';

// Layout
storiesOf('Organisms/Layout', module)
  .add('Default', () => <Layout>Inside Layout</Layout>)
  .add('Components menu', () => <Layout layout="component">Inside Layout</Layout>)
  .add('Hide side menu', () => <Layout hideMenu={true}>Inside Layout</Layout>);
