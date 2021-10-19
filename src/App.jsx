import { useContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "./lib/routes";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const { restricted, unrestricted } = routes;
  const { isLoggedIn } = useContext(AuthContext);
  const isAuth = isLoggedIn();

  return (
    <main>
      <BrowserRouter>
        <Switch>
          {isAuth
            ? restricted.map(({ path, component }, index) => (
                <Route key={index} exact path={path} component={component} />
              ))
            : unrestricted.map(({ path, component }, index) => (
                <Route key={index} exact path={path} component={component} />
              ))}
        </Switch>
      </BrowserRouter>
    </main>
  );
};

export default App;
