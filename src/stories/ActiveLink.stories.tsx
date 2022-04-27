import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from "react-router-dom";

import { ActiveLink } from '../components/ActiveLink';

export default {
  title: 'Components/ActiveLink',
  component: ActiveLink,
} as ComponentMeta<typeof ActiveLink>;

const Template: ComponentStory<typeof ActiveLink> = (args) => (
  <BrowserRouter>
    <div className="header__content" >
      <nav className="header__nav">
        <ActiveLink {...args}>Home</ActiveLink>
      </nav>
    </div>
  </BrowserRouter>
);

export const Link = Template.bind({});

Link.args = {
  to: '/',
};
