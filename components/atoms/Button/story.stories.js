import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs, color, number, text, boolean,
} from '@storybook/addon-knobs/react';
import Button from './index';

// Menu
storiesOf('Atoms/Button', module)
  .addDecorator(withKnobs)
  .add('Default', () => <Button>Default Button</Button>)
  .add('Disabled', () => <Button disabled>Disabled Button</Button>)
  .add('Custom', () => {
    const backgroundColor = color('Background Color');
    const fontColor = color('Font Color');
    const fontSize = number('Font Size');
    const buttonText = text('Text', 'Button Text');
    const disabled = boolean('Disabled', false);

    return (
      <Button
        disabled={disabled}
        backgroundColor={backgroundColor}
        fontColor={fontColor}
        fontSize={fontSize}
      >
        {buttonText}
      </Button>
    );
  });
