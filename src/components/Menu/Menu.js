import { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ open, userPhoto, toggleMenu }) => {
  const [ menuItems ] = useState([
    {
      icon: 'home',
      label: 'Inicio',
      to: '/'
    },
    {
      icon: 'cart',
      label: 'Mi carrito',
      to: '/'
    },
    {
      icon: 'order',
      label: 'Pedidos',
      to: '/'
    },
    {
      icon: 'heart',
      label: 'Favoritos',
      to: '/'
    },
    {
      icon: 'card',
      label: 'Pagos',
      to: '/'
    },
    {
      icon: 'exit',
      label: 'Salir',
      to: '/'
    },
  ])
  return (
    <nav className={ `dfa-menu ${ open ? 'open' : '' }` }>
      <div className="dfa-menu__content">
        <div className="dfa-menu__content-user">
          <div className="dfa-menu__content-user-thumbnail">
            <img src={ userPhoto } alt="User Profile"/>
          </div>
          <h3 className="dfa-menu__content-user-name">Hola, Batman</h3>
        </div>
        <ul className="dfa-menu__content-nav-items">
          {
            menuItems && menuItems.map(({ label, icon, to }) => (
                <li key={ label } className="dfa-menu__content-nav-item">
                  <Link to={ to } onClick={ toggleMenu }>
                    <i className={ `icon icon-${ icon }` }></i>
                    <span>{ label }</span>
                  </Link>
                </li>
              )
            )
          }
        </ul>
      </div>
    </nav>
  );
}

export default Menu;