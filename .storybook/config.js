import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { GlobalStyle } from '../components/organisms/Layout/styles';

// automatically import all files ending in *.stories.js
const req = require.context('../components', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach((filename) => req(filename));
}
configure(loadStories, module);

// add documentation styles
addDecorator(
  withInfo({
    header: true,
    inline: true,
    excludedPropTypes: [],
    styles: {
      infoStory: {
        border: '1px solid #eee',
        padding: '20px 40px',
      },
    },
  })
);

// component view style
addDecorator((story) => <div style={{ padding: '0px 20px' }}>{story()}</div>);

// add global styles
function withGlobalStyles(storyFn) {
  return (
    <React.Fragment>
      <GlobalStyle />
      {storyFn()}
    </React.Fragment>
  );
}
addDecorator(withGlobalStyles);
