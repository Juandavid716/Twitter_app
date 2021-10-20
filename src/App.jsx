import { useContext } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import routes from "./lib/routes";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const { restricted, unrestricted } = routes;
  const { isLoggedIn } = useContext(AuthContext);
  const isAuth = isLoggedIn();

  const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) =>
          isAuth ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    );
  };

  const PublicRoute = ({ component: Component, restricted, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(props) =>
          isAuth && restricted ? (
            <Redirect to="/home" />
          ) : (
            <Component {...props} />
          )
        }
      />
    );
  };

  return (
    <main>
      <BrowserRouter>
        <Switch>
          {unrestricted.map(({ path, component }, index) => (
            <PublicRoute
              key={index}
              restricted={true}
              path={path}
              component={component}
              exact
            />
          ))}
          {restricted.map(({ path, component }, index) => (
            <PrivateRoute path={path} component={component} exact key={index} />
          ))}
        </Switch>
      </BrowserRouter>
    </main>
  );
};

export default App;
