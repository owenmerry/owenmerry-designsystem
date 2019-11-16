import React from 'react';

import { storiesOf } from '@storybook/react';
import {
  withKnobs, text, boolean, color,
} from '@storybook/addon-knobs/react';
import Card from './index';

// Card
storiesOf('Molecules/Card', module)
  .addDecorator(withKnobs)
  .add('Default', () => <Card />)
  .add('Loading', () => <Card loading={true} />)
  .add('With Data', () => {
    const image = text(
      'ImageURL',
      'https://firebasestorage.googleapis.com/v0/b/linkbuilder-v2.appspot.com/o/alaska-searchpage.png-1560855100588?alt=media&token=96c97766-f1b3-4061-8d12-98a15a8aad31',
    );
    const title = text('Title', 'Card title');
    const subtitle = text('Subtitle', 'Card sub title');
    const link = text('Link', 'http://www.website.com');
    const loading = boolean('Loading', false);
    const linkTarget = boolean('Link Target', false);
    const hideLink = boolean('Hide Link', false);
    const hideViewLink = boolean('View Link', false);
    const padding = boolean('Padding', true);
    const hasFixture = boolean('hasFixture', false);

    return (
      <Card
        loading={loading}
        image={image}
        title={title}
        subtitle={subtitle}
        link={link}
        linkTarget={linkTarget}
        hideLink={hideLink}
        hideViewLink={hideViewLink}
        padding={padding}
        hasFixture={hasFixture}
      />
    );
  });
