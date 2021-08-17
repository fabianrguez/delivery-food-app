import SearchBox from '../../components/SearchBox/SearchBox';
import CategoryList from '../../components/Category/CategoryList';
import { useState } from 'react';

const Home = () => {
  const [ categories ] = useState([
    {
      name: 'Pizzas',
      image: 'https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2013/04/pizza-margarita.jpg' },
    {
      name: 'Hamburguesas',
      image: 'https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2013/04/pizza-margarita.jpg'
    },
    {
      name: 'Bebidas',
      image: 'https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2013/04/pizza-margarita.jpg' },
    {
      name: 'Sushi',
      image: 'https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2013/04/pizza-margarita.jpg' },
    {
      name: 'Bocadillos',
      image: 'https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2013/04/pizza-margarita.jpg'
    },
    {
      name: 'Carnes',
      image: 'https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2013/04/pizza-margarita.jpg' },
  ]);

  return (
    <div className="dfa-home">
      <fieldset className="dfa-home__location">
        <i className="icon icon-marker" aria-hidden="true"></i>
        <input type="search" name="location" placeholder="Ubicación"/>
      </fieldset>
      <div className="dfa-home__greeting">
        <h3 className="dfa-home__greeting-name">Hola, Batman</h3>
        <h1 className="dfa-home__greeting-general">Buenos días</h1>
      </div>
      <SearchBox/>
      <CategoryList title="Categorías" categories={ categories }/>
    </div>
  );
}

export default Home;