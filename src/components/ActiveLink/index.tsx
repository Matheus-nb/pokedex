import { useLocation, Link, LinkProps } from 'react-router-dom'
import './activeLink.scss';


interface IActiveLinkProps extends LinkProps {
  activeClassName?: string;
}

/**
 * Primeiro Componente UI para interação de usuário com links.
 * Necessita clicar para ver o funcionamento.
 */

export function ActiveLink({ activeClassName = 'header__nav--active', ...rest }: IActiveLinkProps) {
  const location = useLocation();

  const className = location.pathname === rest.to
    ? activeClassName
    : "";


  return (
    <Link {...rest} className={className} />
  )
}