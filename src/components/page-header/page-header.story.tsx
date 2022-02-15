import React from 'react';
import { Meta, Story } from '@storybook/react';
import { PageHeader, PageHeaderProps } from '.';
import { Button } from '@material-ui/core';
import { FlightLand } from '@material-ui/icons';

const meta: Meta = {
  title: 'Components/Page Header',
  component: PageHeader,
  parameters: {
    controls: { expanded: true },
    actions: {
      handles: ['click', 'click .btn'],
    },
  },
};

export default meta;

const Template: Story<PageHeaderProps> = (args) => (
  <div style={{ width: '600px' }}>
    <PageHeader {...args} />
  </div>
);

export const Plain = Template.bind({});
Plain.args = {
  title: 'Super plain header',
};

export const HomePage = Template.bind({});
HomePage.args = {
  title: 'Home page header',
  subTitle: 'with a subtitle 💯',
  children: <div>some more info here!</div>,
  homePage: true,
};

export const ActionContent = Template.bind({});
ActionContent.args = {
  title: 'Page header with actions',
  actionContent: (
    <div>
      <Button
        startIcon={<FlightLand />}
        color="primary"
        variant="outlined"
        disableElevation
        size="large"
        onClick={() => console.log('Action!')}
      >
        Click for an action
      </Button>
    </div>
  ),
};
