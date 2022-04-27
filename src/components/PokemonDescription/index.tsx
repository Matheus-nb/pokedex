import React from 'react'
import './pokeDescription.scss'


interface IPokemonDescProps {
  height: number;
  weight: number;
  hp: string;
  attack: string;
  defense: string;
  spAtk: string;
  spDef: string;
  speed: string;
  hpValue: number;
  attackValue: number;
  defenseValue: number;
  spAtkValue: number;
  spDefValue: number;
  speedValue: number;
}

/**
* Componente de descrição dos status de cada pokemon.
*/

export function PokemonDescription({ weight, height, hp, attack, defense, spAtk, spDef, speed, hpValue,
  attackValue, defenseValue, spAtkValue, spDefValue, speedValue }: IPokemonDescProps) {

  return (
    <div className="pokemon__details--more">

      <p><b>Altura</b> de <b>{height * 10} cm</b></p>

      <p><b>Peso</b> de <b>{(weight * 0.1).toFixed(2)} kg</b></p>

      <h3>Status</h3>

      <p><b>{hp.charAt(0).toUpperCase() + hp.slice(1)} : {hpValue}</b></p>
      <p><b>{attack.charAt(0).toUpperCase() + attack.slice(1)} : {attackValue}</b></p>
      <p><b>{defense.charAt(0).toUpperCase() + defense.slice(1)} : {defenseValue}</b></p>
      <p><b>{spAtk.charAt(0).toUpperCase() + spAtk.slice(1)} : {spAtkValue}</b></p>
      <p><b>{spDef.charAt(0).toUpperCase() + spDef.slice(1)} : {spDefValue}</b></p>
      <p><b>{speed.charAt(0).toUpperCase() + speed.slice(1)} : {speedValue}</b></p>

    </div>
  )
}
