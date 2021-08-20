import Main from './Main';
import Menu from './components/Menu/Menu';
import { useState } from 'react';

function App() {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className={ `dfa-app ${ isMenuOpen ? 'dfa-app--menu-open' : '' }` }>
      <Menu
        userPhoto="https://www.lego.com/cdn/cs/set/assets/blt167d8e20620e4817/DC_-_Character_-_Details_-_Sidekick-Standard_-_Batman.jpg?fit=crop&format=jpg&quality=80&width=800&height=426&dpr=1"
        toggleMenu={ toggleMenu }/>
      <Main isMenuOpen={ isMenuOpen } toggleMenu={ toggleMenu }/>
    </div>
  );
}

export default App;
