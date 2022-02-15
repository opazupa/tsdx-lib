import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { addDecorator } from '@storybook/react';
import { themes } from '@storybook/theming';
import React from 'react';
import StoryRouter from 'storybook-react-router';

import { materialTheme } from '../src/theme';

const order = ['Welcome', 'Docs', 'Components'];

addDecorator(StoryRouter());
addDecorator((story) => (
  <ThemeProvider theme={materialTheme}>
    <CssBaseline />
    {story()}
  </ThemeProvider>
));

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  backgrounds: {
    default: 'light',
  },
  layout: 'centered',
  options: {
    storySort: (a, b) => {
      const aName = a[0];
      const bName = b[0];

      if (aName.includes('docs-') || bName.includes('docs-')) {
        const aIdx = order.findIndex((i) => aName.indexOf(i) > -1);
        const bIdx = order.findIndex((i) => bName.indexOf(i) > -1);
        return aIdx - bIdx;
      }

      return aName < bName ? -1 : 1;
    },
  },
  docs: {
    theme: themes.dark,
  },
  viewMode: 'canvas',
};
