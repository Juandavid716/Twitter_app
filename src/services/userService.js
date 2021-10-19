import { post } from "./http";

const loginService = (username, password) => {
  const user = { username, password };
  const response = post("/users/login", user, false, "");
  return response;
};

export { loginService };
