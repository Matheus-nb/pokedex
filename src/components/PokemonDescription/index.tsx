import React from 'react'
import './pokeDescription.scss'


interface IPokemonDescProps {
  height: number;
  weight: number;
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


export function PokemonDescription(Pokemon: IPokemonDescProps) {
  return (
    <div className="pokemon__details--more">

      <p><b>Altura</b> de <b>{Pokemon.height * 10} cm</b></p>

      <p><b>Peso</b> de <b>{(Pokemon.weight * 0.1).toFixed(2)} kg</b></p>

      <h3>Status</h3>

      <p><b>Hp : {Pokemon.hpValue}</b></p>
      <p><b>Attack : {Pokemon.attackValue}</b></p>
      <p><b>Defense : {Pokemon.defenseValue}</b></p>
      <p><b>Special.Atk : {Pokemon.spAtkValue}</b></p>
      <p><b>Special.Def : {Pokemon.spDefValue}</b></p>
      <p><b>Speed : {Pokemon.speedValue}</b></p>

    </div>
  )
}
