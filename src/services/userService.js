import { post } from "./http";

const login = (username, password) => {
  const user = { username, password };
  const response = post("/users/login", user, false, "");
  return response;
};

export { login };
