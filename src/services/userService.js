import { post } from "./http";

const loginService = (username, password) => {
  const user = { username, password };
  const response = post("/users/login", user, false, "");
  return response;
};

const signupService = (
  username,
  password,
  passwordConfirmation,
  name,
  email
) => {
  const newUser = { username, password, passwordConfirmation, name, email };
  const response = post("/users", newUser, false, "");
  return response;
};

const createTweetService = (content, tkn) => {
  const netTweet = { content };
  console.log(tkn);
  const response = post("/tweets", netTweet, false, tkn);
  return response;
};

export { loginService, signupService, createTweetService };