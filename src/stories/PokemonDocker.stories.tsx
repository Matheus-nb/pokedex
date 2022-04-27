import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PokemonDocker } from '../components/PokemonDocker';

export default {
  title: 'Components/PokemonDocker',
  component: PokemonDocker,
} as ComponentMeta<typeof PokemonDocker>;

const Template: ComponentStory<typeof PokemonDocker> = (args) => (
  <PokemonDocker {...args} />
);

export const PokeDocker = Template.bind({});

PokeDocker.args = {
  id: 1,
  name: 'Bulbasaur',
  image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  type: 'Grass',
  height: 7,
  weight: 69,
  hpValue: 45,
  attackValue: 49,
  defenseValue: 49,
  spAtkValue: 65,
  spDefValue: 65,
  speedValue: 45,
};

