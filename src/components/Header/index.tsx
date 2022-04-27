import { ActiveLink } from '../ActiveLink';
import './header.scss';

/**
* Componente Header com links para navegação.
*/

export function Header() {
  return (

    <header className="header__container">

      <div className="header__content">

        <img src="/images/logo.png" alt="Logo Pokedex" />

        <nav className="header__nav">

          <ActiveLink to='/'>Home</ActiveLink>

          <ActiveLink to='/pokemons'>Pokemons</ActiveLink>

          <ActiveLink to='/contact'>Contato</ActiveLink>

        </nav>

      </div>

    </header >
  );
}