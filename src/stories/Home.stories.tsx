import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { Home } from '../pages/Home';
import { BrowserRouter } from "react-router-dom";

export default {
  title: 'Pages/Home',
  component: Home,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (ags) =>
(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
);

export const Inicio = Template.bind({});