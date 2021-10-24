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

const getTweetService = (tweetId) => {
  const response = get(`/tweets/${tweetId}`, "", "");
  return response;
};

const getUserService = (userId) => {
  const response = get(`/users/${userId}`, "", "");
  return response;
};

const createCommentService = (comment, tweetId, tkn) => {
  const newComment = { comment, tweetId };
  const response = post("/tweets/comments", newComment, false, tkn);
  return response;
};

const deleteCommentService = (tweetId, tkn) => {
  const tweet = { tweetId };
  const response = deleteRequest("/tweets/comments", tweet, false, tkn);
  return response;
};
export {
  loginService,
  signupService,
  createTweetService,
  createCommentService,
  getTweetsService,
  postLikesService,
  deleteTweetService,
  getTweetService,
  getUserService,
  deleteCommentService,
};
