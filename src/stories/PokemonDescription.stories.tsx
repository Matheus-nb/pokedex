import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { BrowserRouter } from "react-router-dom";

import { PokemonDescription } from '../components/PokemonDescription';

export default {
  title: 'Components/PokemonDescription',
  component: PokemonDescription,
} as ComponentMeta<typeof PokemonDescription>;

const Template: ComponentStory<typeof PokemonDescription> = (args) => (
  <PokemonDescription {...args} />
);

export const PokeDescription = Template.bind({});

PokeDescription.args = {
  height: 80,
  weight: 96,
  hp: 'HP',
  attack: 'Attack',
  defense: 'Defense',
  spAtk: 'Sp. Atk',
  spDef: 'Sp. Def',
  speed: 'Speed',
  hpValue: 37,
  attackValue: 39,
  defenseValue: 54,
  spAtkValue: 32,
  spDefValue: 12,
  speedValue: 67,
};

