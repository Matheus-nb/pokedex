import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from "react-router-dom";

import { Header } from '../components/Header';

export default {
  title: 'Components/Header',
  component: Header,
} as ComponentMeta<typeof Header>;


const Template: ComponentStory<typeof Header> = () => (
  <BrowserRouter>
    <Header />
  </BrowserRouter>
);

export const HeaderContainer = Template.bind({});
