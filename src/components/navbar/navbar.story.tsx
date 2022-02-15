import React from 'react';
import { Meta, Story } from '@storybook/react';
import { NavBar, NavBarProps } from '.';

const meta: Meta = {
  title: 'Components/NavBar',
  component: NavBar,
  parameters: {
    controls: { expanded: true },
    actions: {
      handles: ['click', 'click .btn'],
    },
  },
};

export default meta;

const Template: Story<NavBarProps> = (args) => (
  <div style={{ width: '400px' }}>
    <NavBar {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Test title',
};
