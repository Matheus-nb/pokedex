import { Header } from "../../components/Header";
import './home.scss';


export function Home() {
  return (
    <>

      <Header />

      <div className="home__container">

        <div className="home__lorem">

          <h1>Pokédex for life!</h1>
          <p>Quer achar seu pokemon favorito ??</p>
          <p>Quer poder saber os status de cada Pokemon ??</p>
          <p>Bem vindo ao Pokédex, e sinta-se livra para ser um verdadeiro <strong>TREINADOR POKEMON</strong></p>
          
        </div>



        <div className="home__imageContainer">

          <img src="/images/Pokedex.png" alt="Pokedex" />

        </div>

      </div>
      
    </>
  )
}