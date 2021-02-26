// src/components/Task.stories.js

import React from 'react';
import AddIcon from './AddIcon';

export default {
  component: AddIcon,
  title: 'AddIcon',
};

const Template = args => <AddIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  addIcon: {
    
  },
};

