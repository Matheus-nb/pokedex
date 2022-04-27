import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Contact } from '../pages/Contact';
import { BrowserRouter } from "react-router-dom";

export default {
  title: 'Pages/Contact',
  component: Contact,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Contact>;

const Template: ComponentStory<typeof Contact> = () =>
(
  <BrowserRouter>
    <Contact />
  </BrowserRouter>
);

export const Contato = Template.bind({});