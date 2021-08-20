import SearchBox from '../../components/SearchBox/SearchBox';
import CategoryList from '../../components/Category/CategoryList';
import { useState } from 'react';
import CardList from '../../components/Card/CardList';

const Home = () => {
  const [ categories ] = useState([
    {
      name: 'Pizzas',
      image: 'https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2013/04/pizza-margarita.jpg'
    },
    {
      name: 'Hamburguesas',
      image: 'https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2013/04/pizza-margarita.jpg'
    },
    {
      name: 'Bebidas',
      image: 'https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2013/04/pizza-margarita.jpg'
    },
    {
      name: 'Sushi',
      image: 'https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2013/04/pizza-margarita.jpg'
    },
    {
      name: 'Bocadillos',
      image: 'https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2013/04/pizza-margarita.jpg'
    },
    {
      name: 'Carnes',
      image: 'https://sevilla.abc.es/gurme/wp-content/uploads/sites/24/2013/04/pizza-margarita.jpg'
    },
  ]);
  const [ mostPopulars ] = useState([
    {
      name: 'Pizza Arkham',
      category: 'Pizzas',
      price: 10,
      previousPrice: 15,
      image: 'https://cdn7.kiwilimon.com/recetaimagen/13003/640x426/th5-640x426-5707.jpg.webp',
      liked: true,
      productUrl: '/product/123'
    },
    {
      name: 'Sushi Ninja Roll',
      category: 'Sushi',
      price: 20,
      previousPrice: 25,
      image: 'https://cdn7.kiwilimon.com/recetaimagen/13003/640x426/th5-640x426-5707.jpg.webp',
      liked: false,
      productUrl: '/product/123'
    },
    {
      name: 'Burger Metropolis',
      category: 'Hamburgesas',
      price: 12,
      previousPrice: 15,
      image: 'https://cdn7.kiwilimon.com/recetaimagen/13003/640x426/th5-640x426-5707.jpg.webp',
      liked: true,
      productUrl: '/product/123'
    },
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
      <CardList title="Más populares" cards={ mostPopulars }/>
    </div>
  );
}

export default Home;