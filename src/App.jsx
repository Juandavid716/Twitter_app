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
      // Show the component only when the user is logged in
      // Otherwise, redirect the user to /signin page
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
      // restricted = false meaning public route
      // restricted = true meaning restricted route
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
              restricted={true}
              path={path}
              component={component}
              exact
            />
          ))}
          {restricted.map(({ path, component }, index) => (
            <PrivateRoute path={path} component={component} exact />
          ))}
        </Switch>
      </BrowserRouter>
    </main>
  );
};

export default App;
