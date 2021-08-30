import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import routes from "./lib/routes";

const App = () => {
  const { restricted, unrestricted } = routes;
  return (
    <main>
      <BrowserRouter>
        {/* <Nav /> */}
        <Switch>
          {restricted.map(({ path, component }) => (
            <Route exact path={path} component={component} key={path} />
          ))}
          {unrestricted.map(({ path, component }) => (
            <Route exact path={path} component={component} key={path} />
          ))}
        </Switch>
      </BrowserRouter>
    </main>
  );
};

export default App;
