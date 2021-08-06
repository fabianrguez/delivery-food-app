import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';

const Routes = () => {
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default Routes;