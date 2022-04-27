import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from "react-router-dom";

import { Input } from '../components/Input';

export default {
  title: 'Components/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <Input {...args} />
);

export const BoxInput = Template.bind({});

BoxInput.args = {
  name: 'Input name',
  label: 'Input label',
  error: {
    type: 'required',
    message: 'Input error message',
  }
};

