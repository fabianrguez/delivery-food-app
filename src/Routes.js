import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Layout from './components/Layout/Layout';

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default Routes;