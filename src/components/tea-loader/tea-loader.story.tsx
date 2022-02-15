import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TeaLoader } from '.';

const meta: Meta = {
  title: 'Components/Tea Loader',
  component: TeaLoader,
  parameters: {
    controls: { expanded: false },
  },
};

export default meta;

const Template: Story = (args) => (
  <div style={{ textAlign: 'center' }}>
    <TeaLoader {...args} />
  </div>
);

export const Default = Template.bind({});
