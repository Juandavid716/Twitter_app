import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = (props) => {
  const [user, setUser] = useState(localStorage.getItem("user"));

  useEffect(() => {
    const user = localStorage.getItem("user");
    setUser(user);
  }, []);

  const login = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const isLoggedIn = () => {
    return user;
  };

  return (
    <AuthContext.Provider value={{ login, logout, isLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
