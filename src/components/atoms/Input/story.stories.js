import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs, color, number, text,
} from '@storybook/addon-knobs/react';
import Input from './index';

// Menu
storiesOf('Atoms/Input', module)
  .addDecorator(withKnobs)
  .add('Default', () => <Input />)
  .add('Checkbox', () => <Input type="checkbox" />)
  .add('Textbox', () => <Input type="text" />)
  .add('Select', () => <Input type="select" />)
  .add('Custom', () => {
    // const backgroundColor = color('Background Color');
    // const fontColor = color('Font Color');
    // const fontSize = number('Font Size');
    const inputType = text('Type', 'Text');

    return <Input type={inputType} />;
  });
