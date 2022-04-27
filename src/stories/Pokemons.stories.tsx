import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Pokemons } from '../pages/Pokemons';
import { BrowserRouter } from "react-router-dom";

export default {
  title: 'Pages/Pokemons',
  component: Pokemons,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Pokemons>;

const Template: ComponentStory<typeof Pokemons> = () =>
(
  <BrowserRouter>
    <Pokemons />
  </BrowserRouter>
);

export const Pokedex = Template.bind({});