import React from 'react';
import { Meta, Story } from '@storybook/react';
import { PoweredBy, PoweredByProps } from '.';

const meta: Meta = {
  title: 'Components/Powered By',
  component: PoweredBy,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<PoweredByProps> = (args) => <PoweredBy {...args} />;

export const Default = Template.bind({});
