import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Layout from './components/Layout/Layout';
import ProductDetail from './pages/Home/ProductDetail';

const Main = ({ isMenuOpen, toggleMenu }) => {
  return (
    <Layout isMenuOpen={ isMenuOpen } toggleMenu={ toggleMenu }>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/product/:id">
          <ProductDetail/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default Main;