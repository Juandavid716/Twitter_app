import { get, post, deleteRequest } from "./http";

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
  const response = post("/tweets", netTweet, false, tkn);
  return response;
};

const getTweetsService = (tkn) => {
  const response = get("/tweets", "", tkn);
  return response;
};

const postLikesService = (like, tweetId, tkn) => {
  const likes = { like, tweetId };
  const response = post("/tweets/likes", likes, false, tkn);
  return response;
};

const deleteTweetService = (tweetId, tkn) => {
  const tweet = { tweetId };
  const response = deleteRequest("/tweets", tweet, false, tkn);
  return response;
};

export {
  loginService,
  signupService,
  createTweetService,
  getTweetsService,
  postLikesService,
  deleteTweetService,
};
