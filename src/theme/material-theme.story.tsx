import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from '@material-ui/core';

const meta: Meta = {
  title: 'General/Theme/Example Button',
  component: undefined,
  parameters: {
    controls: { expanded: false },
    actions: {
      handles: ['click', 'click .btn'],
    },
  },
  argTypes: {
    variant: {
      options: ['outlined', 'contained'],
      control: { type: 'radio' },
    },
    color: {
      options: ['primary', 'secondary', 'default'],
      control: { type: 'select' },
    },
  },
};

export default meta;

const Template: Story<ButtonProps & { text: string }> = (args) => (
  <div style={{ textAlign: 'center' }}>
    <Button {...args}>{args.text}</Button>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  text: 'button 😄👍😍💯',
  variant: 'outlined',
  color: 'primary',
  disabled: false,
};
