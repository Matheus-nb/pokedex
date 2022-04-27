import React, { useState } from 'react'
import { PokemonDescription } from '../PokemonDescription';
import './pokeDocker.scss';

interface IPokemonProps {
  id: number;
  name: string;
  image: string;
  type: string;
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
* Componente docker dos status de cada pokemon, para o mesmo se utiliza do pokeDescription.
*/

export function PokemonDocker(Pokemon: IPokemonProps) {
  const [show, setShow] = useState(false)

  return (
    <div className="docker__pokemon">

      <div className="pokemon__number">
        <small>#0{Pokemon.id}</small>
      </div>

      <img src={Pokemon.image} alt={Pokemon.name} />

      <div className="pokemon__details">

        <h3>{Pokemon.name.toUpperCase()}</h3>

        <small>Type : {Pokemon.type}</small>

        <button className="pokemon__button--showStatus" onClick={() => setShow(!show)}>{show === true ? "Less" : "More"}</button>

        {
          show === true ? <PokemonDescription {...Pokemon} /> : <></>
        }

      </div>

    </div>
  )
}