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
* Componente docker dos status de cada pokemon, para o mesmo se utiliza do pokeDescription.
*/

export function PokemonDocker({ id, name, image, type, height, weight, hp, attack, defense, spAtk, spDef, speed, hpValue, attackValue, defenseValue,
  spAtkValue, spDefValue, speedValue }: IPokemonProps) {
  const [show, setShow] = useState(false)

  return (
    <div className="docker__pokemon">

      <div className="pokemon__number">
        <small>#0{id}</small>
      </div>

      <img src={image} alt={name} />

      <div className="pokemon__details">

        <h3>{name.toUpperCase()}</h3>

        <small>Type : {type}</small>

        <button className="pokemon__button--showStatus" onClick={() => setShow(!show)}>{show === true ? "Less" : "More"}</button>

        {
          show === true ?
            <PokemonDescription
              weight={weight}
              height={height}
              hp={hp}
              attack={attack}
              defense={defense}
              spAtk={spAtk}
              spDef={spDef}
              speed={speed}

              hpValue={hpValue}
              attackValue={attackValue}
              defenseValue={defenseValue}
              spAtkValue={spAtkValue}
              spDefValue={spDefValue}
              speedValue={speedValue}
            /> : <></>
        }

      </div>

    </div>
  )
}