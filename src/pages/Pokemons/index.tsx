import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { PokemonDocker } from "../../components/PokemonDocker";
import './pokemons.scss';

type PokemonProps = {
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

export function Pokemons() {

  const [allPokemons, setAllPokemons] = useState<PokemonProps[]>([]);
  const [loadPokemons, setLoadPokemons] = useState('https://pokeapi.co/api/v2/pokemon?limit=40');

  async function getAllPokemons() {
    const response = await fetch(loadPokemons)
    const data = await response.json();

    setLoadPokemons(data.next);

    data.results.map(async (pokemon: { name: any; }) => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
      const data = await response.json();

      const pokemonData: PokemonProps = {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
        type: data.types[0].type.name,
        height: data.height,
        weight: data.weight,
        hpValue: data.stats[0].base_stat,
        attackValue: data.stats[1].base_stat,
        defenseValue: data.stats[2].base_stat,
        spAtkValue: data.stats[3].base_stat,
        spDefValue: data.stats[4].base_stat,
        speedValue: data.stats[5].base_stat,
      }


      setAllPokemons(currentList => [...currentList, pokemonData].sort((a, b) => (a.id < b.id) ? -1 : 1))
    })
  }

  useEffect(() => {
    getAllPokemons();
  }, [])

  return (
    <>
      <Header />

      <div className="pokemons__container">

        <div className="pokemons__content">

          {allPokemons.map((pokemon, index) => <PokemonDocker key={index} {...pokemon} />)}

        </div>

        {
          !!loadPokemons && <button className="pokemons__button--showMore" onClick={() => getAllPokemons()}>Mostrar mais Pokemons</button>
        }

      </div>
    </>
  )
}