import Header from '../Header/Header';
import { useState } from 'react';

const Layout = ({ children }) => {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);
  return (
    <div className={ `dfa-layout ${ isMenuOpen ? 'open' : '' }` }>
      <Header title="Food Delivery App"
              userPhoto="https://www.lego.com/cdn/cs/set/assets/blt167d8e20620e4817/DC_-_Character_-_Details_-_Sidekick-Standard_-_Batman.jpg?fit=crop&format=jpg&quality=80&width=800&height=426&dpr=1"
              openMenu={ () => setIsMenuOpen(!isMenuOpen) }/>
      <main>
        { children }
      </main>
    </div>
  );
}

export default Layout;