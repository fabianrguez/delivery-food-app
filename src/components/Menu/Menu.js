import { useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ open, userPhoto }) => {
  const [ menuItems ] = useState([
    {
      icon: 'home',
      label: 'Inicio'
    },
    {
      icon: 'cart',
      label: 'Mi carrito'
    },
    {
      icon: 'order',
      label: 'Pedidos'
    },
    {
      icon: 'heart',
      label: 'Favoritos'
    },
    {
      icon: 'card',
      label: 'Pagos'
    },
    {
      icon: 'exit',
      label: 'Salir'
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
            menuItems && menuItems.map(({ label, icon }) => (
                <li key={ label } className="dfa-menu__content-nav-item">
                  <Link href="#">
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