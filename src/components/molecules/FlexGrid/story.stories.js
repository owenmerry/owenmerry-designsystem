import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from '../Card/index';
import FlexGrid from './index';

// Card
storiesOf('Molecules/Flex Grid', module).add('Default', () => (
  <FlexGrid>
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </FlexGrid>
));
