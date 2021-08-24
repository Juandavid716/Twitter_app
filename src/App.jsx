import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import routes from './lib/routes'

const App = () => {
  const { restricted, unrestricted } = routes;
  return (
    <main>
      <BrowserRouter>
        <h1>App</h1>
        <Nav />
        <Switch>
          {
            restricted.map(({ path, component }) =>
              <Route exact path={path} component={component} />)
          }
          {
            unrestricted.map(({ path, component }) =>
              <Route exact path={path} component={component} />)
          }
        </Switch>
      </BrowserRouter>
    </main>
  );
};

export default App;
